"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const partners = [
  { name: "Airtel", logo: "/airtel.png" },
  { name: "Alstom", logo: "/alstom.png" },
  { name: "Arista", logo: "/arista.png" },
  { name: "BT", logo: "/bt.png" },
  { name: "Capgemini", logo: "/capgemni.png" },
  { name: "Cisco", logo: "/cisco.png" },
  { name: "Dell", logo: "/dell.png" },
  { name: "HCL", logo: "/hcl.png" },
  { name: "IBM", logo: "/ibm.png" },
  { name: "Infosys", logo: "/infosys.png" },
  { name: "Jio", logo: "/jio.png" },
  { name: "Movate", logo: "/movate.png" },
  { name: "Netcon", logo: "/netcon.png" },
  { name: "TCS", logo: "/tcs.png" },
  { name: "Tech Mahindra", logo: "/techmahindra.png" },
  { name: "Wipro", logo: "/wipro.png" },
  { name: "Yamaha", logo: "/yamaha.png" },
];

export default function ScrollingLogos() {
  const [scrollSpeed, setScrollSpeed] = useState(15); // Default speed

  return (
    <div className="w-screen overflow-hidden py-12 ">
      <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
        Our Placement Partners
      </h2>

      <div className="relative mt-6 w-full overflow-hidden">
        <motion.div
          className="flex w-[600%] md:w-[150%] lg:w-[120%] gap-8"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            ease: "linear",
            duration: scrollSpeed,
            repeat: Infinity,
          }}
        >
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-32 h-16 flex items-center justify-center"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={100}
                height={50}
                className="object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
