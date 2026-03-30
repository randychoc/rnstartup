import React from "react"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import './globals.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'RENOA | Desarrollo Web Profesional con Visión de Crecimiento',
  description: 'RENOA desarrolla sitios web profesionales con arquitectura escalable. Preparamos tu presencia digital para el crecimiento futuro.',
  keywords: ['desarrollo web', 'sitios web profesionales', 'arquitectura web', 'diseño web corporativo', 'RENOA'],
  authors: [{ name: 'RENOA' }],
  openGraph: {
    title: 'RENOA | Desarrollo Web Profesional',
    description: 'Sitios web profesionales con arquitectura escalable y soporte estructurado.',
    type: 'website',
  },
}

export const viewport = {
  themeColor: '#FFFFFF',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`font-sans antialiased`}>
        <GoogleAnalytics />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
