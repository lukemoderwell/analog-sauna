import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Analog Sauna — Custom sauna design & build",
  description:
    "We design and build beautiful saunas for modern properties. Book a call to add a signature wellness experience to your rental.",
  openGraph: {
    title: "Analog Sauna — Custom sauna design & build",
    description: "Boost occupancy & nightly rates with a signature sauna experience.",
    type: "website",
    url: "https://analogsauna.com",
  },
    generator: 'v0.app'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-sand text-ink antialiased">{children}</body>
    </html>
  )
}
