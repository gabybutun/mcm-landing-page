import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export function CTA() {
  return (
    <section className="py-16 md:py-24 bg-mcm-green text-white">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Work Together</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Looking for a manufacturing partner you can rely on? MCM is here to turn your designs into reality — on time,
          on budget, and with exceptional quality.
        </p>
        <Button asChild size="lg" variant="secondary" className="rounded-full">
          <Link href="#contact">
            Contact Us Now
            <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  )
}
