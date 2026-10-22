import { useSyncExternalStore } from "react";

const query = "(min-width: 1024px) and (min-height: 761px) and (prefers-reduced-motion: no-preference)";
const subscribe = (callback: () => void) => {
  const media = window.matchMedia(query);
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
};

export function useCinematicMotion() {
  return useSyncExternalStore(subscribe, () => window.matchMedia(query).matches, () => false);
}
