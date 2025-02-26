'use client'
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import  Link  from 'next/link';

const blogPosts = [
  {
    title: "Top Certifications to Boost Your IT Career",
    image: "/ccnp.jpg",
    link: "/top-it-certifications-guide",
  },
  {
    title: "CCNA Interview Questions",
    image: "/ccna.jpg",
    link: "/top-ccna-interview-questions",
  },
  {
    title: "Comprehensive Guide to AWS Interview Questions",
    image: "/aws.png",
    link: "/top-aws-services",
  },
];

const BlogList = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div className="container mx-auto px-4" id='blogs'>
      <h2 className="text-3xl font-bold text-center mb-8">Latest Blog Posts</h2>
      <div className="grid md:grid-cols-3 gap-6" ref={ref}>
        {blogPosts.map((post, index) => (
          <motion.div
            key={index}
            className="relative rounded-lg overflow-hidden shadow-lg cursor-pointer group"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <Link href={post.link}>
              <div
                className="h-64 bg-cover bg-center transition-transform group-hover:scale-105"
                style={{ backgroundImage: `url(${post.image})` }}
              ></div>
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <h3 className="text-xl font-semibold text-white text-center">
                  {post.title}
                </h3>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
