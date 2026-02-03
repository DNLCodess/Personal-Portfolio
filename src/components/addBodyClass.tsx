"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const AddBodyClass = () => {
  const pathName = usePathname();
  useEffect(() => {
    if (typeof window !== "undefined") {
      document.body.classList.add("dark");
    }
  }, [pathName]);
  return null;
};

export default AddBodyClass;
