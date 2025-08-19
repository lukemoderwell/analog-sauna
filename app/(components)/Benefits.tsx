export default function Benefits() {
  const items = [
    {
      title: "Increase nightly rates",
      body: "A sauna differentiates your listing and commands a premium.",
    },
    {
      title: "Stand out in competitive markets",
      body: "Create a signature wellness experience that photographs beautifully.",
    },
    {
      title: "Built to last",
      body: "Durable materials and craft focused on decades of use.",
    },
  ]

  return (
    <section id="owners" className="section bg-white border-y border-smoke">
      <div className="container">
        <div className="max-w-2xl mb-10">
          <h2 className="h2">A sauna is more than a luxury—it's an investment</h2>
          <p className="lead">Perfect for rental owners and property managers.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.title} className="card p-6">
              <h3 className="text-lg font-semibold mb-2">{it.title}</h3>
              <p className="text-neutral-600">{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
