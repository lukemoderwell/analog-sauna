"use client"
import Link from "next/link"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-sand/80 border-b border-smoke">
      <div className="container flex items-center justify-between h-16">
        <Link href="#" className="font-medium tracking-tight">
          Analog Sauna
        </Link>
        <nav className="flex items-center gap-2">
          <a href="#owners" className="btn btn-ghost max-lg:hidden text-sm">
            For Property Owners
          </a>
          <a href="#book" className="btn btn-primary text-sm">
            Book a Call
          </a>
        </nav>
      </div>
    </header>
  )
}
