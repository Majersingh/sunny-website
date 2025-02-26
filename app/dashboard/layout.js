"use client";
import { useState ,useEffect } from "react";
import { motion ,AnimatePresence} from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import  {useRouter} from 'next/navigation';

import { auth } from "@/lib/firebase";
import { signOut ,onAuthStateChanged} from "firebase/auth";


const menuItems = [
  { name: "Courses", query: "courses" },
  { name: "Programs", query: "programs" },
  { name: "My Courses", query: "my-courses" },
  { name: "My Programs", query: "my-programs" },
]



export default function DashboardLayout({ children }) {
    const [user, setUser] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [showProfile, setShowProfile] = useState(false);
    const router =useRouter();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("User logged out");
      window.location.href='/'
    } catch (error) {
      console.error("Logout error:", error.message);
    }
  };
 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
        if(user) setUser(user);
        else router.push('/login?redirect=/dashboard')
        });
        return () => unsubscribe();
    }, []);

  if(user)
  return (
    <>
    {/* for Destop nav */}
    <div className="hidden md:block w-screen">
     <header className="flex justify-between px-8 items-center p-1 shadow-md">
        <Link href="/dashboard" className="flex items-center space-x-2">
            <Image src={'/sovlogo.png'} alt="SOV Networks Logo" className="p-1 object-fit" width={160} height={120} />
        </Link>
          <div className="relative z-20">
            <Avatar
              onClick={() => setShowProfile(!showProfile)}
              className="cursor-pointer border-2 border-gray-400"
            >
              <AvatarImage src="/profile.jpg" alt="User" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
            {showProfile && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute right-0 mt-2 w-auto bg-white shadow-lg rounded-lg p-2"
              >
                <p className="text-center text-sm font-semibold text-wrap">{user?.email}</p>
                <Button variant="destructive" className="w-full mt-2 text-red-500 active:text-slate-400" onClick={handleLogout}>Logout</Button>
              </motion.div>
            )}
          </div>
        </header>
    </div>

     {/* for mobile nav */}
    <div className="md:hidden w-screen">
        <div className=" flex justify-between items-center">
            <Button
                    variant="outline"
                    className="m-2 shadow-2xl"
                    onClick={() => setIsOpen(!isOpen)}
                >
                <Menu className="h-4 w-4" />
            </Button>
            <Link href="/dashboard" className="flex items-center space-x-2 text-xl">
              <Image src={'/sovlogo.png'} alt="SOV Networks Logo" className="object-fit p-1" width={160} height={120} />
            </Link>
            <div className="relative z-20">
                <Avatar
                onClick={() => setShowProfile(!showProfile)}
                className="cursor-pointer border-2 border-gray-400 w-8 h-8"
                >
                <AvatarImage src="/profile.jpg" alt="User" />
                <AvatarFallback>U</AvatarFallback>
                </Avatar>
                {showProfile && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg p-2"
                >
                    <p className="text-center text-sm font-semibold overflow-hidden">{user?.email}</p>
                    <Button variant="destructive" className="w-full mt-2 text-red-500  active:text-slate-400" onClick={handleLogout}>Logout</Button>
                </motion.div>
                )}
            </div>
        </div>
    </div>
    
    <div className="flex lg:flex-row flex-col h-screen  overflow-y-auto w-screen">
       {/* Sidebar for Desktop */}
        <motion.aside
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="h-full hidden md:flex flex-col w-64 bg-gray-900 text-white p-5 space-y-4"
        >  
        
            <h2 className="text-lg font-bold">Dashboard</h2>
            <nav className="space-y-2">
            {menuItems.map((item, index) => (
                <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                >
                <Link href={{ pathname: 'dashboard', query: { tab: item.query } }} className="block p-2 rounded hover:bg-gray-700">
                    {item.name}
                </Link>
                </motion.div>
            ))}
            </nav>
        </motion.aside>

        {/* Mobile Sidebar */}
        <div className="relative md:hidden z-50">
            <AnimatePresence>
                {isOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute left-0 top-0 w-[93vw] mx-[3.5vw]  bg-gray-900 text-white shadow-lg rounded-md p-4"
                >
                    <nav className="space-y-2">
                    {menuItems.map((item, index) => (
                        <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ delay: index * 0.1 }}
                        >
                        <Link
                           onClick={()=>setIsOpen(false)}
                            href={{ pathname: 'dashboard', query: { tab: item.query } }}
                            className="block p-2 rounded hover:bg-gray-700 transition-colors"
                        >
                            {item.name}
                        </Link>
                        </motion.div>
                    ))}
                    <Button
                        onClick={() => setIsOpen(false)}
                        className="w-full mt-2 bg-slate-500 hover:bg-slate-300 text-white"
                    >
                        Close Menu
                    </Button>
                    </nav>
                </motion.div>
                )}
            </AnimatePresence>
        </div>

      {/* Main Content Area */}
      <div className="flex-1">
            {/* Page Content */}
            <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex-1"
            >
            {children}
            </motion.main>
      </div>
    </div>
    </>
  );
  else
  return <p className="w-screen text-center">Loading...</p>
}
