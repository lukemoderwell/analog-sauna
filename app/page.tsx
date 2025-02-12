'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CalendarDays } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { sendEmail } from '@/app/actions';

export default function Home() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await sendEmail(name, email);
      setFormSubmitted(true);
      // Trigger PDF download
      const link = document.createElement('a');
      link.href = '/sample-sauna-guide.pdf'; // Replace with your actual PDF path
      link.download = 'Sauna-Planning-Guide.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Failed to send email:', error);
      alert('There was an error submitting your request. Please try again.');
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <span className="font-bold text-2xl">Analog</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#sauna-guide"
          >
            Sauna Guide
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#schedule"
          >
            Schedule
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Custom Family Saunas
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Bringing warmth and wellness to your home with handcrafted
                  saunas.
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild>
                  <Link href="#sauna-guide">Free Sauna Planning Guide</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="#schedule">Schedule a Design Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section
          id="about"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
        >
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
              Analog: A cure for the digital life
            </h2>
            <div className="typewriter-text max-w-[800px] mx-auto p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
              <p className="font-mono text-lg leading-relaxed space-y-4">
                I believe life is out of balance.
                <br />
                <br />
                Our existance has become digital. The Almighty Screen demands
                more and more our time to be sacrificed at it's alter.
                <br />
                <br />
                Over the last decade, I've spent most of my waking hours
                building software for a living.
                <br />
                <br />
                Finnish families have known for thousands of years that sauna is
                a way of life. A way of connecting with people and nature in a
                primal way: heat in a wooden box up to extremely high
                temperatures and bask in the warmth.
                <br />
                <br />
                The sauna is a special space; unhurried and unaware of the
                demands busy demands of modern life. No distractions, No fancy
                tech. Just air, heat and people you enjoy.
                <br />
              </p>
              <div className="mt-8">
                <svg
                  className="signature"
                  width="200"
                  height="100"
                  viewBox="0 0 200 100"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 80 Q30 50 50 80 T90 80"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M100 30 L100 80"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M120 30 Q140 30 140 50 T120 70"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M160 30 L160 70 Q160 80 170 80"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
              Case Study: Newport KY
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="/placeholder.svg?height=300&width=300"
                  alt="Sauna exterior"
                  className="rounded-lg"
                />
                <img
                  src="/placeholder.svg?height=300&width=300"
                  alt="Sauna interior"
                  className="rounded-lg"
                />
                <img
                  src="/placeholder.svg?height=300&width=300"
                  alt="Sauna in use"
                  className="rounded-lg"
                />
                <img
                  src="/placeholder.svg?height=300&width=300"
                  alt="Sauna details"
                  className="rounded-lg"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2">Capacity</h3>
                    <p>4-6 adults</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2">Exterior Footprint</h3>
                    <p>8' wide x 8' long x 100" tall</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2">Weight</h3>
                    <p>~ 3200 Pounds</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2">Sauna Volume</h3>
                    <p>302 cubic feet</p>
                  </CardContent>
                </Card>
                <Card className="col-span-2">
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2">Bench Length</h3>
                    <p>6'4" Length</p>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="mt-8 text-center">
              <Button asChild>
                <Link href="#schedule">Schedule a Consultation</Link>
              </Button>
            </div>
          </div>
        </section>
        <section id="sauna-guide" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Plan Your Family Sauna
            </h2>
            {!formSubmitted ? (
              <>
                <p className="mt-4 max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Thinking about adding a sauna to your home? Get our free
                  1-pager with essential questions to consider when planning
                  your family sauna.
                </p>
                <form
                  className="mt-8 max-w-sm space-y-4"
                  onSubmit={handleSubmit}
                >
                  <Input
                    placeholder="Your Name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <Input
                    type="email"
                    placeholder="Your Email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Button type="submit" className="w-full">
                    Get Your Free Sauna Planning Guide
                  </Button>
                </form>
                <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                  By requesting the guide, you'll also receive occasional
                  updates about custom saunas. You can unsubscribe at any time.
                </p>
              </>
            ) : (
              <div className="mt-8 p-6 bg-green-100 dark:bg-green-900 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Thank you, {name}!</h3>
                <p className="text-lg mb-4">
                  Your Sauna Planning Guide is being downloaded automatically.
                </p>
                <p>
                  If the download doesn't start,{' '}
                  <a
                    href="/sample-sauna-guide.pdf"
                    download
                    className="text-blue-600 dark:text-blue-400 underline"
                  >
                    click here
                  </a>
                  .
                </p>
              </div>
            )}
          </div>
        </section>
        <section
          id="schedule"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
        >
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Schedule a Meeting
            </h2>
            <p className="mt-4 max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Ready to discuss your custom sauna project? Book a time to meet
              with us and start your journey to wellness.
            </p>
            <Button className="mt-8" asChild>
              <Link
                href="https://calendly.com/your-calendly-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CalendarDays className="mr-2 h-4 w-4" /> Schedule on Calendly
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2025 Analog Custom Saunas. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
