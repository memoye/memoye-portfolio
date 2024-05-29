"use client";

import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    img: string;
    des: string;
    iconLists: string[];
    link: string;
    github_repo?: string;
    id: number;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 py-10  md:grid-cols-2  lg:grid-cols-3",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          // href={item?.link}
          key={item?.id}
          className="group relative  block h-full w-full p-2"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 block h-full w-full rounded-3xl bg-neutral-200  dark:bg-slate-800/[0.8]"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardImage src={item.img} />
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.des}</CardDescription>
            <CardFooter>
              <div className="flex w-fit items-center">
                {item.iconLists.map((icon, idx) => (
                  <div
                    key={icon}
                    className="flex size-8 items-center justify-center rounded-full border border-white/[0.2] bg-black  lg:size-10"
                    style={{ transform: `translateX(${5 * idx * 2 * -1}px)` }}
                  >
                    <Image src={icon} width={20} height={20} alt="icon" />
                  </div>
                ))}
              </div>

              <div className="flex gap-3 ">
                <a
                  href={item.link}
                  target="_blank"
                  className="flex items-center justify-center gap-2 text-purple"
                >
                  <span className="text-xs md:text-sm">Demo</span>
                  <FaExternalLinkAlt />
                </a>

                {item.github_repo && (
                  <a
                    href={item.github_repo}
                    className="rounded-full p-2 hover:bg-neutral-200 dark:hover:bg-slate-800/[0.8]"
                    title="Github repo"
                  >
                    <FaGithub />
                  </a>
                )}
              </div>
            </CardFooter>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const CardFooter = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="mb-2 mt-8 flex w-full items-center justify-between gap-4 max-sm:flex-wrap">
      {children}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "_bg-black relative z-20 h-full w-full overflow-hidden rounded-2xl border border-transparent bg-background/10 p-4 hover:bg-black-100 group-hover:border-slate-700 dark:border-white/[0.2]",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardImage = ({
  className,
  src,
}: {
  className?: string;
  src: string;
}) => {
  return (
    <div className="w-full">
      <Image
        src={src}
        height="1000"
        width="1000"
        className={cn(
          "h-60 w-full rounded-xl object-cover group-hover/card:shadow-xl",
          className
        )}
        alt="thumbnail"
      />
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("mt-4 font-bold tracking-wide text-zinc-100", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-4 text-sm leading-relaxed tracking-wide text-zinc-400",
        className
      )}
    >
      {children}
    </p>
  );
};
