"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function BrandBackground() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-white/50">
      {/* Pink/Red Blob */}
      <motion.div
        animate={{
          x: [0, 50, -50, 0],
          y: [0, -50, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full opacity-[0.07] blur-[100px]"
        style={{ background: "radial-gradient(circle, #e23b93 0%, #ce1126 100%)" }}
      />
      
      {/* Light Blue / Green Blob */}
      <motion.div
        animate={{
          x: [0, -70, 40, 0],
          y: [0, 60, -30, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] rounded-full opacity-[0.06] blur-[120px]"
        style={{ background: "radial-gradient(circle, #33b1e3 0%, #20aa65 100%)" }}
      />

      {/* Yellow / Orange Blob */}
      <motion.div
        animate={{
          x: [0, 80, -60, 0],
          y: [0, 40, 90, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-[20%] right-[10%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full opacity-[0.07] blur-[90px]"
        style={{ background: "radial-gradient(circle, #ffb81c 0%, #f17a22 100%)" }}
      />

      {/* Purple / Dark Blue Blob */}
      <motion.div
        animate={{
          x: [0, -40, 60, 0],
          y: [0, -80, 20, 0],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-[20%] left-[10%] w-[45vw] h-[45vw] max-w-[550px] max-h-[550px] rounded-full opacity-[0.06] blur-[110px]"
        style={{ background: "radial-gradient(circle, #4a154b 0%, #104f8c 100%)" }}
      />
    </div>
  );
}
