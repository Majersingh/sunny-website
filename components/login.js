"use client";

import { useState ,useEffect} from "react";
import { auth } from "../lib/firebase";
import { signInWithEmailAndPassword, sendPasswordResetEmail  ,onAuthStateChanged} from "firebase/auth";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Spinner from'@/components/spinner'

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const router =useRouter()
  const [isLoading , setLoading]=useState(null)

  // Handle Login
  const handleLogin = async () => {
    try {
      setLoading(true);
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in:", userCredential.user);
      router.push('/dashboard')
      setError(""); // Clear errors on successful login
    } catch (error) {
      setError("Invalid email or password");
      setLoading(false);
      console.error("Login error:", error.message);
    }
  };

  // Handle Password Reset
  const handleResetPassword = async () => {
    if (!email) {
      setError("Enter your email to reset password");
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("Password reset email sent! Check your inbox.");
      setError("");
    } catch (error) {
      setError("Failed to send reset email");
      console.error("Reset error:", error.message);
    }
  };

  useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
      if(user) router.push('/dashboard')
      else console.log("user Not Loggged In in signup")
      });
      return () => unsubscribe();
    }, []);

  return (
    <div className="flex w-screen  mt-4 justify-center p-2">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Card className="lg:w-[25vw] w-[90vw] shadow-lg">
          <CardHeader>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <CardTitle className="text-center text-2xl font-bold">Welcome Back</CardTitle>
            </motion.div>
          </CardHeader>
          <CardContent>
            {error && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="text-red-500 text-sm text-center"
              >
                {error}
              </motion.p>
            )}
            {message && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="text-green-500 text-sm text-center"
              >
                {message}
              </motion.p>
            )}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="space-y-4"
            >
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-3 flex items-center"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="w-full" onClick={handleLogin}>
                  {isLoading? <Spinner/>:'Login'}
                </Button>
              </motion.div>

              <div className="text-center text-sm text-muted-foreground mt-2">
                <motion.p whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <button onClick={handleResetPassword} className="text-primary underline">
                    Forgot Password?
                  </button>
                </motion.p>
              </div>

              <div className="text-center text-sm text-muted-foreground mt-2">
                <motion.p whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  New user?{" "}
                  <Link href="/signup" className="text-primary underline">
                    Sign Up
                  </Link>
                </motion.p>
              </div>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
