import { workExperience } from "@/data";
import { Button } from "./ui/moving-border";
import Image from "next/image";

export default function XP() {
  return (
    <div className="py-20" id="experience">
      <h2 className="heading">
        My <span className="text-purple">Work Experience</span>
      </h2>
      <div className="w-ful grid grid-cols-1 gap-10 py-4 max-lg:mt-10 lg:grid-cols-4">
        {workExperience.map(({ id, ...rest }) => (
          <Button
            as={"div"}
            key={id}
            borderRadius="1.75rem"
            className="flex-1 border-neutral-200 text-white dark:border-slate-800"
            duration={Math.floor(Math.random() * 10000) + 1000}
          >
            <div className="flex flex-col gap-2 p-3 py-6 md:p-5 lg:flex-row lg:p-10">
              <Image
                src={rest.thumbnail}
                className="md:20 w-16 lg:w-32"
                width={90}
                height={90}
                alt={rest.thumbnail}
              />

              <div className="lg:ms-5">
                <h3 className="text-start text-xl font-bold md:text-2xl">
                  {rest.title}
                </h3>
                <p className="mt-3 text-start font-semibold text-white-100">
                  {rest.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
}

XP.displayName = "WorkExperience";
