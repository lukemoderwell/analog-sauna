import dynamic from 'next/dynamic'

const FooterAnalytics = dynamic(() => import('./FooterAnalytics'), {
  ssr: false,
})

export default function Footer() {
  return (
    <footer className="py-10 text-center text-sm text-neutral-500">
      <div className="container">
        <div className="mb-4">
          <a
            href="mailto:luke@analogsauna.com"
            id="footer-email"
            className="hover:text-ink transition-colors underline"
          >
            luke@analogsauna.com
          </a>
          {" • "}
          <a
            href="tel:+15132820225"
            id="footer-phone"
            className="hover:text-ink transition-colors underline"
          >
            (513) 282-0225
          </a>
        </div>
        <div>© {new Date().getFullYear()} Analog Sauna. All rights reserved.</div>
      </div>
      <FooterAnalytics />
    </footer>
  )
}
