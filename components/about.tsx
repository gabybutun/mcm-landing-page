import Image from "next/image"

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-slate-50">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
            src="/images/factory_2.jpeg"
              alt="MCM Factory"
              width={600}
              height={400}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold mb-2">Shaping Fashion with Care & Craftsmanship</h2>
              <div className="w-20 h-1 bg-mcm-green"></div>
            </div>
            <p className="text-slate-700">
              At Marga Cheetah Manufacturer (MCM), we believe that great clothing starts with great partnerships.
              Founded in 1997 by Endy Butun, we've grown from a local Jakarta workshop into an international garment
              manufacturer specializing in children's apparel — with a strong focus on girls' fashion.
            </p>
            <p className="text-slate-700">
              Starting our export journey to Africa, the Middle East, and Panama, we entered the United States market in
              2005 and have since become a reliable supplier for various wholesalers across the U.S.
            </p>
            <p className="text-slate-700">
              With decades of experience and global export success, we're proud to deliver high-quality, ethically made
              clothing to brands and wholesalers across the United States, Africa, the Middle East, and beyond.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
