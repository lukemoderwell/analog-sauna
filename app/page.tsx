import Navbar from "./(components)/Navbar"
import Hero from "./(components)/Hero"
import Benefits from "./(components)/Benefits"
import SignatureBuild from "./(components)/SignatureBuild"
import Process from "./(components)/Process"
import CTA from "./(components)/CTA"
import Footer from "./(components)/Footer"

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="ml-4 sm:ml-6">
        <Hero />
        <Benefits />
        <SignatureBuild />
        <Process />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
