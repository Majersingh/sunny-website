"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const partners = [
  "Infosys",
  "Capgemini",
  "Wipro",
  "NextLoopTech"
];

export default function PlacementPartners() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="container px-4 md:px-6 py-12 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Placement Partners</h2>
      </motion.div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {partners.map((partner, index) => (
          <motion.div
            key={partner}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer"
          >
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-primary">{partner}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Trusted hiring partner for our graduates.</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
