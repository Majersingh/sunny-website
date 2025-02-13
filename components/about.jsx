"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { GraduationCap, Users, Award } from "lucide-react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Counter values
  const [gradCount, setGradCount] = useState(0);
  const [userCount, setUserCount] = useState(0);
  const [awardCount, setAwardCount] = useState(0);

  // Final values
  const finalValues = {
    grad: 100,
    users: 50000,
    award: 95,
  };

  useEffect(() => {
    if (isInView) {
      const duration = 3000; // 3 seconds
      const intervalTime = 30; // Update every 30ms
      const steps = duration / intervalTime;

      let gradStep = finalValues.grad / steps;
      let userStep = finalValues.users / steps;
      let awardStep = finalValues.award / steps;

      let counter = 0;
      const interval = setInterval(() => {
        counter++;
        setGradCount((prev) => (counter < steps ? prev + gradStep : finalValues.grad));
        setUserCount((prev) => (counter < steps ? prev + userStep : finalValues.users));
        setAwardCount((prev) => (counter < steps ? prev + awardStep : finalValues.award));

        if (counter >= steps) clearInterval(interval);
      }, intervalTime);
    }
  }, [isInView]);

  const stats = [
    { icon: GraduationCap, label: "Courses", value: Math.floor(gradCount) },
    { icon: Users, label: "Students", value: Math.floor(userCount) },
    { icon: Award, label: "Success Rate", value: Math.floor(awardCount) + "%" },
  ];

  return (
    <section className="m-2 mt-12 py-4 bg-gray-50" id="about">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2"
        >
          <div className="flex  justify-center space-y-4">
            <div className="space-y-2" ref={ref}>
              <motion.h2
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-3xl font-bold text-center tracking-tighter sm:text-4xl md:text-5xl"
              >
                About SOV Networks
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="max-w-[600px] text-muted-foreground md:text-xl"
              >
                SOV Networks offers top-tier networking courses designed to equip you with real-world skills in cybersecurity, routing, switching, and troubleshooting. Our <strong>job guarantee program</strong> ensures you land a high-paying role upon successful completion. With expert instructors, hands-on training, and strong industry ties, <bold><span className="text-green-500">SOV Networks</span> is your launchpad to a thriving IT career</bold>.
              </motion.p>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="flex flex-col items-center justify-center space-y-2 border rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <stat.icon className="h-6 w-6 text-primary" />
                <div className="text-2xl font-bold text-primary">{stat.value}+</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
