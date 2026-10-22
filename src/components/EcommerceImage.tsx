import type { CSSProperties } from "react";
import nomada from "@/assets/nomada-interior.png?w=240;480;768;1024;1280&format=webp&quality=74&as=srcset";
import botanica from "@/assets/botanica-skincare.png?w=240;480;768;1024;1280&format=webp&quality=74&as=srcset";

const images = { nomada, botanica };
export type ImageName = keyof typeof images;

type Props = {
  name: ImageName;
  alt: string;
  sizes: string;
  className?: string;
  style?: CSSProperties;
  eager?: boolean;
  priority?: boolean;
};

export default function EcommerceImage({ name, alt, sizes, className, style, eager = false, priority = false }: Props) {
  const srcSet = images[name];
  return <img src={srcSet.split(",")[0].trim().split(" ")[0]} srcSet={srcSet} sizes={sizes} width={1280} height={853} alt={alt} decoding="async" loading={eager ? "eager" : "lazy"} fetchPriority={priority ? "high" : "auto"} className={className} style={style}/>;
}
