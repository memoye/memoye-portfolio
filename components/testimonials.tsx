import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import Image from "next/image";

export default function Testimonials() {
  return (
    <div className="py-20" id="testimonials">
      <h2 className="heading">Kind words from satisfied clients</h2>
      <div className="mt-10 flex flex-col items-center">
        {/* <div className="relative flex h-[50vh] flex-col items-center overflow-hidden rounded-md antialiased md:h-[30rem]"> */}
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
        {/* </div> */}

        <div className="flex flex-wrap items-center justify-center gap-4 max-lg:mt-10 md:gap-16">
          {companies.map(({ id, img, name, nameImg }) => (
            <div key={id} className="flex h-auto max-w-32 gap-2 md:max-w-60">
              <Image
                src={img}
                width={40}
                height={40}
                alt={name}
                className="h-auto w-5 md:w-10"
              />
              <Image
                src={nameImg}
                width={96}
                height={96}
                alt={name}
                className="h-auto w-20 md:w-24"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
