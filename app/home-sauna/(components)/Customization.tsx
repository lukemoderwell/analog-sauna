const woods = [
  { name: "Pine", color: "#E3C9A8" },
  { name: "Spruce", color: "#F2E1C9" },
  { name: "Alder", color: "#D3A681" },
  { name: "Thermo-Alder", color: "#8A5A33" },
]

export default function Customization() {
  return (
    <section className="section bg-white" id="customization">
      <div className="container">
        <h2 className="font-serif text-2xl md:text-4xl text-center mb-8 text-ink">Tailored to Your Taste</h2>
        <p className="font-sans text-neutral-700 text-center max-w-2xl mx-auto mb-12">
          Choose from a range of premium woods and finishes to craft a sauna that seamlessly blends with your home's design.
        </p>
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {woods.map((w) => (
            <div key={w.name} className="flex flex-col items-center gap-2">
              <span
                className="block h-16 w-16 rounded-full border border-smoke"
                style={{ backgroundColor: w.color }}
              />
              <span className="font-sans text-sm text-neutral-700">{w.name}</span>
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="font-sans text-neutral-700 space-y-2">
            <h3 className="font-serif text-xl text-ink mb-2">Glass Walls</h3>
            <p>
              Floor-to-ceiling glass panels create an open, airy feel while showcasing the beauty of your interior.
            </p>
          </div>
          <div className="font-sans text-neutral-700 space-y-2">
            <h3 className="font-serif text-xl text-ink mb-2">Heater Sizing</h3>
            <p>
              We size each heater for optimal performance, ensuring quick heat-up times and consistent temperatures.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
