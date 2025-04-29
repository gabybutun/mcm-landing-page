import { Card, CardContent } from "@/components/ui/card"
import { Scissors, Package, Shirt, Layers } from "lucide-react"

export function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-slate-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-slate-600">
            MCM offers a full-service garment manufacturing solution from sourcing to packaging, ensuring both high
            quality and efficiency.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Fabric Sourcing",
              description:
                "Helping clients select the right fabrics at competitive prices without compromising on quality.",
              icon: <Layers className="h-8 w-8 text-mcm-green" />,
            },
            {
              title: "Cutting Services",
              description:
                "Experienced staff with over 20 years in the industry handle precise cutting of fabrics, trims, laces, and more.",
              icon: <Scissors className="h-8 w-8 text-mcm-green" />,
            },
            {
              title: "Sewing & Trimming",
              description: "Maintaining the highest industry standards for every stitch and finish.",
              icon: <Shirt className="h-8 w-8 text-mcm-green" />,
            },
            {
              title: "Packing",
              description:
                "Offering diverse packaging solutions including flatpack, hanger, plastic, and boxed packing according to customer preferences.",
              icon: <Package className="h-8 w-8 text-mcm-green" />,
            },
          ].map((service, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 bg-mcm-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-slate-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
