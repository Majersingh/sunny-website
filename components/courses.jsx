"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import BookCourses from '@/components/demopopup'

const courses = [
  {
    title: "CCNA (200-301)",
    description: "Gain expertise in networking fundamentals, security, routing, and switching.",
    image: "/ccna.jpg",
    category: "Networking",
    duration: "45 days",
    fees: "₹12,000",
  },
  {
    title: "CCNP ENCOR",
    description: "Advance your networking skills with enterprise core technologies.",
    image: "/ccnp.jpg",
    category: "Networking",
    duration: "3 months",
    fees: "₹40,000",
  },
  {
    title: "AWS",
    description: "Master cloud computing with AWS services and architecture.",
    image: "/aws.png",
    category: "Cloud Computing",
    duration: "1.5 months",
    fees: "₹20,000",
  },
  {
    title: "Palo Alto",
    description: "Learn next-gen firewall security and network defense with Palo Alto.",
    image: "/paloalto.png",
    category: "Cybersecurity",
    duration: "1.5 months",
    fees: "₹25,000",
  }
];

export default function Courses() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [bookDemo , setBookDemo]=useState()

  return (
    <> 
      {bookDemo && <BookCourses setShowme={setBookDemo} showMe={bookDemo} skipAutoshow={true} requestedCourse={{type:'certification',name:bookDemo}} />}
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
              <Card className="relative overflow-hidden h-64 rounded-lg shadow-lg">
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center" 
                  style={{ backgroundImage: `url(${course.image})` , backgroundSize:'cover' }}
                >
                  <div className="absolute inset-0 bg-black/50" /> {/* Dark Overlay */}
                </div>

                {/* Content Overlay */}
                <CardHeader className="relative z-10 text-white">
                  <CardTitle className="text-lg">{course.title}</CardTitle>
                  <p className="text-sm">{course.description}</p>
                </CardHeader>
                <CardContent className="relative z-10 text-white">
                  <div className="flex justify-between items-center mb-2">
                    <Badge className="p-2 bg-white/30 text-white">{course.category}</Badge>
                    <span className="text-sm">{course.duration}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold">{course.fees}</span>
                    <Button variant="default" onClick={() => setBookDemo(course.title)}>Enroll Now</Button>
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
