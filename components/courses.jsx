"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Palette, LineChart, Database } from "lucide-react"

const courses = [
  {
    title: "Web Development",
    description: "Master modern web development with JavaScript, React, and Node.js",
    icon: Code,
    category: "Programming",
    duration: "12 weeks",
  },
  {
    title: "UI/UX Design",
    description: "Learn to create beautiful and functional user interfaces",
    icon: Palette,
    category: "Design",
    duration: "8 weeks",
  },
  {
    title: "Data Analytics",
    description: "Analyze and visualize data with Python and modern tools",
    icon: LineChart,
    category: "Data Science",
    duration: "10 weeks",
  },
  {
    title: "Database Management",
    description: "Master industry leading SQL and NoSQL database systems",
    icon: Database,
    category: "IT & Software",
    duration: "6 weeks",
  },
]

export default function Courses() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="py-24" id="courses">
      <div className="container px-4 md:px-6">
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
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
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
                  <div className="flex justify-between items-center">
                    <Badge className="p-2" variant="secondary">{course.category}</Badge>
                    <span className="text-sm text-muted-foreground">{course.duration}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

