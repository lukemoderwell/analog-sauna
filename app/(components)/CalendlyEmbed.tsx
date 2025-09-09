"use client"

export default function CalendlyEmbed() {
  return (
    <div className="max-w-4xl mx-auto mt-8 md:mt-10">
      <div className="bg-white rounded-2xl p-2 md:p-4 shadow-sm border border-neutral-200">
        <div className="aspect-[4/3] md:aspect-[16/9] w-full">
          <iframe
            src="https://calendly.com/analog-sauna/30min"
            className="w-full h-full rounded-xl"
            title="Book a call"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  )
}
