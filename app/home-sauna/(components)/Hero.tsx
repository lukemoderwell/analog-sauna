import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative h-[70vh] md:h-screen">
      <Image
        src="/modern-sauna-installation.png"
        alt="Luxurious custom sauna in a modern home"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 flex h-full items-center justify-center text-center px-4">
        <div className="max-w-2xl space-y-6">
          <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white font-medium leading-tight">
            Bring the Healing Power of Sauna Into Your Home
          </h1>
          <p className="font-sans text-lg md:text-xl text-white/90">
            Custom-built saunas designed to match your home’s aesthetic while delivering unmatched wellness benefits.
          </p>
          <a
            href="#quote"
            className="btn btn-primary py-4 px-6 text-lg font-semibold"
          >
            Book a Free Design Consultation
          </a>
        </div>
      </div>
    </section>
  )
}
