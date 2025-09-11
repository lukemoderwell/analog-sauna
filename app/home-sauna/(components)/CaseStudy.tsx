import Image from "next/image"

export default function CaseStudy() {
  return (
    <section className="section bg-sand/50" id="case-study">
      <div className="container grid md:grid-cols-2 gap-8 items-center">
        <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden">
          <Image
            src="/photos/sauna-interior.jpg"
            alt="Custom sauna installation"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div className="space-y-4">
          <h2 className="font-serif text-2xl md:text-4xl text-ink">Client Spotlight</h2>
          <p className="font-sans text-neutral-700">
            “The craftsmanship is unmatched. Our home sauna has become the sanctuary we never knew we needed.”
          </p>
          <p className="font-sans text-neutral-500">— Sarah M., Aspen, CO</p>
        </div>
      </div>
    </section>
  )
}
