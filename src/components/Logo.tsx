import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  markClassName?: string;
  innerClassName?: string;
  textClassName?: string;
  showText?: boolean;
};

export const Logo = ({
  className,
  markClassName,
  innerClassName,
  textClassName,
  showText = true,
}: LogoProps) => (
  <div className={cn("flex items-center gap-3", className)}>
    <div className={cn("size-9 bg-foreground rounded-md rotate-45 grid place-items-center", markClassName)}>
      <div className={cn("size-3.5 bg-primary -rotate-45", innerClassName)} aria-hidden />
    </div>
    {showText ? <span className={cn("font-display text-xl font-bold tracking-tight", textClassName)}>Lunico</span> : null}
  </div>
);