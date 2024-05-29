import { projects } from "@/data";
import { HoverEffect } from "./ui/card-hover-effect";

export default function RecentProjects() {
  return (
    <div>
      <h2>
        A selection of <span className="text-purple">my recent projects</span>
      </h2>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-16 p-4">
        {/* {projects.map(({ title, des, iconLists, id, img, link }) => (
          <div
            className="h-[25rem flex w-[90vw] items-center justify-center sm:w-96 lg:min-h-[32.5rem]"
            key={id}
          > */}
        <HoverEffect
          items={projects.map(({ title, des, img, link }) => ({
            title,
            img,
            description: des,
            link,
          }))}
        />
        {/* </div>
        ))} */}
      </div>
    </div>
  );
}
