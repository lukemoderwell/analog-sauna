"use client"

import { useState } from "react"
import Image from "next/image"

export default function SignatureBuild() {
  const photos = [
    "/photos/sauna-exterior-1.jpg",
    "/photos/sauna-exterior-2.jpg",
    "/photos/sauna-interior.jpg",
    "/photos/sauna-door-detail.jpg",
  ]

  const photoAlts = [
    "Modern outdoor sauna surrounded by greenery",
    "Side view of minimalist black sauna exterior",
    "Cedar wood interior of a custom sauna",
    "Detail of glass door and wood craftsmanship",
  ]

  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState("")

  const openLightbox = (src: string) => {
    setCurrentImage(src)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    setCurrentImage("")
  }

  return (
    <section id="portfolio" className="section">
      <div className="container">
        <div className="max-w-2xl mb-8 md:mb-10 px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-ink leading-tight">
            Our Signature Build
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-neutral-600">
            A minimalist, Nordic‑inspired sauna blending tradition and modern comfort. This project transformed a rental
            into a destination guests remember.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {photos.map((src, i) => (
            <div
              key={src}
              className={`overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer ${
                i === 0 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
              onClick={() => openLightbox(src)}
            >
              <Image
                src={src || "/placeholder.svg"}
                alt={photoAlts[i]}
                width={4032}
                height={3024}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className={`w-full object-cover hover:scale-[1.02] transition-transform duration-300 ${
                  i === 0 ? "h-64 sm:h-80 lg:h-64" : "h-64 sm:h-56 lg:h-64"
                }`}
              />
            </div>
          ))}
        </div>

        <div className="mt-6 md:mt-8 text-center">
          <p className="text-neutral-500 text-sm md:text-base">More builds coming soon.</p>
        </div>
      </div>

      {lightboxOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-7xl max-h-full">
            <Image
              src={currentImage || "/placeholder.svg"}
              alt="Enlarged view of the Analog Sauna signature build"
              width={4032}
              height={3024}
              sizes="100vw"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white text-4xl hover:text-neutral-300 transition-colors"
              aria-label="Close lightbox"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
