"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Courses from "@/components/courses";
import Program from "@/components/programme";
const allContent={courses: <Courses/> , programs:<Program/>, 'my-programs':<>Not Joined :  <a className="text-blue-500 underline" href='http://127.0.0.1:3000/dashboard?tab=programs'> Explore</a></> , 'my-courses':<>Not Enrolled : <a className="text-blue-500 underline" href='http://127.0.0.1:3000/dashboard?tab=courses'> Explore</a></>}

export default function Page({params}) {
  const searchParams = useSearchParams();
  const type = searchParams.get("tab"); // Get 'type' from URL

  const [component, setComponent] = useState(<Program />); // Default to Program

  useEffect(() => {
    setComponent(allContent[type]|| <Program/>);
  }, [type]); // Update when 'type' changes

  return component;
}
