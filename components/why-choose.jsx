"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Users, Laptop, Video, GraduationCap, PlayCircle, Calendar, HeadphonesIcon, Clock } from "lucide-react"

const features = [
  {
    icon: Users,
    title: "Career Counselling by Experts",
    description: "Get personalized guidance from industry professionals to shape your career path",
  },
  {
    icon: Laptop,
    title: "Unlimited Lab Access",
    description: "Practice your skills with 24/7 access to our state-of-the-art virtual labs",
  },
  {
    icon: Video,
    title: "Instructor-Led Live Training",
    description: "Learn directly from experienced instructors in real-time interactive sessions",
  },
  {
    icon: GraduationCap,
    title: "100% Placement Guarantee",
    description: "We ensure your career success with our placement assistance program",
  },
  {
    icon: PlayCircle,
    title: "Lifetime Access to Class Recordings",
    description: "Revisit your learning materials anytime with unlimited access to recorded sessions",
  },
  {
    icon: Calendar,
    title: "Guaranteed to Run Batches",
    description: "No cancellations - we guarantee all scheduled batches will run",
  },
  {
    icon: HeadphonesIcon,
    title: "Post-training Support",
    description: "Get continued support even after course completion",
  },
  {
    icon: Clock,
    title: "Flexible Batch-Timings",
    description: "Choose from 4/6/8 hours slots to fit your schedule",
  },
]

export default function WhyChoose() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
 
  return (
    <section ref={ref} className="m-2 mt-12 py-4 bg-gray-50">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Choose SOV Networks?</h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            Discover what makes us the preferred choice for IT training
          </p>
        </motion.div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) =>  <Card  key={'dwf+'+index}feature={feature} index={index}/>)}
        </div>
      </div>
    </section>
  )
}

function Card({feature ,index}){
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false })
  return(
      <motion.div
        ref={ref}
        key={index}
        initial={{ opacity: 0, x: index%2===0 ?-50*(index+1):50*(index+1)}}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index%2===0 ?-50*(index+1):50*(index+1) }}
        transition={{ duration: 0.3, delay: index * 0.1 }}
        className="relative group"
      >
        <div className="absolute inset-0 bg-primary/5 rounded-lg transform transition-transform group-hover:scale-105" />
        <div className="relative p-6 space-y-4">
          <div className="inline-block p-3 rounded-lg bg-primary/10">
            <feature.icon className="text-primary" />
          </div>
          <h3 className="text-lg font-semibold">{feature.title}</h3>
          <p className="text-sm text-muted-foreground">{feature.description}</p>
        </div>
      </motion.div>
  )
}