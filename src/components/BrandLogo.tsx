import { cn } from "@/lib/utils";

export function BrandMark({ className, decorative = true }: { className?: string; decorative?: boolean }) {
  return <img src="/favicon.svg?v=rankior-blue-mint" width={512} height={512} alt={decorative ? "" : "Rankior"} aria-hidden={decorative || undefined} draggable={false} className={cn("block aspect-square shrink-0", className)} />;
}

export default function BrandLogo({ className, inverse = false }: { className?: string; inverse?: boolean }) {
  return <span className={cn("inline-flex items-center gap-2.5", className)}><BrandMark className="h-10 w-10"/><span className={cn("text-[25px] font-black tracking-[-0.055em]", inverse ? "text-white" : "text-ink")}>Rankior<span className={inverse ? "text-mint" : "text-brand-600"}>.</span></span></span>;
}
