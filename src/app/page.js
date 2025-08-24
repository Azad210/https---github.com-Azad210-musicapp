"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";   // 👈 importer Next.js image
import "./sass/logo.scss";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/login");
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <section className="logo">
      <Image 
        src="/pic/welcome.svg" 
        alt="Welcome" 
        width={200}    
        height={200}    
      
      />
      <p className="text-on-frontpage">iPlayMusic</p>
    </section>  
  );
}
