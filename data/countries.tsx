import React from "react";

export const countriesList = [
  { id: "international", name: "International", isAvailable: true },
  { id: "australia", name: "Australia", isAvailable: true },
  { id: "canada", name: "Canada", isAvailable: false },
  { id: "singapore", name: "Singapore", isAvailable: false },
  { id: "vietnam", name: "Vietnam", isAvailable: false },
  { id: "thailand", name: "Thailand", isAvailable: false },
  { id: "fiji", name: "Fiji", isAvailable: false },
  { id: "indonesia", name: "Indonesia", isAvailable: false },
  { id: "south-africa", name: "South Africa", isAvailable: false },
  { id: "usa", name: "USA", isAvailable: false },
  { id: "england", name: "England", isAvailable: false },
  { id: "ireland", name: "Ireland", isAvailable: false },
  { id: "scotland", name: "Scotland", isAvailable: false },
  { id: "nz", name: "New Zealand", isAvailable: false },
];

export function getCountryIcon(id: string, className: string = "w-7 h-7") {
  switch (id) {
    case "international": // Globe
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      );
    case "australia": // Kangaroo
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className} fill="currentColor">
          <title>kangaroo</title>
          <path d="M19.8 6.59L19 7.97V10.04L17.69 11.61L17.31 13.25L16 14L15.5 13.12L16.44 12.59L16.7 11.45L16.7 11.45L16.77 11.15L16.77 11.15V11.15L17.47 10.31C17.65 10.1 17.62 9.78 17.41 9.61C17.2 9.43 16.88 9.46 16.7 9.67L15.85 10.69L15.56 11.93C15.38 11.96 15.2 12 15 12C14.31 12 13.68 11.76 13.23 11.4C13.15 12.7 12.73 13.81 12.13 14.43L10.5 16.19L9.96 19.79L8.07 21L7.53 20.17L9.04 19.19L9.5 15.92L9.5 15.91L10 14.54C9.47 14.08 9.08 13.28 8.88 12.3L8.71 12.61C8.35 13.25 8 13.9 7.56 14.56C7.11 15.2 6.66 15.9 5.78 16.44C5.34 16.72 4.7 16.84 4.17 16.73C3.61 16.61 3.14 16.26 2.86 15.89C2.31 15.13 2.15 14.35 2 13.62L2.97 13.36C3.2 14 3.5 14.65 3.88 15C4.26 15.33 4.57 15.26 4.84 15C5.16 14.73 5.47 14.15 5.73 13.55C6 12.94 6.22 12.28 6.45 11.6C6.93 10.24 7.39 8.82 8.2 7.36C8.62 6.64 9.13 5.89 9.92 5.22C10.7 4.55 11.73 4 13 4S15.7 5.22 16.58 6.34C17 6.89 17.87 6.82 18.22 6.21L19.14 4.63C19 4.58 18.89 4.5 18.79 4.4C18.4 4 18.4 3.38 18.79 3L19.93 4.13C19.96 4.13 20 4.11 20 4.11C20.41 4.11 20.75 4.35 20.91 4.69L22 7L21 7.5L19.8 6.59Z" />
        </svg>
      );
    case "canada": // Maple Leaf
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l1.5 4 3.5-1.5-1 3.5 4 1.5-4.5.5 1.5 4.5-4-1.5-.5 5.5-.5-5.5-4 1.5 1.5-4.5-4.5-.5 4-1.5-1-3.5 3.5 1.5z" />
        </svg>
      );
    case "singapore": // Lion
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 6c0-2 2-3 4-3s4 1 4 3c0 .5-.1 1-.3 1.4C19 8 20 10 20 12c0 3-2.5 5-5.5 5.5l.5 3.5H9l.5-3.5C7 17 5 15 5 12c0-2 1-4 2.3-4.6C7.1 7 8 6.5 8 6z M10 10a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z M14 10a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z M12 14c-1 0-1.5.5-1.5 1h3c0-.5-.5-1-1.5-1z" />
        </svg>
      );
    case "vietnam": // Lotus
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c0 0-3 6-3 9s3 7 3 7 3-4 3-7-3-9-3-9zm-1 9c-2-2-5-3-7-1s0 6 3 7c2 1 4-1 4-6zm2 0c2-2 5-3 7-1s0 6-3 7c-2 1-4-1-4-6zm-8 8c4 2 8 2 12 0" />
        </svg>
      );
    case "thailand": // Elephant
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M22 13.5c0-1.5-1.2-2.5-2.5-2.5h-5.2c-1 0-1.8-.8-1.8-1.8V8.5c0-1.5-1.2-2.5-2.5-2.5h-4C4 6 2.5 7.5 2.5 9.5v5c0 1 .8 1.8 1.8 1.8h.7l-.5 4.7h2.5l.5-4.7h2.5l-.5 4.7h2.5l.5-4.7h1.5v-2h2.5v2h2v-4.5c1 0 1.5-.5 1.8-1.5l1.2-3.5v5c0 1.5 1.2 2.5 2.5 2.5z" />
        </svg>
      );
    case "fiji": // Palm tree
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 20c-1-3-1-7 0-11m0 0C9.5 8 7 6.5 5.5 5m6.5 4c1.5-2 3.5-3 5.5-3.5M12 9c-1-2.5-3-4.5-5.5-5.5M12 9c2-2.5 4.5-4 7.5-4.5M6 21h12" />
        </svg>
      );
    case "indonesia": // Volcano
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2 20l6-12 3.5 4 2.5-3 8 11H2zm9-12c0-1.5 1-2.5 2-2.5s2 1 2 2.5" />
        </svg>
      );
    case "south-africa": // Giraffe
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14 21V11.5l2-7.5h1.5v1.5l-1.5 6h1v5H19v4.5 M8.5 21v-7.5c0-1.5 1-2.5 2.5-2.5h2l-2.5-6h-1v-2h-1v2h-1v1.5c0 .5-.5 1-1 1h-1.5v3.5l1.5 4v6.5" />
        </svg>
      );
    case "usa": // Statue of Liberty
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 21h8M12 21V9.5m0 0L9.5 7h5L12 9.5z M12 6.5l.5-2h-1l.5 2z M10 7.5l-1.5-1.5M14 7.5l1.5-1.5M8.5 9.5l-2-1M15.5 9.5l2-1" />
        </svg>
      );
    case "england": // Crown
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2 17l2-9 4 4 4-6 4 6 4-4 2 9H2z M12 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
        </svg>
      );
    case "ireland": // Shamrock
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c-1.5-2.5-4-2.5-4 0 0 2 2 3 4 4.5c2-1.5 4-2.5 4-4.5 0-2.5-2.5-2.5-4 0M12 12c-2.5 1.5-2.5 4 0 4 2 0 3-2 4.5-4c-1.5-2-2.5-3-4.5-4M12 12c2.5-1.5 2.5-4 0-4-2 0-3 2-4.5 4c1.5 2 2.5 3 4.5 4M12 16v5" />
        </svg>
      );
    case "scotland": // Castle
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18v-8l-2-2v-3h-2v3h-2v-3h-2v3h-2v-3H9v3H7v-3H5v3l-2 2v8z M10 21v-4a2 2 0 0 1 4 0v4" />
        </svg>
      );
    case "nz": // Kiwi Bird
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14.5c0 2-1.8 3.5-4 3.5h-4.5c-2.5 0-4.5-2-4.5-4.5v-1c0-2.2 1.8-4 4-4h1.5l1-2.5h1.5v2.5c1.8 0 3.2 1.5 3.2 3.2v.3L22 10.5M7 17.5l-1.5 3.5 M13 18l.5 3" />
        </svg>
      );
    default:
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h2m0 0l-3-3m3 3l3-3M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
  }
}
