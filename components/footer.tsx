import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200 py-12">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
              src="/images/logo.png"
                alt="MCM Logo"
                width={40}
                height={40}
                className="h-8 w-auto"
              />
              <span className="text-xl font-bold text-white">MCM Export</span>
            </div>
            <p className="text-slate-400">
              PT. Marga Cheetah Manufacturer (MCM) is a seasoned garment manufacturing company based in Jakarta,
              Indonesia. Founded in 1997 by Endy Butun.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-slate-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-slate-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#products" className="text-slate-400 hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-slate-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="tel:+62818808290" className="hover:text-white transition-colors">
                  +62 818 808 290
                </a>
              </li>
              <li>
                <a href="mailto:gabybutun@gmail.com" className="hover:text-white transition-colors">
                  gabybutun@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.mcmexport.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  www.mcmexport.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
          <p>© {new Date().getFullYear()} PT. Marga Cheetah Manufacturer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
