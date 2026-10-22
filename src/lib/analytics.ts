export function trackEvent(name: string, properties: Record<string, string> = {}) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent("rankior:analytics", { detail: { name, properties } }));
  const dataLayer = (window as Window & { dataLayer?: Array<Record<string, unknown>> }).dataLayer;
  dataLayer?.push({ event: name, ...properties });
}
