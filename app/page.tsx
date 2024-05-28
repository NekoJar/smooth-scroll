"use client";

import Image from "next/image";

export default function Home() {
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
