import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://analogsauna.com"),
  alternates: { canonical: "/" },
  title: "Analog Sauna — Custom sauna design & build",
  description:
    "We design and build beautiful saunas for modern properties. Book a call to add a signature wellness experience to your rental.",
  keywords: [
    "custom sauna",
    "sauna design",
    "sauna builder",
    "sauna installation",
    "Cincinnati sauna",
    "Dayton sauna",
    "Northern Kentucky sauna",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Analog Sauna — Custom sauna design & build",
    description: "Boost occupancy & nightly rates with a signature sauna experience.",
    type: "website",
    url: "https://analogsauna.com",
    images: [
      {
        url: "/photos/sauna-exterior-1.jpg",
        width: 1200,
        height: 630,
        alt: "Modern custom sauna with dark blue siding and natural wood door",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Analog Sauna — Custom sauna design & build",
    description: "Boost occupancy & nightly rates with a signature sauna experience.",
    images: ["/photos/sauna-exterior-1.jpg"],
  },
  generator: "v0.app",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-sand text-ink antialiased">{children}</body>
    </html>
  )
}
