import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { VisionMission } from "@/components/vision-mission"
import { Services } from "@/components/services"
import { Products } from "@/components/products"
import { CTA } from "@/components/cta"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <VisionMission />
        <Services />
        <Products />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
