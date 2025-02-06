"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Courses from "@/components/courses";
import Program from "@/components/programme";

export default function Page({params}) {
  const searchParams = useSearchParams();
  const type = searchParams.get("tab"); // Get 'type' from URL

  const [component, setComponent] = useState(<Program />); // Default to Program

  useEffect(() => {
    setComponent(type === "courses" ? <Courses /> : <Program />);
  }, [type]); // Update when 'type' changes

  return component;
}
