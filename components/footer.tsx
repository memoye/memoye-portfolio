import Image from "next/image";
import MagicButton from "./ui/magic-button";
import { RiMailSendLine } from "react-icons/ri";
import { socialMedia } from "@/data";

export default function Footer() {
  return (
    <footer
      className="w-full px-5 pb-4 pt-20 sm:px-10"
      id="contact"
      style={{
        background: "url(/footer-grid.svg)",
      }}
    >
      <div className="z-10 flex flex-col items-center gap-6 py-8">
        <h2 className="heading z-[100000] leading-snug lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h2>
        {/* <p>Reach out to me today! Let&apos;s discuss how I can help you.</p> */}
        <a href="mailto:memoyebrown@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<RiMailSendLine />}
            iconPosition="right"
          />
        </a>
      </div>

      <div className="mt-16 flex flex-col-reverse items-center justify-between gap-4 md:flex-row">
        <p className="text-sm font-light md:text-base">
          Copyright &copy; {new Date().getFullYear()} Brown Memoye
        </p>

        <div className="flex items-center gap-6 md:gap-3">
          {socialMedia.map(({ id, icon: Icon, url, handle }) => (
            <a
              className="rounded-md border border-white-100/45 bg-white/10 p-2 backdrop-blur"
              href={url}
              key={id}
              title={handle}
            >
              <Icon className="size-6" />
            </a>
          ))}
        </div>
      </div>
      <div className="h-14" />
    </footer>
  );
}
