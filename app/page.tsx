import Footer from "@/components/footer";
import Grid from "@/components/grid";
import Hero from "@/components/hero";
import MyProcess from "@/components/my-process";
import RecentProjects from "@/components/recent-projects";
import Testimonials from "@/components/testimonials";
import XP from "@/components/xp";

export default function Home() {
  return (
    <main className="_bg-black-100 relative mx-auto flex flex-col items-center justify-center overflow-hidden px-5 sm:px-10 ">
      <div className="w-full max-w-7xl">
        <Hero />
        <Grid />
        <RecentProjects />
        <Testimonials />
        <XP />
        <MyProcess />
      </div>
    </main>
  );
}
