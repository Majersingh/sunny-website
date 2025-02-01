"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap, Users, Award } from "lucide-react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false })

  const stats = [
    { icon: GraduationCap, label: "Courses", value: "100+" },
    { icon: Users, label: "Students", value: "50,000+" },
    { icon: Award, label: "Success Rate", value: "95%" },
  ]

  return (
    <section  className="m-2 mt-12 py-4 bg-gray-50" id="about">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2"
        >
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2" ref={ref}>
              <motion.h2
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-3xl font-bold text-center tracking-tighter sm:text-4xl md:text-5xl"
              >
                About Vxios Labs
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="max-w-[600px] text-muted-foreground md:text-xl"
              >
                We are dedicated to providing high-quality professional training that empowers individuals to achieve
                their career goals. Our platform combines cutting-edge technology with expert instruction to deliver an
                unmatched learning experience.
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
                <div className="text-2xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

