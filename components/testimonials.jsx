"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Software Developer",
    content:
      "The training at Vxios Labs completely transformed my career. The instructors were excellent and the content was up-to-date with industry standards.",
    image: "/placeholder.svg",
  },
  {
    name: "Michael Chen",
    role: "UX Designer",
    content:
      "I learned more in 8 weeks than I did in a year of self-study. The practical projects and feedback were invaluable to my growth as a designer.",
    image: "/placeholder.svg",
  },
  {
    name: "Emily Brown",
    role: "Data Analyst",
    content:
      "The data analytics course provided me with the skills I needed to land my dream job. The hands-on approach to learning made complex concepts easy to understand.",
    image: "/placeholder.svg",
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: !true })
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((current) => (current + 1) % testimonials.length)
  }

  const previous = () => {
    setCurrentIndex((current) => (current - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section  className="mt-12 m-2 bg-white" id="testimonials">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Student Success Stories</h2>
          <p ref={ref} className="mt-4 text-muted-foreground md:text-xl">Hear what our students have to say</p>
        </motion.div>
        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center"
            >
              <Card className="max-w-2xl mx-auto border-primary/10 hover:border-primary/20 transition-colors">
                <CardContent className="p-6">
                  <Quote className="h-8 w-8 text-primary mb-4" />
                  <motion.p
                    key={currentIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="text-lg mb-4"
                  >
                    {testimonials[currentIndex].content}
                  </motion.p>
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonials[currentIndex].image || "/placeholder.svg"}
                      alt={testimonials[currentIndex].name}
                      className="rounded-full w-12 h-12 object-cover border-2 border-primary"
                      width={48}
                      height={48}
                    />
                    <div>
                      <h4 className="font-semibold">{testimonials[currentIndex].name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonials[currentIndex].role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
          <div className="flex justify-center gap-2 mt-6">
            <Button
              variant="outline"
              size="icon"
              onClick={previous}
              className="border-primary/20 hover:border-primary hover:bg-primary/5"
            >
              <ChevronLeft className=" h-8 w-8" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="border-primary/20 hover:border-primary hover:bg-primary/5"
            >
              <ChevronRight className="h-8 w-8" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

