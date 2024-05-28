"use client";

import gsap from "gsap";
import Lenis from "lenis";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  //Lenis only
  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", (e: Event) => {
      console.log(e);
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  // GSAP + Lenis
  // useEffect(() => {
  //   const lenis = new Lenis();

  //   lenis.on("scroll", (e: Event) => {
  //     console.log(e);
  //   });

  //   lenis.on("scroll", ScrollTrigger.update);

  //   gsap.ticker.add((time) => {
  //     lenis.raf(time * 1000);
  //   });

  //   gsap.ticker.lagSmoothing(0);
  // }, []);

  return (
    <main>
      <div className="flex flex-col sm:flex-row items-center justify-center h-screen">
        <Image
          src="/cat/orderedlistocat.png"
          alt="cat"
          width={300}
          height={300}
        />
        <h1 className="text-6xl sm:text-9xl font-extrabold">Hewwwo</h1>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center h-screen bg-neutral-900">
        <Image src="/cat/heisencat.png" alt="cat" width={300} height={300} />
        <h1 className="text-6xl sm:text-9xl font-extrabold text-white p-4">
          Hewwwo
        </h1>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center h-screen">
        <Image src="/cat/murakamicat.png" alt="cat" width={300} height={300} />
        <h1 className="text-6xl sm:text-9xl font-extrabold">Hewwwo</h1>
      </div>
    </main>
  );
}
