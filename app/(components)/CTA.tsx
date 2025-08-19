"use client"

export default function CTA() {
  return (
    <section id="book" className="section">
      <div className="container text-center px-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-ink leading-tight">
          Ready to elevate your property?
        </h2>
        <p className="text-lg md:text-xl leading-relaxed text-neutral-600 mb-8 md:mb-6 max-w-2xl mx-auto">
          Book a quick intro call. We'll discuss goals, budget, and timeline.
        </p>

        <div className="flex flex-col gap-4 mb-8 md:mb-6 max-w-md mx-auto">
          <a
            href="https://calendly.com/analog-sauna/30min"
            target="_blank"
            rel="noreferrer noopener"
            className="btn btn-primary w-full py-4 px-6 text-lg font-semibold"
          >
            Book on Calendly
          </a>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="tel:+15132820225"
              className="btn btn-contact flex-1 py-3 px-4 text-base font-medium"
              onClick={() => console.log("[v0] Phone link clicked")}
            >
              📞 Call (513) 282-0225
            </a>
            <a
              href="mailto:luke@analogsauna.com"
              className="btn btn-contact flex-1 py-3 px-4 text-base font-medium"
              onClick={() => console.log("[v0] Email link clicked")}
            >
              ✉️ Email Luke
            </a>
          </div>
        </div>

        <div className="text-sm md:text-base text-neutral-600 mb-8 md:mb-10">
          <p className="mb-1">Or reach out directly:</p>
          <p className="font-medium">luke@analogsauna.com • (513) 282-0225</p>
        </div>

        <div className="max-w-4xl mx-auto mt-8 md:mt-10">
          <div className="bg-white rounded-2xl p-2 md:p-4 shadow-sm border border-neutral-200">
            <div className="aspect-[4/3] md:aspect-[16/9] w-full">
              <iframe
                src="https://calendly.com/analog-sauna/30min"
                className="w-full h-full rounded-xl"
                title="Book a call"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
