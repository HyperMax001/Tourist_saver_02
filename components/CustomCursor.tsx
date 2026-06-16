"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const planeRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Position and angle states tracked by refs to avoid re-renders on every frame
  const mouse = useRef({ x: 0, y: 0 });
  const cursor = useRef({ x: 0, y: 0 });
  const prev = useRef({ x: 0, y: 0 });
  const angle = useRef(-45); // default angle pointing top-right
  const requestRef = useRef<number | null>(null);

  // Trail history
  const trailPoints = useRef<{ x: number; y: number }[]>([]);

  // State to control visibility and hover size
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Detect touch devices to fallback to standard system cursor behavior
  useEffect(() => {
    const checkTouchDevice = () => {
      const hasTouch =
        window.matchMedia("(pointer: coarse)").matches ||
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0;
      setIsTouchDevice(hasTouch);
    };

    checkTouchDevice();
    window.addEventListener("resize", checkTouchDevice);
    return () => window.removeEventListener("resize", checkTouchDevice);
  }, []);

  // Update canvas size to match viewport
  useEffect(() => {
    if (isTouchDevice) return;

    const resizeCanvas = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
      }
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, [isTouchDevice]);

  // Track mouse coordinates and window boundary events
  useEffect(() => {
    if (isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible, isTouchDevice]);

  // Listen to interactive elements hover state
  useEffect(() => {
    if (isTouchDevice) return;

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const isInteractive = target.closest(
        'a, button, [role="button"], input, select, textarea, [onclick], .cursor-pointer'
      );
      if (isInteractive) {
        setIsHovered(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const isInteractive = target.closest(
        'a, button, [role="button"], input, select, textarea, [onclick], .cursor-pointer'
      );
      if (isInteractive) {
        setIsHovered(false);
      }
    };

    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, [isTouchDevice]);

  // requestAnimationFrame loop to handle smooth positioning and angle transitions
  useEffect(() => {
    if (isTouchDevice) return;

    const animate = () => {
      // 1. Smoothly interpolate (lerp) current coordinate toward mouse coordinate
      const dx = mouse.current.x - cursor.current.x;
      const dy = mouse.current.y - cursor.current.y;

      cursor.current.x += dx * 0.12; // positioning speed
      cursor.current.y += dy * 0.12;

      // 2. Calculate flight velocity vector
      const vx = cursor.current.x - prev.current.x;
      const vy = cursor.current.y - prev.current.y;

      // Store current coordinate as previous for next frame
      prev.current.x = cursor.current.x;
      prev.current.y = cursor.current.y;

      // 3. Compute flight rotation angle
      const speed = Math.sqrt(vx * vx + vy * vy);
      if (speed > 0.5) {
        // Image faces top-right (-45 degrees relative to standard right-pointing unit vector).
        // Standard angleRad = Math.atan2(vy, vx). For 0 degrees (pointing right), we rotate it by +45.
        const targetAngle = Math.atan2(vy, vx) * (180 / Math.PI) + 45;

        // Smoothly rotate to avoid sharp snapping (normalizing differences between -180 and 180 degrees)
        let diff = targetAngle - angle.current;
        while (diff < -180) diff += 360;
        while (diff > 180) diff -= 360;

        angle.current += diff * 0.16; // rotation speed
      } else {
        // Slowly float back to a neutral, slight upward tilt when resting
        const neutralAngle = -15;
        const diff = neutralAngle - angle.current;
        angle.current += diff * 0.05;
      }

      // 4. Update the Canvas Trail
      if (canvasRef.current) {
        const ctx = canvasRef.current.getContext("2d");
        if (ctx) {
          ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

          // Append current coordinate to trail array
          trailPoints.current.unshift({ x: cursor.current.x, y: cursor.current.y });

          // Keep trail size restricted to last 18 coordinates
          if (trailPoints.current.length > 18) {
            trailPoints.current.pop();
          }

          // Draw fading jet stream trail
          if (trailPoints.current.length > 1) {
            for (let i = 1; i < trailPoints.current.length; i++) {
              const p = trailPoints.current[i];
              // Decelerating size and opacity down the trail
              const ratio = (trailPoints.current.length - i) / trailPoints.current.length;
              const radius = ratio * 3.5;
              const opacity = ratio * 0.35 * (isVisible ? 1 : 0); // hide trail when cursor is out of bounds

              ctx.beginPath();
              ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
              ctx.fillStyle = `rgba(209, 248, 67, ${opacity})`; // highlight lime-green trail matching the plane
              ctx.fill();
            }
          }
        }
      }

      // 5. Update custom cursor position
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${cursor.current.x}px, ${cursor.current.y}px, 0)`;
      }

      // 6. Update inner plane rotation/scale
      if (planeRef.current) {
        const scale = isHovered ? 1.3 : 1.0;
        planeRef.current.style.transform = `translate3d(-50%, -50%, 0) rotate(${angle.current}deg) scale(${scale})`;
      }

      requestRef.current = requestAnimationFrame(animate);
    };

    // Initialize animation loop
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [isHovered, isTouchDevice, isVisible]);

  // Do not render custom cursor on touch viewports
  if (isTouchDevice) return null;

  return (
    <>
      {/* Jet Stream Trail Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-[9998]"
        style={{ opacity: isVisible ? 1 : 0, transition: "opacity 0.3s ease" }}
      />

      {/* Main Custom Cursor Wrapper */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-0 h-0 pointer-events-none z-[9999]"
        style={{
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.2s ease",
        }}
      >
        {/* Custom Paper Plane cursor element */}
        <div
          ref={planeRef}
          className="absolute w-9 h-9 flex items-center justify-center pointer-events-none transition-transform duration-75 ease-out"
          style={{
            transform: "translate3d(-50%, -50%, 0) rotate(-45deg) scale(1)",
            filter: "drop-shadow(0px 3px 6px rgba(0, 88, 64, 0.15)) drop-shadow(0px 1px 2px rgba(0,0,0,0.1))",
          }}
        >
          <img
            src="/paper-plane.png"
            alt="Paper plane cursor"
            className="w-full h-full object-contain select-none"
            draggable={false}
          />
        </div>
      </div>
    </>
  );
}
