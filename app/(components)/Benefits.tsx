export default function Benefits() {
  const items = [
    {
      title: "Increase Nightly Rates",
      body: (
        <>
          Listings with a sauna often command{" "}
          <a
            href="https://www.chillfiresaunas.com/blog/sauna-roi-in-short-term-rentals"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-ink hover:underline"
          >
            10–30% higher nightly rates
          </a>{" "}
          compared to similar properties without wellness amenities.
        </>
      ),
      source: "ChillFire Saunas",
    },
    {
      title: "Stand Out in Competitive Markets",
      body: (
        <>
          <strong>Saunas are key differentiators</strong> that significantly elevate your property's allure and create a
          signature wellness experience that photographs beautifully.
        </>
      ),
      source: "Backcountry Recreation",
    },
    {
      title: "Built to Last & High ROI",
      body: (
        <>
          Durable materials and craft focused on decades of use.{" "}
          <a
            href="https://www.chillfiresaunas.com/blog/sauna-roi-in-short-term-rentals"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-ink hover:underline"
          >
            12–24 months is a common payback period
          </a>{" "}
          for rental properties.
        </>
      ),
      source: "ChillFire Saunas",
    },
  ]

  return (
    <section id="owners" className="section bg-white border-y border-smoke">
      <div className="container">
        <div className="max-w-2xl mb-10">
          <h2 className="h2">A sauna is more than a luxury—it's an investment</h2>
          <p className="lead">Perfect for rental owners and property managers.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {items.map((it) => (
            <div key={it.title} className="card p-6">
              <h3 className="text-lg font-semibold mb-3">{it.title}</h3>
              <div className="text-neutral-600 mb-3">{it.body}</div>
            </div>
          ))}
        </div>

        <div className="bg-sand p-8 rounded-lg max-w-2xl mx-auto text-center">
          <h3 className="text-xl font-semibold mb-4">Guest Reactions</h3>
          <blockquote className="text-lg text-neutral-700 mb-4">
            "The sauna was amazing! Well worth the drive."
          </blockquote>
          <p className="text-sm text-neutral-500 italic">— Guest review from Backyard Lodge blog</p>
        </div>
      </div>
    </section>
  )
}
