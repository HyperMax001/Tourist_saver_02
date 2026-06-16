"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ShineBorder } from "@/registry/magicui/shine-border";
import { useCountry } from "@/context/CountryContext";

interface Deal {
  id: string;
  title: string;
  description: string;
  image: string;
}

const dealsData: Record<string, Deal[]> = {
  "Australia": [
    {
      id: "aus-1",
      title: "Sydney Opera House & Harbour Bridge",
      description: "The definitive Australian landmark with dramatic sail-like shells.",
      image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "aus-2",
      title: "The Great Barrier Reef",
      description: "The world's largest coral reef system, visible from space.",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "aus-3",
      title: "Uluru / Ayers Rock",
      description: "A massive sandstone monolith holding deep spiritual significance.",
      image: "https://images.unsplash.com/photo-1529108190281-9a4f620bc2d8?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "aus-4",
      title: "Twelve Apostles",
      description: "Magnificent limestone stacks rising majestically from the Southern Ocean.",
      image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=600&q=80"
    }
  ],
  "Canada": [
    {
      id: "can-1",
      title: "Banff National Park & Lake Louise",
      description: "Canada's oldest national park, famed for its surreal, turquoise-colored glacial lakes.",
      image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "can-2",
      title: "Niagara Falls",
      description: "One of the world's most powerful and famous waterfalls straddling the border.",
      image: "https://images.unsplash.com/photo-1542456485-67372202ea66?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "can-3",
      title: "CN Tower & Toronto Skyline",
      description: "This 553-meter-high communications and observation tower offers panoramic views.",
      image: "https://images.unsplash.com/photo-1517999824-c13f69ddce29?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "can-4",
      title: "Old Quebec City",
      description: "A UNESCO World Heritage treasure featuring fortified colonial walls.",
      image: "https://images.unsplash.com/photo-1519996503892-db4d348a27d1?auto=format&fit=crop&w=600&q=80"
    }
  ],
  "Singapore": [
    {
      id: "sin-1",
      title: "Gardens by the Bay",
      description: "A futuristic nature park featuring the iconic, plant-covered Supertree Structures.",
      image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "sin-2",
      title: "Marina Bay Sands",
      description: "The defining luxury resort of Singapore's skyline.",
      image: "https://images.unsplash.com/photo-1565967511849-76a60a516170?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "sin-3",
      title: "Sentosa Island",
      description: "A dedicated resort island featuring pristine artificial beaches and theme parks.",
      image: "https://images.unsplash.com/photo-1550503525-d3ec4b38dcd3?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "sin-4",
      title: "Jewel Changi Airport",
      description: "An architectural marvel housing the Rain Vortex, the world’s tallest indoor waterfall.",
      image: "https://images.unsplash.com/photo-1596707328004-940ea501639c?auto=format&fit=crop&w=600&q=80"
    }
  ],
  "Vietnam": [
    {
      id: "vie-1",
      title: "Ha Long Bay",
      description: "A UNESCO World Heritage Site featuring thousands of towering limestone karsts.",
      image: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "vie-2",
      title: "Hoi An Ancient Town",
      description: "A beautifully preserved trading port famous for its colorful paper lanterns.",
      image: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "vie-3",
      title: "Sa Pa Terraces",
      description: "Stunning, cascading green rice terraces carved into the mountainous terrain.",
      image: "https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "vie-4",
      title: "Phong Nha-Ke Bang Caves",
      description: "Home to spectacular karst formations and ancient underground river systems.",
      image: "https://images.unsplash.com/photo-1601716301382-7ea91dd3e6e8?auto=format&fit=crop&w=600&q=80"
    }
  ],
  "Thailand": [
    {
      id: "tha-1",
      title: "The Grand Palace & Wat Phra Kaew",
      description: "A dazzling complex of highly ornate buildings and temples in the heart of Bangkok.",
      image: "https://images.unsplash.com/photo-1582468546235-9bf31e5bc4a1?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "tha-2",
      title: "Phi Phi Islands",
      description: "Stunning tropical islands featuring sheer limestone cliffs and turquoise waters.",
      image: "https://images.unsplash.com/photo-1532185854897-400d754ff1a0?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "tha-3",
      title: "Chiang Mai Old City",
      description: "The cultural heart of Northern Thailand with ancient walls and golden temples.",
      image: "https://images.unsplash.com/photo-1528659101033-b248a318ea1b?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "tha-4",
      title: "Ayutthaya Historical Park",
      description: "The atmospheric ruins of the second capital of the Kingdom of Siam.",
      image: "https://images.unsplash.com/photo-1563606708759-ddbd165c71b6?auto=format&fit=crop&w=600&q=80"
    }
  ],
  "Fiji": [
    {
      id: "fij-1",
      title: "Mamanuca Islands",
      description: "A collection of 20 volcanic islands known for crystal-clear waters.",
      image: "https://images.unsplash.com/photo-1549463519-756d10c1410d?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "fij-2",
      title: "Yasawa Islands",
      description: "A rugged chain of islands ideal for unspoiled nature and manta rays.",
      image: "https://images.unsplash.com/photo-1621533593026-6b216ec7c7d4?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "fij-3",
      title: "Coral Coast",
      description: "An 80-kilometer stretch of brilliant beaches lined with coral reefs.",
      image: "https://images.unsplash.com/photo-1596482181775-47ee205f4229?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "fij-4",
      title: "Taveuni Island",
      description: "A paradise famous for lush tropical rainforests and hidden waterfalls.",
      image: "https://images.unsplash.com/photo-1610499645228-4ce6841e24bc?auto=format&fit=crop&w=600&q=80"
    }
  ],
  "Indonesia": [
    {
      id: "ind-1",
      title: "Uluwatu Temple & Cliffs",
      description: "A spectacular sea temple perched precariously on a steep cliff face edge.",
      image: "https://images.unsplash.com/photo-1558230554-46dae3e8cfcb?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "ind-2",
      title: "Borobudur Temple",
      description: "The world's largest Buddhist temple featuring monumental step-pyramids.",
      image: "https://images.unsplash.com/photo-1559869680-e374d6f83060?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "ind-3",
      title: "Komodo National Park",
      description: "The volcanic islands where legendary Komodo Dragons roam free.",
      image: "https://images.unsplash.com/photo-1622329380963-c36da32f91bc?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "ind-4",
      title: "Mount Bromo",
      description: "An active volcanic peak sitting inside a massive otherworldly caldera.",
      image: "https://images.unsplash.com/photo-1536295243470-16faa734ea07?auto=format&fit=crop&w=600&q=80"
    }
  ],
  "South Africa": [
    {
      id: "zaf-1",
      title: "Table Mountain & Cape Town",
      description: "The flat-topped mountain overlooking the vibrant coastal city.",
      image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "zaf-2",
      title: "Kruger National Park",
      description: "One of Africa's largest game reserves, teeming with incredible wildlife.",
      image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "zaf-3",
      title: "The Garden Route",
      description: "A scenic stretch featuring varied vegetation, lagoons, and dramatic cliffs.",
      image: "https://images.unsplash.com/photo-1579222409748-eb6e55c06950?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "zaf-4",
      title: "Blyde River Canyon",
      description: "One of the largest and greenest canyons on Earth with spectacular viewpoints.",
      image: "https://images.unsplash.com/photo-1589178338959-198305c48834?auto=format&fit=crop&w=600&q=80"
    }
  ],
  "USA": [
    {
      id: "usa-1",
      title: "The Grand Canyon",
      description: "A powerful and inspiring landscape stretching 446 km long.",
      image: "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "usa-2",
      title: "Statue of Liberty & NYC",
      description: "The universal symbol of freedom welcoming millions to New York harbor.",
      image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "usa-3",
      title: "Yellowstone National Park",
      description: "The world's first national park, famous for its geothermal wonders.",
      image: "https://images.unsplash.com/photo-1504280537466-4fba8cdaefcb?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "usa-4",
      title: "Golden Gate Bridge",
      description: "A world-renowned engineering marvel stretching across the San Francisco Bay.",
      image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=600&q=80"
    }
  ],
  "England": [
    {
      id: "eng-1",
      title: "Big Ben & Westminster",
      description: "The iconic clock tower and Gothic palace on the banks of the River Thames.",
      image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "eng-2",
      title: "Stonehenge",
      description: "The best-known prehistoric monument in Europe, erected over 4,500 years ago.",
      image: "https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "eng-3",
      title: "The Roman Baths",
      description: "A beautifully preserved historic site built above natural hot springs.",
      image: "https://images.unsplash.com/photo-1626242699661-8eb76e184131?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "eng-4",
      title: "The Lake District",
      description: "A stunning mountainous region famous for its glacial ribbon lakes.",
      image: "https://images.unsplash.com/photo-1549480112-613d50f83dd7?auto=format&fit=crop&w=600&q=80"
    }
  ],
  "Ireland": [
    {
      id: "irl-1",
      title: "Cliffs of Moher",
      description: "Stunning, sheer sea cliffs plunging over 200 meters into the ocean.",
      image: "https://images.unsplash.com/photo-1564506306161-267590d65ffc?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "irl-2",
      title: "The Ring of Kerry",
      description: "A 179-kilometer-long scenic drive through rolling green hills and jagged coasts.",
      image: "https://images.unsplash.com/photo-1600812108711-d1c951910248?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "irl-3",
      title: "Trinity College Library",
      description: "The 18th-century main chamber housing 200,000 of the library’s oldest books.",
      image: "https://images.unsplash.com/photo-1590487005391-7f94082dc85e?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "irl-4",
      title: "Killarney National Park",
      description: "An extensive ecosystem of native oak woods and the Lakes of Killarney.",
      image: "https://images.unsplash.com/photo-1542171587-c1d5333f2113?auto=format&fit=crop&w=600&q=80"
    }
  ],
  "Scotland": [
    {
      id: "sco-1",
      title: "Edinburgh Castle",
      description: "A historic fortress which dominates the skyline of the city of Edinburgh.",
      image: "https://images.unsplash.com/photo-1506501139174-099022df5260?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "sco-2",
      title: "Isle of Skye",
      description: "Famous for its rugged landscapes, fishing villages, and medieval castles.",
      image: "https://images.unsplash.com/photo-1503884814886-9dcaf60e6e76?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "sco-3",
      title: "Loch Ness & Urquhart Castle",
      description: "A deep freshwater loch famous for the mythical Loch Ness Monster.",
      image: "https://images.unsplash.com/photo-1582299878239-2ce1eb095cf0?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "sco-4",
      title: "Glenfinnan Viaduct",
      description: "A spectacular curved railway viaduct deep in the highlands.",
      image: "https://images.unsplash.com/photo-1601639016149-c1abceb82877?auto=format&fit=crop&w=600&q=80"
    }
  ],
  "New Zealand": [
    {
      id: "nz-1",
      title: "Milford Sound",
      description: "This breathtaking fiord features sheer cliffs and cascading waterfalls.",
      image: "https://images.unsplash.com/photo-1504992523267-33a8b417e3f8?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "nz-2",
      title: "Hobbiton Movie Set",
      description: "The actual rolling green hills and hobbit holes constructed for the films.",
      image: "https://images.unsplash.com/photo-1498307833015-e7b400441eb8?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "nz-3",
      title: "Lake Tekapo & Mount Cook",
      description: "A stunning alpine lake backed by New Zealand's highest peak.",
      image: "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "nz-4",
      title: "Queenstown & Lake Wakatipu",
      description: "The adventure capital framed by the dramatic Remarkables mountain range.",
      image: "https://images.unsplash.com/photo-1524316710600-4b2100cbdb6a?auto=format&fit=crop&w=600&q=80"
    }
  ]
};

