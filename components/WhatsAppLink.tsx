"use client"

import { forwardRef } from "react"
import { trackWhatsAppClick } from "@/lib/gtag"

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  section: string
  planName?: string
}

const WhatsAppLink = forwardRef<HTMLAnchorElement, Props>(
  ({ section, planName, onClick, children, ...props }, ref) => (
    <a
      ref={ref}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
      onClick={(e) => {
        trackWhatsAppClick(section, planName)
        onClick?.(e)
      }}
    >
      {children}
    </a>
  )
)
WhatsAppLink.displayName = "WhatsAppLink"

export default WhatsAppLink
