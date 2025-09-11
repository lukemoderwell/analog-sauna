import Navbar from "./(components)/Navbar"
import Hero from "./(components)/Hero"
import Benefits from "./(components)/Benefits"
import Portfolio from "./(components)/Portfolio"
import Customization from "./(components)/Customization"
import CaseStudy from "./(components)/CaseStudy"
import CTA from "./(components)/CTA"
import Footer from "./(components)/Footer"

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="ml-4 sm:ml-6">
        <Hero />
        <Benefits />
        <Portfolio />
        <Customization />
        <CaseStudy />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
