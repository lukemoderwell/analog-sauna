export default function Hero() {
  return (
    <section className="section pt-10 md:pt-16">
      <div className="container grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <h1 className="h1">Beautiful custom saunas for modern properties</h1>
          <p className="lead">
            We design and build saunas that boost rental value and guest experience. Minimal, durable, and built to
            last.
          </p>
          <div className="flex gap-3">
            <a href="#book" className="btn btn-primary">
              Book a Call
            </a>
            <a href="#portfolio" className="btn">
              See our Signature Build
            </a>
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-sm border border-neutral-200">
          {/* Hero image */}
          <img src="/minimalist-sauna.png" alt="Analog Sauna build" className="w-full h-[360px] object-cover" />
        </div>
      </div>
    </section>
  )
}
