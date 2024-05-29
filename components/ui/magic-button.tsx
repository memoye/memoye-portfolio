type MagicButtonProps = {
  title: string;
  icon: React.ReactNode;
  iconPosition: "left" | "right";
  onClick?: () => void;
  className?: string;
};

export default function MagicButton({
  title,
  icon,
  iconPosition,
  className,
  onClick,
}: MagicButtonProps) {
  return (
    <span className="relative inline-flex h-12 w-full overflow-hidden  rounded-lg p-[1px] focus:outline-none md:mt-10 md:w-60">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl ${className}`}
      >
        {iconPosition === "left" && icon}
        {title}
        {iconPosition === "right" && icon}
      </span>
    </span>
  );
}
