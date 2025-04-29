import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative">
      <div className="absolute inset-0 z-0">
        <Image
          src={require('/images/factory.jpeg')}
          alt="Children's clothing manufacturing"
          fill
          className="object-cover brightness-[0.7]"
          priority
        />
      </div>
      <div className="container relative z-10 py-24 md:py-32 text-white">
        <div className="max-w-2xl space-y-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Your Trusted Partner in Children's Apparel</h1>
          <p className="text-lg md:text-xl opacity-90">
            Crafting quality garments with care, precision, and creativity since 1997. From Jakarta to the world — MCM
            is your reliable choice for stylish and comfortable children's fashion.
          </p>
          <div className="pt-4">
            <Button asChild size="lg" className="rounded-full bg-mcm-green hover:bg-mcm-darkgreen">
              <Link href="#contact">
                Get in Touch
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
