"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function Snackbar() {
  const [show, setShow] = useState(true);

  // Auto-hide after 4 seconds
  useEffect(() => {
    const timer = setInterval(() => setShow((prev)=>!prev), 10000* Math.random());
    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 lg:left-16 left-2 z-30  -translate-x-1/2 flex items-center gap-4 bg-gray-900 text-white px-6 py-2 rounded-lg shadow-lg"
        >
          <span>🚀 A user just joined</span>
          <button onClick={() => setShow(false)}>
            <X className="w-5 h-5 text-white hover:text-gray-300" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
