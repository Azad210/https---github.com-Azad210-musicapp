"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
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
      <img src="/pic/welcome.svg" alt="Welcome" />
      <p className="text-on-frontpage">iPlayMusic</p>
    </section>  
  );
}


