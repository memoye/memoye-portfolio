import { projects } from "@/data";
import { HoverEffect } from "./ui/card-hover-effect";

export default function RecentProjects() {
  return (
    <div className="py-20" id="projects">
      <h2 className="heading">
        A selection of <span className="text-purple">my recent projects</span>
      </h2>

      <div className="mt-6 flex flex-wrap items-center justify-center gap-16 p-4">
        <HoverEffect
          items={projects.map(({ ...item }) => ({
            ...item,
          }))}
        />
      </div>
    </div>
  );
}
