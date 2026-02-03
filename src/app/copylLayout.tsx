
"use client";
import { animationCreate } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect } from "react";

const CopyLayout = ({ children }: { children: ReactNode }) => {
  const pathName = usePathname();

  useEffect(() => {
    const isDark = pathName === "/home-2" || pathName.endsWith("dark");

    if (isDark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [pathName]);

  useEffect(() => {
    if (pathName) {
      animationCreate();
    }
  }, [pathName]);

  return <>{children}</>;
};

export default CopyLayout;




