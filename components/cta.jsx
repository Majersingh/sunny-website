"use client"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useState } from "react"

import Demo from './demopopup'

export default function Cta() {
  const [bookDemo, setBookdemo]=useState(false)
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0.7, 0.8], [0, 1])
  const y = useTransform(scrollYProgress, [0.7, 0.8], [50, 0])
 
  return (
    <>
      {bookDemo&& <Demo showMe={bookDemo} setShowme={setBookdemo} skipAutoshow={true}/>}
      <section className="py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Start Learning?
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Join thousands of students already learning with SOV Networks. Start your journey today!
                </p>
              </div>
              <Link href='/signup' className="w-fit p-2 bg-primary text-white rounded-lg  transition-all duration-150 hover:scale-105">
                Enroll Now
              </Link>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/redy.jpeg"
                alt="Students collaborating"
                className="rounded-lg object-cover"
                width={400}
                height={300}
              />
            </div>
          </div>
        </div>
      </section>
      <motion.div style={{ opacity, y }} className="fixed bottom-4 right-4 z-50">
        <Button size="lg" className="shadow-lg gap-2 p-4" onClick={()=>setBookdemo(true)}>
         Book Demo <ArrowRight className="h-4 w-4" />
        </Button>
      </motion.div>
    </>
  )
}

