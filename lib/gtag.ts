declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

export function trackWhatsAppClick(section: string, planName?: string) {
  if (typeof window === "undefined" || !window.gtag) return
  window.gtag("event", "whatsapp_click", {
    section,
    ...(planName && { plan_name: planName }),
  })
}
