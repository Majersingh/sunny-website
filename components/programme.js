"use client";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { NetworkIcon } from 'lucide-react';
import BookCourses from '@/components/demopopup';

const programs = [
  {
    title: "Network Expert Program",
    description: "Master CCNA, CCNP, and job-ready skills.",
    topics: "CCNA, CCNP ENCOR, CCNP ENARSI, Spoken English, Resume Prep",
    duration: "4.5 - 6 Months",
    category: "Job Guarantee",
    originalFees: "₹60,000",
    discountedFees: "₹45,000",
    package: "Up to 5 LPA for Freshers, 30-50% Hike for Experienced",
    image: "/networlspeprog.webp",
  },
  {
    title: "Network Specialist Program",
    description: "Advanced networking with AWS & Palo Alto.",
    topics: "CCNA, CCNP ENCOR & ENARSI, Palo Alto, AWS, Resume Prep",
    duration: "6 - 8 Months",
    category: "Job Guarantee",
    originalFees: "₹1,85,000",
    discountedFees: "₹1,20,000",
    package: "From 5 LPA up to 10 LPA",
    image: "/networkexpprog.webp",
  },
];

export default function JobGuaranteePrograms() {
  const inViewRef = useRef(null);
  const isInView = useInView(inViewRef, { once: true });
  const [bookDemo, setBookDemo] = useState();

  return (
    <>
      {bookDemo && (
        <BookCourses
          setShowme={setBookDemo}
          showMe={bookDemo}
          skipAutoshow={true}
          requestedCourse={{ type: 'program', name: bookDemo }}
        />
      )}
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
              <Card className="relative overflow-hidden h-100 rounded-xl shadow-xl">
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${program.image})` }}
                >
                  <div className="absolute inset-0 bg-black/20 rounded-xl" /> {/* Dark Overlay */}
                </div>

                {/* Content Overlay */}
                <CardHeader className="relative z-10 text-white">
                  <CardTitle className="text-lg">{program.title}</CardTitle>
                  <CardDescription className="text-slate-100">{program.description}</CardDescription>
                </CardHeader>
                <CardContent className="relative z-10 text-white">
                  <p className="text-sm"><strong>Topics:</strong> {program.topics}</p>
                  <div className="flex justify-between items-center mt-2">
                    <Badge className="p-2 bg-green-600 text-slate-100">{program.category}</Badge>
                    <span className="text-sm">{program.duration}</span>
                  </div>
                  <div className="mt-2">
                    <p className="text-white bg-slate-500 rounded-lg float-left px-2">
                      <strong > Package:</strong> {program.package}
                    </p>
                  </div>
                  <br/>

                  {/* Pricing Section */}
                  <div className="mt-2 flex items-center space-x-2">
                    <span className="text-lg font-semibold text-red-400 line-through">{program.originalFees}</span>
                    <span className="text-lg font-bold text-green-400">{program.discountedFees}</span>
                  </div>

                  <Button className="mt-4 w-full" onClick={() => setBookDemo(program.title)}>
                    Enroll Now
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
