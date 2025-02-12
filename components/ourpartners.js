"use client";

import { useState } from "react";
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
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="container px-4 md:px-6 pt-12 pb-12 text-center max-w-[99vw] overflow-x-auto">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Placement Partners</h2>
    <div
      className="relative w-full h-[20vh] pt-12 flex overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Infinite scrolling animation */}
      <motion.div
        className="flex gap-10 min-w-full"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          ease: "linear",
          duration: 10,
          repeat: Infinity,
          pause: isHovered, // Pauses animation on hover
        }}
      >
        {[...partners, ...partners].map((partner, index) => (
          <div key={index} className="flex-shrink-0 w-40 h-full flex items-center">
            <Image
              src={partner.logo}
              alt={partner.name}
              width={120}
              height={60}
              className="object-contain"
            />
          </div>
        ))}
      </motion.div>
    </div>
    </div>
  );
}