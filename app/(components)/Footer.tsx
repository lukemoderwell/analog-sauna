"use client"

export default function Footer() {
  return (
    <footer className="py-10 text-center text-sm text-neutral-500">
      <div className="container">
        <div className="mb-4">
          <a
            href="mailto:luke@analogsauna.com"
            className="hover:text-ink transition-colors underline"
            onClick={() => console.log("[v0] Footer email link clicked")}
          >
            luke@analogsauna.com
          </a>
          {" • "}
          <a
            href="tel:+15132820225"
            className="hover:text-ink transition-colors underline"
            onClick={() => console.log("[v0] Footer phone link clicked")}
          >
            (513) 282-0225
          </a>
        </div>
        <div>© {new Date().getFullYear()} Analog Sauna. All rights reserved.</div>
      </div>
    </footer>
  )
}
