"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function Snackbar() {
  const [show, setShow] = useState(true);
  const [user, setUser] = useState(' ');

  useEffect(() => {
    if (typeof window === "undefined") return;
    setUser(bots_Name[Math.floor(bots_Name.length* Math.random())])

    const timer = setInterval(() => setShow((prev) => !prev), 20000 * Math.random());
    return () => clearInterval(timer);
  }, []);

  if(show)
  return (
    <AnimatePresence>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 lg:left-16 left-2 z-30 -translate-x-1/2 flex items-center gap-4 bg-gray-900 text-white px-6 py-2 rounded-lg shadow-lg"
        >
          <span className="text-sm">
            🚀 {user} just joined
          </span>
          <button onClick={() => setShow(false)}>
            <X className="w-5 h-5 text-white hover:text-gray-300" />
          </button>
        </motion.div>
    </AnimatePresence>
  );
  else <></>
}



var bots_Name = [
    "Aarav", "Vihaan", "Aditya", "Arjun", "Sai", "Ayaan", "Ishaan", "Karan", "Rohan", "Amit",
    "Ananya", "Priya", "Sanya", "Siddhi", "Neha", "Maya", "Anjali", "Pooja", "Tanya", "Sneha",
    "Manish", "Viper-Aakash", "Ravi Sharma", "Nikhil Kumar", "Vikas Rathi", "Shubham Patel", "Kunal Singh", "Sandeep Yadav", "Anil Gupta", "Saurabh Verma",
    "Simran", "Kritika Joshi", "Nisha Sharma", "Shweta Mehta", "Shruti Reddy", "Ritika Gupta", "Neelam Desai", "Nikita Kapoor", "Divya Shah", "Kanika Rani",
    "Rahul Verma", "Yash Chauhan", "Aditi", "Meera", "Vidya", "Sakshi", "Namrata", "Shivani", "Ridhima", "Aishwarya Patel",
    "Vansh Singh", "Siddharth", "Karthik Rao", "Shivendra", "Manav", "Harsh Patel", "Naveen Sharma", "Pranav Agarwal", "Yogesh", "Pankaj Desai",
    "Saurav", "Tushar", "Kavya", "Madhavi", "Ravindra", "Chirag", "Sushant", "Rajesh Kumar", "Vishal Reddy", "Lalit Prasad",
    "Puneet", "Vikrant Sharma", "Tanvi", "Tanisha", "Neel", "Madhur", "Jatin", "Rajendra", "Manoj", "Kishore",
    "Rekha", "Shalini", "Bhavana", "Leela", "Rama", "Suman", "Priyanka", "Ravina", "Kiran", "Indira",
    "Suresh", "Rakesh", "Anand", "Harish", "Dinesh", "Gaurav", "Sahil", "Amitabh Singh", "Rajiv Sharma", "Akhil",
    "Siddharth", "Naveena", "Bhavya", "Aman", "Mohan", "Geeta", "Suman", "Rupal", "Sweta", "Ravi-Kumar",
    "Kiran", "Charul", "Vineet Kumar", "Chandana", "Manjula", "Poojan", "Arpita", "Madhuri", "Rajwinder", "Pallavi",
    "Venom-Amit", "Toxic-Venom", "Storm-Siddharth", "Rage-Saurabh", "Xtreme-Varun", "Shadow-Vineet", "Phantom-Ravi", "Inferno-Gaurav",
    "Thunder-Shekhar", "Ghost-Manish", "Blaze-Vikrant", "Dark-Karan", "King-Vineet", "Viper-Rajesh", "Maverick-Rahul", "Knight-Avinash",
    "Ruthless-Raj", "Chaos-Kunal", "Reaper-Vikram", "Eagle-Sandeep", "Scorpion-Anil", "Omega-Karan", "Vortex-Siddhi", "Predator-Jatin",
    "Beast-Madhur", "Rogue-Pranav", "Inferno-Vikrant", "Ace-Mohan", "Phantom-Raj", "Tornado-Ravi", "Blizzard-Kunal", "Slayer-Akash"
  ];