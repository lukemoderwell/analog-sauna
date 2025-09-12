export default function CTA() {
  return (
    <section className="section" id="quote">
      <div className="container text-center">
        <h2 className="font-serif text-2xl md:text-4xl text-ink mb-6">
          Ready to Build Your Oasis?
        </h2>
        <p className="font-sans text-neutral-700 max-w-xl mx-auto mb-8">
          Connect with our design team to receive a personalized sauna plan for your home.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="https://calendly.com/analog-sauna/30min"
            target="_blank"
            rel="noreferrer noopener"
            className="btn btn-primary py-4 px-6 text-lg font-semibold"
          >
            Book a Call
          </a>
          <a
            href="mailto:luke@analogsauna.com"
            className="btn btn-contact py-4 px-6 text-lg font-semibold"
          >
            Email Us
          </a>
        </div>
      </div>
    </section>
  )
}
