import Hero from "@/components/hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative mx-auto flex flex-col items-center justify-center overflow-hidden bg-background px-5 sm:px-10 ">
      <div className="w-full max-w-7xl">
        <Hero />
      </div>
    </main>
  );
}
