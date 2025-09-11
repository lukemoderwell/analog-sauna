import Image from "next/image"

const images = [
  {
    src: "/photos/sauna-interior.jpg",
    alt: "Light wood interior with broad benches",
    caption: "Minimalist alder interior",
  },
  {
    src: "/photos/sauna-door-detail.jpg",
    alt: "Glass door detail",
    caption: "Frameless glass entry",
  },
  {
    src: "/photos/sauna-exterior-1.jpg",
    alt: "Sauna exterior with large windows",
    caption: "Expansive glass walls",
  },
  {
    src: "/photos/sauna-exterior-2.jpg",
    alt: "Outdoor sauna at dusk",
    caption: "Warm glow in any setting",
  },
]

export default function Portfolio() {
  return (
    <section className="section" id="portfolio">
      <div className="container">
        <h2 className="font-serif text-2xl md:text-4xl text-center mb-12 text-ink">Portfolio Showcase</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {images.map((img) => (
            <figure key={img.src} className="space-y-3">
              <div className="relative aspect-square w-full overflow-hidden rounded-xl">
                <Image src={img.src} alt={img.alt} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />
              </div>
              <figcaption className="font-sans text-center text-neutral-700">{img.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
