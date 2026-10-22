import { useRef, type ReactNode } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useCinematicMotion } from "@/hooks/use-cinematic-motion";

function AnimatedPerspective({ children, direction }: { children: ReactNode; direction: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const rotateX = useTransform(scrollYProgress, [0, .5, 1], [10, 0, -6]);
  const rotateY = useTransform(scrollYProgress, [0, .5, 1], [direction * 10, 0, direction * -6]);
  const y = useTransform(scrollYProgress, [0, .5, 1], [24, 0, -18]);
  return <motion.div ref={ref} style={{ rotateX, rotateY, y, transformStyle: "preserve-3d" }} className="relative h-full w-full">{children}</motion.div>;
}

export default function ScrollPerspective({ children, direction = 1, className }: { children: ReactNode; direction?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const enabled = useCinematicMotion();
  const nearViewport = useInView(ref, { once: true, margin: "300px" });
  return <div ref={ref} className={className} style={{ transformStyle: "preserve-3d" }}>{enabled && nearViewport ? <AnimatedPerspective direction={direction}>{children}</AnimatedPerspective> : <div className="relative h-full w-full" style={{ transformStyle: "preserve-3d" }}>{children}</div>}</div>;
}
