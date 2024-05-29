import MagicButton from "./ui/magic-button";
import { Spotlight } from "./ui/spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { FaLocationArrow } from "react-icons/fa";

export default function Hero() {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-left-40 -top-40 h-screen md:-left-32 md:-top-0"
          fill="#FFFFFF"
        />
        <Spotlight
          className="-left-full -top-10 h-[80vh] w-[50vw] md:-left-32 md:-top-20"
          fill="#00A36C"
        />
        <Spotlight
          className="-left-80 top-28 h-[80vh] w-[50vw]"
          fill="#00FFD1"
        />
      </div>
      <div>
        <div className="absolute left-0 top-0 flex min-h-screen w-full items-center justify-center bg-white bg-grid-black/[0.3]  dark:bg-black-100 dark:bg-grid-white/[0.03]">
          {/* Radial gradient for the container to give a faded look */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100" />
        </div>
        <div className="relative z-10 my-20 flex justify-center">
          <div className="max-w-[89vw flex flex-col items-center justify-center md:max-w-2xl lg:max-w-[60vw]">
            <h2 className="max-w-80 text-center text-xs uppercase tracking-widest text-blue-100">
              Dynamic web magic with next js
            </h2>

            <TextGenerateEffect
              words="Transforming Concepts into Seamless User Experiences"
              className="text-center text-[40px] md:text-5xl lg:text-6xl"
            />
            <p className="mb-4 text-center text-sm md:text-lg md:tracking-wider lg:text-2xl">
              Hi, I&apos;m Brown, a NextJS developer based in Lagos, Nigeria
            </p>

            <a href="#about">
              <MagicButton
                iconPosition="left"
                title="Show my work"
                icon={<FaLocationArrow />}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
