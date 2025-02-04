"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import { useInView } from "framer-motion"
import {NetworkIcon} from 'lucide-react'


const programs = [
  {
    title: "Network Expert Program",
    description: "Master CCNA, CCNP, and job-ready skills.",
    topics: "CCNA, CCNP ENCOR, CCNP ENARSI, Spoken English, Resume Prep",
    duration: "4.5 - 6 Months",
    category: "Job Guarantee",
    fees: "₹60,000 (Offer: ₹45,000)",
    package: "Up to 5 LPA for Freshers, 30-50% Hike for Experienced",
    icon: NetworkIcon,
  },
  {
    title: "Network Specialist Program",
    description: "Advanced networking with AWS & Palo Alto.",
    topics: "CCNA, CCNP ENCOR & ENARSI, Palo Alto, AWS, Resume Prep",
    duration: "6 - 8 Months",
    category: "Job Guarantee",
    fees: "₹1,85,000 (Offer: ₹1,20,000, EMI Available)",
    package: "From 5 LPA up to 10 LPA",
    icon: NetworkIcon,
  },
];

export default function JobGuaranteePrograms() {
  const inViewRef = useRef(null);
  const isInView = useInView(inViewRef, { once: true })

  return (
    <section ref={inViewRef} className="py-12" id="programs">
      <div className="container px-4 md:px-6">
        <motion.div
          ref={inViewRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Job Guarantee Programs</h2>
          <p className="mt-4 text-muted-foreground md:text-xl">Secure your career with 100% placement guarantee</p>
        </motion.div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="cursor-pointer"
            >
              <Card className="p-4 shadow-lg rounded-2xl">
                <CardHeader>
                  <program.icon className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>{program.title}</CardTitle>
                  <CardDescription>{program.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700">
                    <strong>Topics:</strong> {program.topics}
                  </p>
                  <div className="flex justify-between items-center mt-2">
                    <Badge className="p-2" variant="secondary">{program.category}</Badge>
                    <span className="text-sm text-muted-foreground">{program.duration}</span>
                  </div>
                  <p className="mt-2 text-gray-700">
                    <strong>Fees:</strong> {program.fees}
                  </p>
                  <p className="mt-2 text-gray-700">
                    <strong>Package:</strong> {program.package}
                  </p>
                  <Button className="mt-4 w-full">Enroll Now</Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
