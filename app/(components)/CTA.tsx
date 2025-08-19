"use client"

export default function CTA() {
  return (
    <section id="book" className="section">
      <div className="container text-center">
        <h2 className="h2 mb-4">Ready to elevate your property?</h2>
        <p className="lead mb-6">Book a quick intro call. We'll discuss goals, budget, and timeline.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
          <a
            href="https://calendly.com/analog-sauna/30min"
            target="_blank"
            rel="noreferrer noopener"
            className="btn btn-primary"
          >
            Book on Calendly
          </a>
          <a href="tel:+15132820225" className="btn btn-contact" onClick={() => console.log("[v0] Phone link clicked")}>
            📞 Call (513) 282-0225
          </a>
          <a
            href="mailto:luke@analogsauna.com"
            className="btn btn-contact"
            onClick={() => console.log("[v0] Email link clicked")}
          >
            ✉️ Email Luke
          </a>
        </div>
        <div className="text-sm text-neutral-600 mb-8">
          <p>Or reach out directly:</p>
          <p className="font-medium">luke@analogsauna.com • (513) 282-0225</p>
        </div>
        {/* Inline embed alternative (swap Calendly URL): */}
        <div className="max-w-3xl mx-auto mt-10 card p-2">
          <div className="aspect-[16/9] w-full">
            <iframe
              src="https://calendly.com/analog-sauna/30min"
              className="w-full h-full rounded-xl"
              title="Book a call"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
