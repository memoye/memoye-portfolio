import { Spotlight } from "./ui/spotlight";

export default function Hero() {
  return (
    <div className="bg-background pb-20 pt-36">
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
    </div>
  );
}
