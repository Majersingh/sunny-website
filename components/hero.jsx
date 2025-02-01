"use client"
import { useRef } from "react"
import { motion , useInView} from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  return (
    <section
      className="m-2 py-4 relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-primary/5 to-background"
      id="hero"
    >
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"
        />
      </div>
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center space-y-4"
          >
            <div className="space-y-2" ref={ref}>
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={isInView&&{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1}}
                className="text-3xl text-center font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
              >
                Transform Your Future with Professional Training
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={isInView&&{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="max-w-[600px] text-muted-foreground md:text-xl"
              >
                Master in-demand skills with our expert-led courses. Join thousands of successful professionals today.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView&&{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col gap-2 min-[400px]:flex-row"
            >
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white gap-2 p-1.5">
                Get Started <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="p-1.5 border-primary text-primary hover:bg-primary/10">
                Browse Courses
              </Button>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center"
          >
            <div className="relative aspect-square w-full max-w-[400px] overflow-hidden rounded-full bg-gradient-to-b from-primary/25 to-primary/5">
              <motion.img
                initial={{ scale: 1.2 }}
                animate={isInView&&{ scale: 1 }}
                transition={{ duration: 0.5 }}
                src="/skill.webp"
                alt="Students learning online"
                className="object-cover w-full h-full"
                width={400}
                height={400}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

