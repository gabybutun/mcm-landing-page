import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"

export function VisionMission() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Vision & Mission</h2>
          <p className="text-lg text-slate-600">Quality. Partnership. Innovation.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-t-4 border-t-mcm-green">
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-4">Vision</h3>
              <p className="text-slate-700">
                To lead Indonesia's fashion manufacturing industry by putting clients, colleagues, community, and
                climate at the forefront.
              </p>
            </CardContent>
          </Card>
          <Card className="border-t-4 border-t-mcm-green">
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-4">Mission</h3>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-mcm-green shrink-0 mt-0.5" />
                  <span>To consistently produce quality garments at competitive prices.</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-mcm-green shrink-0 mt-0.5" />
                  <span>To foster a culture of innovation and continuous improvement.</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-mcm-green shrink-0 mt-0.5" />
                  <span>To uphold ethical business practices that value sustainability and responsibility.</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
