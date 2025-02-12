"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"


import { auth } from "@/lib/firebase";
import { onAuthStateChanged} from "firebase/auth";


const navItems = [
  { title: "Certification Courses", href: "#courses", dropdown: [{ title: "CCNA ( 200-301 )", href: "#courses" },{ title: "CCNP ENCOR", href: "#courses" },
    { title: "CCNP ENARSI", href: "#courses" },{ title: "AWS", href: "#courses" } ,{ title: "PALO ALTO", href: "#courses" },
    { title: "ASA", href: "#courses" },{ title: "CCNA + CCNP COMBO", href: "#courses" }] },
  { title: "Job Guarantee Program", href: "#programs", dropdown: [{ title: "NETWORK EXPERT PROGRAM", href: "#programs" }, { title: "NETWORK SPECIALIST PROGRAM", href: "#programs" }] },
  { title: "About", href: "#about" },
  { title: "Blogs", href: "/blogs" },
  { title: "Contact", href: "/#footer" },
]

export default function Nav() {
  const [hoveredItem, setHoveredItem] = useState(null)
  const [isOpen, setIsOpen] = useState(false)
  const [isAuthenticated, setAuthentication]=useState(false);


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
    if(user) setAuthentication(true)
    else console.log("user Not Loggged In")
    });
    return () => unsubscribe();
  }, []);
  if(!isAuthenticated)
  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 bg-white`}
      >
        <div className="container px-4 md:px-6 pt-2 pb-1">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              {/* <span className="text-2xl font-bold text-primary">SOV</span> */}
              {/* <span className="text-2xl font-bold">Networks</span> */}
              <Image src={'/sovlogo.png'} alt="SOV Networks Logo" className="object-fit" width={160} height={120} />
            </Link>

            {/* Desktop */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <div key={index} className="relative group" onMouseEnter={() => setHoveredItem(item.title)} onMouseLeave={() => setHoveredItem(null)}>
                  <Link href={item.href} className="text-secondary hover:text-primary transition-colors">
                    {item.title}
                  </Link>

                  {/* Animated Dropdown */}
                  {item.dropdown && hoveredItem === item.title && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="absolute left-0 w-48 bg-white shadow-lg rounded-md p-2 border border-gray-200"
                    >  
                    
                      {item.dropdown.map((subItem, subIndex) => (
                        <Link key={subIndex} href={subItem.href} className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
                          {subItem.title}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
               <Link  href='/signup' className="bg-primary rounded-lg text-center p-1 text-white hover:bg-primary/90 px-2 ">Join Now</Link>
               <Link  href='/login' className="border border-primary rounded-lg text-center p-1 text-green-600 hover:text-green-900">LogIn</Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-secondary"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence className='shadow-inner'>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t "
            >
              <div className="container p-4">
                <div className="flex flex-col space-y-4 ">
                  {navItems.map((item, index) => (
                    <div key={index} className="relative group" onMouseEnter={() => setHoveredItem(item.title)} onMouseLeave={() => setHoveredItem(null)}>
                      <Link href={item.href} className="text-secondary hover:text-primary transition-colors">
                        {item.title}
                      </Link>

                      {/* Animated Dropdown */}
                      {item.dropdown && hoveredItem === item.title && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3 }}
                          className="absolute left-0 w-48 z-10 bg-white shadow-lg rounded-md p-2 border border-gray-200"
                        >  
                        
                          {item.dropdown.map((subItem, subIndex) => (
                            <Link onClick={()=>setIsOpen(false)} key={subIndex} href={subItem.href} className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
                              {subItem.title}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </div>
                  ))}
                  <Link onClick={() => setIsOpen(!isOpen)} href='/signup' className="bg-primary rounded-lg text-center p-1 text-white hover:bg-primary/90 w-full">Join Now</Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      {/* Spacer for fixed navbar */}
      <div className="h-[72px]" />
    </>
  )
}

