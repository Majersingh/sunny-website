"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Network, Cloud, Shield, Server } from "lucide-react";
import BookCourses from '@/components/demopopup'

const courses = [
  {
    title: "CCNA (200-301)",
    description: "Gain expertise in networking fundamentals, security, routing, and switching.",
    icon: Network,
    category: "Networking",
    duration: "45 days",
    fees: "₹12,000",
  },
  {
    title: "CCNP ENCOR",
    description: "Advance your networking skills with enterprise core technologies.",
    icon: Network,
    category: "Networking",
    duration: "3 months",
    fees: "₹40,000",
  },
  {
    title: "CCNP ENARSI",
    description: "Specialize in advanced routing and services for enterprise networks.",
    icon: Network,
    category: "Networking",
    duration: "3 months",
    fees: "₹40,000",
  },
  {
    title: "AWS",
    description: "Master cloud computing with AWS services and architecture.",
    icon: Cloud,
    category: "Cloud Computing",
    duration: "1.5 months",
    fees: "₹20,000",
  },
  {
    title: "Palo Alto",
    description: "Learn next-gen firewall security and network defense with Palo Alto.",
    icon: Shield,
    category: "Cybersecurity",
    duration: "1.5 months",
    fees: "₹25,000",
  },
  {
    title: "ASA",
    description: "Master firewall security and VPN configuration with Cisco ASA.",
    icon: Shield,
    category: "Cybersecurity",
    duration: "1.5 months",
    fees: "₹25,000",
  },
  {
    title: "(CCNA + CCNP)",
    description: "Comprehensive training covering both CCNA and CCNP courses.",
    icon: Server,
    category: "Networking",
    duration: "4.5 months",
    fees: "₹50,000",
  },
];

export default function Courses() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [bookDemo , setBookDemo]=useState()

  return (
    <> 
      {bookDemo && <BookCourses setShowme={setBookDemo} showMe={bookDemo} skipAutoshow={true} requestedCourse={{type:'certification',name:bookDemo}}/>}
      <div ref={ref} className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Popular Courses</h2>
          <p className="mt-4 text-muted-foreground md:text-xl">Explore our most sought-after courses</p>
        </motion.div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: -20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="cursor-pointer"
            >
              <Card>
                <CardHeader>
                  <course.icon className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>{course.title}</CardTitle>
                  <CardDescription>{course.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-4">
                    <Badge className="p-2" variant="secondary">{course.category}</Badge>
                    <span className="text-sm text-muted-foreground">{course.duration}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-primary">{course.fees}</span>
                    <Button variant="default" onClick={()=>setBookDemo(course.title)}>Enroll Now</Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
      </>
  )
}
