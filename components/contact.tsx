import { MapPin, Phone, Mail } from "lucide-react"
import { ContactForm } from "./contact-form"

export function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
            <p className="text-slate-600 mb-8">
              Have questions or ready to discuss your manufacturing needs? Reach out to us through any of the following
              channels:
            </p>
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-mcm-green shrink-0 mt-0.5" />
                <div className="ml-4">
                  <h3 className="font-semibold mb-1">Address</h3>
                  <p className="text-slate-600">
                    Jl. Duri Raya Selatan No.15 7, RT.6/RW.2, Duri Selatan, Tambora, Jakarta Barat, DKI Jakarta 11270,
                    Indonesia
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-mcm-green shrink-0 mt-0.5" />
                <div className="ml-4">
                  <h3 className="font-semibold mb-1">Phone / WhatsApp</h3>
                  <p className="text-slate-600">+62 818 808 290 (Endy Butun)</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-mcm-green shrink-0 mt-0.5" />
                <div className="ml-4">
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-slate-600">gabybutun@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          {/* Contact Form Disabled. Google URL not configured */}
          {/* <div>
            <ContactForm />
          </div> */}
        </div>
      </div>
    </section>
  )
}
