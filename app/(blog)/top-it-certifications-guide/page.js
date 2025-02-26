import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function BlogPage() {
  return (
    <div className="container mx-auto p-6">
      {/* Hero Section */}
      <div className="relative w-full h-64 md:h-96 bg-gray-200 flex items-center justify-center">
        <img 
          src="/ccnp.jpg" 
          alt="IT Certifications" 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white p-6 text-center">
          <h1 className="text-xl md:text-5xl font-bold">🚀 Top Certifications to Boost Your IT Career</h1>
          <p className="text-lg md:text-xl mt-2 max-w-2xl">
            📈 Enhance your career with industry-recognized certifications and stand out in the job market.
          </p>
        </div>
      </div>

      {/* Introduction */}
      <h2 className="text-2xl font-semibold mt-6">📌 Categories of IT Certifications</h2>
      <ul className="list-disc pl-5 text-gray-700">
        <li>💻 <strong>Networking:</strong> CCNA, CompTIA Network+</li>
        <li>🔐 <strong>Cybersecurity:</strong> CISSP, CEH, CompTIA Security+</li>
        <li>☁️ <strong>Cloud Computing:</strong> AWS Certified Solutions Architect, Google Cloud Professional</li>
        <li>👨‍💻 <strong>Programming & Development:</strong> Microsoft Azure Developer, Oracle Java Certification</li>
        <li>📊 <strong>Project Management:</strong> PMP, Scrum Master</li>
      </ul>

      {/* Top Certifications */}
      <h2 className="text-2xl font-semibold mt-6">🏆 Top IT Certifications</h2>
      <p className="text-gray-700">Here are some of the best IT certifications for career growth:</p>
      <ul className="list-disc pl-5 text-gray-700">
        <li>🔧 <strong>CCNA (Cisco Certified Network Associate):</strong> Ideal for networking professionals.</li>
        <li>🛡️ <strong>CISSP (Certified Information Systems Security Professional):</strong> Best for cybersecurity experts.</li>
        <li>☁️ <strong>AWS Certified Solutions Architect:</strong> Essential for cloud computing careers.</li>
        <li>📅 <strong>PMP (Project Management Professional):</strong> Recognized for project management excellence.</li>
        <li>🔑 <strong>CompTIA Security+:</strong> Entry-level certification for cybersecurity.</li>
      </ul>

      {/* Preparation Tips */}
      <h2 className="text-2xl font-semibold mt-6">📚 How to Prepare for Certification Exams</h2>
      <h3 className="text-xl font-medium mt-4">📝 Study Strategies</h3>
      <ul className="list-disc pl-5 text-gray-700">
        <li>📅 <strong>Structured Study Plan:</strong> Allocate dedicated time for each topic.</li>
        <li>🖥️ <strong>Practice Tests:</strong> Familiarize yourself with exam patterns.</li>
        <li>🛠️ <strong>Hands-on Labs:</strong> Gain practical experience through virtual labs.</li>
      </ul>

      <h3 className="text-xl font-medium mt-4">🎯 Exam Day Tips</h3>
      <ul className="list-disc pl-5 text-gray-700">
        <li>⏳ <strong>Time Management:</strong> Allocate time wisely to answer all questions.</li>
        <li>👀 <strong>Read Questions Carefully:</strong> Avoid rushing through them.</li>
        <li>💪 <strong>Stay Calm:</strong> Maintain confidence throughout the exam.</li>
      </ul>

      {/* Conclusion & CTA */}
      <h2 className="text-2xl font-semibold mt-6">🎓 Conclusion</h2>
      <p className="text-gray-700">
        🎯 Earning an IT certification can significantly enhance your career opportunities. By choosing the right certification and preparing effectively, you can take a big step toward professional success.
      </p>

      {/* <div className="mt-6 text-center">
        <Button className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-blue-700">
          🚀 Start Your Certification Journey Today
        </Button>
      </div> */}
    </div>
  );
}
