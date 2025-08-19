export default function CTA() {
  return (
    <section id="book" className="section">
      <div className="container text-center">
        <h2 className="h2 mb-4">Ready to elevate your property?</h2>
        <p className="lead mb-6">Book a quick intro call. We'll discuss goals, budget, and timeline.</p>
        <div className="flex items-center justify-center gap-3">
          <a href="https://calendly.com/" target="_blank" rel="noreferrer noopener" className="btn btn-primary">
            Book on Calendly
          </a>
          <a href="mailto:hello@analogsauna.com" className="btn">
            Email Us
          </a>
        </div>
        {/* Inline embed alternative (swap Calendly URL): */}
        <div className="max-w-3xl mx-auto mt-10 card p-2">
          <div className="aspect-[16/9] w-full">
            <iframe src="https://calendly.com/" className="w-full h-full rounded-xl" title="Book a call" />
          </div>
        </div>
      </div>
    </section>
  )
}
