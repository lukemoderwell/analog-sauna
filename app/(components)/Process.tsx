export default function Process() {
  const steps = [
    { title: "Book a call", body: "Share your property goals and constraints." },
    { title: "Design & build", body: "We handle design, materials, and installation." },
    { title: "Launch & delight", body: "Elevate your listing and guest experience." },
  ]

  return (
    <section className="section bg-white border-y border-smoke">
      <div className="container">
        <h2 className="h2 mb-10">Simple, end‑to‑end process</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div key={s.title} className="card p-6">
              <div className="text-xs tracking-widest text-neutral-500 mb-2">STEP {i + 1}</div>
              <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
              <p className="text-neutral-600">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
