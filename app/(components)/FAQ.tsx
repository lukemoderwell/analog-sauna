"use client"
import Script from "next/script"

const faqs = [
  {
    question: "What services do you offer?",
    answer: "We design and build custom saunas tailored to your property.",
  },
  {
    question: "How long does installation take?",
    answer: "Installation timelines vary, but most projects are completed within a few weeks after design approval.",
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="py-16">
      <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
      {faqs.map((faq) => (
        <div key={faq.question} className="mb-4">
          <h3 className="font-semibold">{faq.question}</h3>
          <p>{faq.answer}</p>
        </div>
      ))}
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </section>
  )
}
