"use client"

import { useState } from "react"
import dynamic from "next/dynamic"

const CalendlyEmbed = dynamic(() => import("./CalendlyEmbed"), {
  ssr: false,
})

export default function CTA() {
  const [showScheduler, setShowScheduler] = useState(false)
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
          {!showScheduler && (
            <button
              onClick={() => setShowScheduler(true)}
              className="btn btn-primary w-full py-4 px-6 text-lg font-semibold"
            >
              Load inline scheduler
            </button>
          )}
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

        {showScheduler && <CalendlyEmbed />}
      </div>
    </section>
  )
}
