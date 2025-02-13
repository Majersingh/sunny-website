"use client";
import { useState  ,useEffect} from "react";
import { useForm } from "react-hook-form";
import { auth } from "../lib/firebase";
import { createUserWithEmailAndPassword  , onAuthStateChanged} from "firebase/auth";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Spinner from'@/components/spinner'


import { database } from "@/lib/firebase"; // Import Firestore from your Firebase setup
import { collection, addDoc, serverTimestamp } from "firebase/firestore"; // Firestore functions


export default function Signup() {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const router= useRouter()


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
      console.log("User signed up:", userCredential.user);
     
      addDoc(collection(database, "users"), {
        ...data,
        createdAt: serverTimestamp(), // Add a timestamp
      });
      
      router.push('/dashboard')
      setError(""); // Clear errors on successful signup
    } catch (error) {
      setError(`Error(${error.message?.split('/')[1]} Please try again.`);
      console.error("Signup error:", error.message);
    } finally {
      setIsLoading(false);
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
    <div className="flex w-screen mt-4 justify-center p-2">
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
              <CardTitle className="text-center text-2xl font-bold">Create New Account- SignUp</CardTitle>
               <p className="text-center text-xs">Learn on your own time from top universities and businesses.</p>
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
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="space-y-4"
            >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Name Field */}
                <Input
                  type="text"
                  placeholder="Full Name"
                  {...register("name", {
                    required: "Name is required",
                    minLength: { value: 2, message: "Name must be at least 2 characters" },
                  })}
                />
                {errors.name && (
                  <motion.p
                    className="text-red-500 text-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {errors.name.message}
                  </motion.p>
                )}

                {/* Email Field */}
                <Input
                  type="email"
                  placeholder="Email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                      message: "Please enter a valid email address",
                    },
                  })}
                />
                {errors.email && (
                  <motion.p
                    className="text-red-500 text-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {errors.email.message}
                  </motion.p>
                )}

                {/* Mobile Number Field */}
                <Input
                  type="tel"
                  placeholder="Mobile Number"
                  {...register("mobile", {
                    required: "Mobile number is required",
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Enter a valid 10-digit mobile number",
                    },
                  })}
                />
                {errors.mobile && (
                  <motion.p
                    className="text-red-500 text-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {errors.mobile.message}
                  </motion.p>
                )}

                {/* Password Field */}
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters long",
                      },
                    })}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-3 flex items-center"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
                {errors.password && (
                  <motion.p
                    className="text-red-500 text-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {errors.password.message}
                  </motion.p>
                )}

                {/* Submit Button */}
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button className="w-full" type="submit" disabled={isLoading}>
                    {isLoading ? <Spinner /> : "Sign Up"}
                  </Button>
                </motion.div>
              </form>

              {/* Link to Login */}
              <div className="text-center text-sm text-muted-foreground mt-2">
                <motion.p whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  Already have an account?{" "}
                  <Link href="/login" className="text-primary underline">
                    Login
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
