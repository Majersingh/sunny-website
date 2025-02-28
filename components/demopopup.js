"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import Spinner from'@/components/spinner'

import { database } from "@/lib/firebase"; // Import Firestore from your Firebase setup
import { collection, addDoc, serverTimestamp } from "firebase/firestore"; // Firestore functions


// Form validation schema
const formSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  mobile: z.string().regex(/^\d{10}$/, "Mobile must be 10 digits"),
  email: z.string().email("Invalid email address"),
  courseType: z.string().nonempty("Please select a program"),
  courseName: z.string().nonempty("Please select a course"),
})

// Sample allCourses and courses
const allCourses = {
    certification: [
      {
        title: "CCNA (200-301)",
        description: "Gain expertise in networking fundamentals, security, routing, and switching.",
        category: "Networking",
        duration: "45 days",
        fees: "₹12,000",
      },
      {
        title: "CCNP ENCOR",
        description: "Advance your networking skills with enterprise core technologies.",
        category: "Networking",
        duration: "3 months",
        fees: "₹40,000",
      },
      {
        title: "CCNP ENARSI",
        description: "Specialize in advanced routing and services for enterprise networks.",
        category: "Networking",
        duration: "3 months",
        fees: "₹40,000",
      },
      {
        title: "AWS",
        description: "Master cloud computing with AWS services and architecture.",
        category: "Cloud Computing",
        duration: "1.5 months",
        fees: "₹20,000",
      },
      {
        title: "Palo Alto",
        description: "Learn next-gen firewall security and network defense with Palo Alto.",
        category: "Cybersecurity",
        duration: "1.5 months",
        fees: "₹25,000",
      },
      {
        title: "ASA",
        description: "Master firewall security and VPN configuration with Cisco ASA.",
        category: "Cybersecurity",
        duration: "1.5 months",
        fees: "₹25,000",
      },
      {
        title: "CCNA + CCNP Combo",
        description: "Comprehensive training covering both CCNA and CCNP courses.",
        category: "Networking",
        duration: "1.5 months",
        fees: "₹50,000",
      },
    ],
    'job guarantee program': [
      {
        title: "Network Expert Program",
        description: "Master CCNA, CCNP, and job-ready skills.",
        topics: "CCNA, CCNP ENCOR, CCNP ENARSI, Spoken English, Resume Prep",
        duration: "4.5 - 6 Months",
        category: "Job Guarantee",
        fees: "₹60,000 (Offer: ₹45,000)",
        package: "Up to 5 LPA for Freshers, 30-50% Hike for Experienced",
        // icon: NetworkIcon,
      },
      {
        title: "Network Specialist Program",
        description: "Advanced networking with AWS & Palo Alto.",
        topics: "CCNA, CCNP ENCOR & ENARSI, Palo Alto, AWS, Resume Prep",
        duration: "6 - 8 Months",
        category: "Job Guarantee",
        fees: "₹1,85,000 (Offer: ₹1,20,000, EMI Available)",
        package: "From 5 LPA up to 10 LPA",
        // icon: NetworkIcon,
      },
    ],
  };

export default function BookDemo({showMe ,setShowme ,skipAutoshow , requestedCourse}) {// skip autoshow mean it opening by clicking btn
  const [isOpen, setIsOpen] = useState(false||showMe)
  const [selectedMode, setSelectedMode] = useState("");
  const [selectedProgram, setSelectedProgram] = useState("")
  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm({
    resolver: zodResolver(formSchema),
  })
  const [isLoading , setLoading]=useState(null)

    const onSubmit = async (data) => {
        try {
         setLoading(true)
          await addDoc(collection(database, "demo-booking"), {
            ...data,
            bookingTime: serverTimestamp(), // Add a timestamp,
            learningMode:selectedMode
          });
          setLoading(false)
          alert('Submitted Successfully, We will contact you ASAP!')
          console.log("Demo Booking Added:", data);
          setIsOpen(false);
        } catch (error) {
            setLoading(false);
            alert('Failed To Book')
          console.error("Error adding demo booking:", error);
        }
        setIsOpen(false)
      };
  

  useEffect(()=>{
    if(requestedCourse)
    {
        setValue('courseType',requestedCourse.type)
        setValue('courseName',requestedCourse.name)
    }
    if(skipAutoshow)
        return;
    const int=setTimeout(()=>{
        setIsOpen(true)
    },2000)
    return () => {
        clearTimeout(int);
        setIsOpen(false)
    }
  },[])
  if(isOpen)
  return (
        <div className="fixed z-50 inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-6 rounded-xl shadow-lg lg:w-96 w-80"
          >
            <h2 className="text-xl font-bold mb-4 text-center">Book Free Demo</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <Input placeholder="Name" {...register("name")} />
              {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

              <Input placeholder="Mobile" {...register("mobile")} />
              {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile.message}</p>}

              <Input placeholder="Email" {...register("email")} />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
              <p className="text-sm text-gray-500">Training Type :</p>
              <div className=" flex justify-evenly flex-wrap text-gray-500">
              {["Online", "Classroom", "Recorded", "Other"].map((mode) => (
                    <div key={mode} className="flex items-center gap-2">
                    <input
                        type="radio"
                        id={mode}
                        name="courseMode"
                        value={mode}
                        checked={selectedMode === mode}
                        onChange={(e) => setSelectedMode(e.target.value)}
                        className="w-4 h-4"
                    />
                    <label htmlFor={mode} className="text-sm font-medium">{mode}</label>
                    </div>
                ))}
              </div>

              {/* Program Dropdown */}
              <Select onValueChange={(value) => { setSelectedProgram(value); setValue("courseType", value) }}>
                <SelectTrigger>
                  <SelectValue placeholder={requestedCourse?requestedCourse.type.toUpperCase():'Select Program'} />
                </SelectTrigger>
                <SelectContent className="w-80 bg-white">
                  {Object.keys(allCourses).map((program) => (
                    <SelectItem  className='p-1' key={program} value={program}>{program.toUpperCase()}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.program && <p className="text-red-500 text-sm">{errors.program.message}</p>}

              {/* Course Dropdown (Dependent on Program) */}
              <Select disabled={!selectedProgram} onValueChange={(value) => setValue("courseName", value)}>
                <SelectTrigger>
                  <SelectValue placeholder={requestedCourse? requestedCourse.name.toUpperCase():(selectedProgram ? "Select Course" : "Select Program First")} />
                </SelectTrigger>
                <SelectContent className="w-72 bg-white">
                  {selectedProgram && allCourses[selectedProgram].map((course) => (
                    <SelectItem className='p-1' key={course.title} value={course.title}>{course.title.toUpperCase()}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.course && <p className="text-red-500 text-sm">{errors.course.message}</p>}

              <div className="flex justify-between">
                 <Button type="button" onClick={() => {setIsOpen(false); setShowme&&setShowme(false)}} className="bg-gray-400 hover:bg-gray-500">Cancel</Button>
                <Button type="submit" className="bg-green-500 hover:bg-green-600">{isLoading?<Spinner/>:'Book Now'}</Button>
              </div>
            </form>
          </motion.div>
        </div>
   )
   else <></>
}
