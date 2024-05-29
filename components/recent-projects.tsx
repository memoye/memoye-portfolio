import { projects } from "@/data";
import { HoverEffect } from "./ui/card-hover-effect";

export default function RecentProjects() {
  return (
    <div id="projects">
      <h2>
        A selection of <span className="text-purple">my recent projects</span>
      </h2>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-16 p-4">
        <HoverEffect
          items={projects.map(({ ...item }) => ({
            ...item,
          }))}
        />
      </div>
    </div>
  );
}
