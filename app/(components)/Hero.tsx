export default function Hero() {
  return (
    <section className="section pt-8 md:pt-16">
      <div className="container grid md:grid-cols-2 gap-8 md:gap-10 items-center">
        <div className="space-y-6 md:space-y-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-ink">
            Beautiful custom saunas for modern properties
          </h1>
          <p className="text-lg md:text-xl leading-relaxed text-neutral-600">
            We design and build saunas that boost rental value and guest experience. Minimal, durable, and built to
            last.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-3">
            <a href="#book" className="btn btn-primary text-center py-4 px-6 text-lg font-semibold">
              Book a Call
            </a>
            <a href="#portfolio" className="btn text-center py-4 px-6 text-lg hidden sm:inline-flex">
              See our Signature Build
            </a>
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-sm border border-neutral-200 mt-6 md:mt-0">
          <img
            src="/minimalist-sauna.png"
            alt="Analog Sauna build"
            className="w-full h-[280px] sm:h-[320px] md:h-[360px] object-cover"
          />
        </div>
      </div>
    </section>
  )
}
