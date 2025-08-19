export default function Benefits() {
  const items = [
    {
      number: "01",
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
      number: "02",
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
      number: "03",
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
    <section id="owners" className="section bg-gradient-to-b from-white to-sand/30 border-y border-smoke">
      <div className="container">
        <div className="max-w-3xl mb-16 text-center">
          <h2 className="h2 mb-4">A sauna is more than a luxury—it's an investment</h2>
          <p className="lead text-xl">Perfect for rental owners and property managers looking to maximize returns.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div
              key={item.title}
              className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-smoke/50 hover:border-smoke"
            >
              <div className="absolute -top-4 left-8">
                <div className="bg-ink text-white text-sm font-bold px-3 py-1 rounded-full">{item.number}</div>
              </div>

              <div className="pt-4">
                <h3 className="text-xl font-bold mb-4 text-ink group-hover:text-ink/80 transition-colors">
                  {item.title}
                </h3>
                <div className="text-neutral-700 leading-relaxed">{item.body}</div>
              </div>

              <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-smoke to-transparent"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