const countriesList = [
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

function getCountryIcon(id: string, className: string = "w-7 h-7") {
  switch (id) {
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



export default function CountrySelection() {
  const { selectedCountry, setSelectedCountry } = useCountry();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <section id="deals" className="bg-white pt-8 pb-8 px-4 w-full overflow-hidden">
      <div className="w-full mx-auto flex flex-col gap-10">

        {/* Header Block */}
        <div className="text-center flex flex-col gap-3 max-w-2xl mx-auto relative z-40">
          <h2 className="text-[38px] md:text-[44px] font-semibold text-neutral-900 tracking-tight leading-[1.3] select-none flex flex-wrap items-center justify-center gap-x-3 gap-y-2 mt-5">
            <span>Best deals in</span>
            <span className="relative inline-flex items-center">
              {/* Attached Grey Chip */}
              <span className="absolute bottom-full translate-y-1/2 left-1/2 -translate-x-1/2 text-[8.5px] font-bold tracking-wider text-neutral-500 uppercase bg-white border border-neutral-200/80 px-2.5 py-0.5 rounded-full whitespace-nowrap leading-none shadow-sm pointer-events-none z-10">
                Select country
              </span>
              <span
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="text-[#005840] cursor-pointer border-2 border-[#005840]/15 rounded-full px-5 py-0.5 bg-[#ecf0ef]/20 hover:bg-[#ecf0ef]/40 hover:border-[#005840]/30 inline-flex items-center gap-1.5 relative whitespace-nowrap active:scale-[0.97] transition-all duration-200"
              >
                {selectedCountry}
                <svg
                  width="14"
                  height="9"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`transform transition-transform duration-300 ${dropdownOpen ? "rotate-180" : "rotate-0"} inline-block ml-0.5 text-[#005840]`}
                >
                  <path
                    d="M1 1L5 5L9 1"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </span>
          </h2>
          <p className="text-[14px] text-neutral-500 font-normal leading-relaxed">
            Explore our travel packages for every traveler. Whether a beach getaway, mountain trek, or city exploration, we have something special!
          </p>

          <AnimatePresence>
            {dropdownOpen && (
              <>
                {/* Backdrop overlay to close dropdown */}
                <div
                  className="fixed inset-0 z-40 bg-transparent"
                  onClick={() => setDropdownOpen(false)}
                />

                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-[95vw] max-w-[1280px] z-50">
                  <motion.div
                    initial={{ opacity: 0, y: -12, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -12, scale: 0.95 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="relative bg-white rounded-[32px] shadow-[0_45px_90px_-15px_rgba(0,88,64,0.12),0_25px_60px_-10px_rgba(0,0,0,0.08)] p-8 w-full"
                  >
                    <ShineBorder borderWidth={2} duration={8} borderRadius={32} shineColor={["#005840", "#bfff00", "#a2d2c7"]} />
                    <h4 className="text-[13px] font-semibold text-neutral-400 tracking-[0.18em] uppercase mb-5 text-center relative z-10">
                      Select Destination Country
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4 relative z-10">
                      {countriesList.map((country) => {
                        const isSelected = selectedCountry === country.name;
                        return (
                          <div
                            key={country.id}
                            className={`group relative p-5 rounded-2xl border flex flex-col justify-center items-center gap-1.5 transition-all duration-200 ${
                              isSelected
                                ? "border-[#005840] bg-[#005840]/5 shadow-[0_8px_24px_rgba(0,88,64,0.08)] ring-1 ring-[#005840]/20 cursor-pointer"
                                : "border-neutral-200 bg-white hover:border-[#005840] hover:bg-[#005840]/5 hover:shadow-[0_8px_20px_rgba(0,88,64,0.06)] cursor-pointer active:scale-98"
                            }`}
                            onClick={() => {
                              setSelectedCountry(country.name);
                              setDropdownOpen(false);
                            }}
                          >
                            {country.isAvailable && (
                              <span className={`absolute top-2.5 right-2.5 w-2 h-2 rounded-full bg-[#005840] ${isSelected ? "ring-2 ring-emerald-200" : "animate-pulse opacity-60"}`} />
                            )}
                            
                            {getCountryIcon(
                              country.id,
                              `w-7 h-7 mb-1 transition-transform duration-300 ${
                                isSelected
                                  ? "text-[#005840] scale-110"
                                  : "text-[#005840]/70 group-hover:scale-110"
                              }`
                            )}

                            <span className="text-[15px] font-semibold tracking-wide text-[#005840]">
                              {country.name}
                            </span>
                            {!country.isAvailable && (
                              <span className="text-[9.5px] font-bold tracking-wider uppercase text-neutral-500 bg-neutral-100 py-0.5 px-2.5 rounded-full mt-1">
                                Coming Soon
                              </span>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                </div>
              </>
            )}
          </AnimatePresence>
        </div>

        {/* Content Layout */}
        <div className="flex flex-col lg:flex-row gap-8 w-full mt-4">

          {/* Left Column: Big Feature Card */}
          <div className="w-full lg:w-[40%] min-h-[550px] lg:min-h-auto h-[600px] bg-[#e8f2ee] rounded-[28px] p-4 shadow-[0_8px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_0_20px_rgba(0,88,64,0.18),0_10px_25px_rgba(0,88,64,0.12)] transition-all duration-300 group cursor-pointer">
            <div className="w-full h-full rounded-[20px] overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=800&q=80"
                alt="Tropical nature beach"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />

              {/* Featured Text */}
              <div className="absolute bottom-10 left-8 right-8">
                <h3 className="text-[32px] md:text-[36px] font-semibold text-white leading-[1.2] tracking-tight">
                  Enjoy the Mesmerizing Beauty of Nature
                </h3>
              </div>
            </div>
          </div>

          {/* Right Column: 2x2 Deals Grid */}
          <div className="w-full lg:w-[60%] grid grid-cols-1 md:grid-cols-2 gap-6">
            {(dealsData[selectedCountry] || dealsData["Australia"]).map((deal) => (
              <div
                key={deal.id}
                className="bg-[#e8f2ee] rounded-[28px] p-4 shadow-[0_8px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_0_20px_rgba(0,88,64,0.18),0_10px_25px_rgba(0,88,64,0.12)] transition-all duration-300 flex flex-col gap-4 group cursor-pointer"
              >
                {/* Deal Image Container */}
                <div className="w-full h-[220px] rounded-[20px] overflow-hidden relative">
                  <img
                    src={deal.image}
                    alt={deal.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Deal Info */}
                <div className="flex flex-col gap-1">
                  <h4 className="text-[16.5px] font-semibold text-[#005840] tracking-tight leading-snug group-hover:text-[#004b36] transition-colors duration-200 px-1">
                    {deal.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
