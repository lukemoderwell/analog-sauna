export default function SignatureBuild() {
  const photos = [
    "/photos/sauna-exterior-1.jpg",
    "/photos/sauna-exterior-2.jpg",
    "/photos/sauna-interior.jpg",
    "/photos/sauna-door-detail.jpg",
  ]

  return (
    <section id="portfolio" className="section">
      <div className="container">
        <div className="max-w-2xl mb-10">
          <h2 className="h2">Our Signature Build</h2>
          <p className="lead">
            A minimalist, Nordic‑inspired sauna blending tradition and modern comfort. This project transformed a rental
            into a destination guests remember.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {photos.map((src, i) => (
            <div key={src} className="overflow-hidden rounded-xl border border-neutral-200 bg-white">
              <img
                src={src || "/placeholder.svg"}
                alt={`Sauna photo ${i + 1}`}
                className="w-full h-48 md:h-56 object-cover hover:scale-[1.02] transition"
              />
            </div>
          ))}
        </div>
        <div className="mt-6 text-neutral-500 text-sm">More builds coming soon.</div>
      </div>
    </section>
  )
}
