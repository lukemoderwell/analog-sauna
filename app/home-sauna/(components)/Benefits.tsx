import { Droplet, Wind, Hourglass } from "lucide-react"

const benefits = [
  {
    title: "Detoxify Naturally",
    icon: Droplet,
    description: "Regular sweating helps flush out toxins and supports overall skin health.",
  },
  {
    title: "Relieve Stress",
    icon: Wind,
    description: "Warmth and solitude create a calming retreat to unwind after busy days.",
  },
  {
    title: "Support Longevity",
    icon: Hourglass,
    description: "Consistent sauna use is linked to improved cardiovascular health and endurance.",
  },
]

export default function Benefits() {
  return (
    <section className="section bg-sand/50" id="benefits">
      <div className="container">
        <h2 className="font-serif text-2xl md:text-4xl text-ink mb-12 text-center">
          Wellness Benefits
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {benefits.map((b) => (
            <div key={b.title} className="text-center space-y-4 px-4">
              <b.icon className="mx-auto h-12 w-12 text-ink" />
              <h3 className="font-serif text-xl text-ink">{b.title}</h3>
              <p className="font-sans text-neutral-700">{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
