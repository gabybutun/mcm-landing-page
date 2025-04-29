import Image from "next/image"

export function Products() {
  return (
    <section id="products" className="py-16 md:py-24">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Products</h2>
          <p className="text-lg text-slate-600">
            MCM's core production focuses on children's clothing — especially for girls — with an emphasis on comfort,
            style, and durability.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Girls' Dresses",
              image: "@/assets/images/blue_dress.png",
            },
            {
              title: "Children's Casual Wear",
              image: "@/assets/images/chiffon_dress_aloha.png",
            },
            {
              title: "Legging Sets",
              image: "@/assets/images/legging_set.jpg",
            },
          ].map((product, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg">
              <div className="aspect-square overflow-hidden">
                <Image
                  src={require(product.image)}
                  alt={product.title}
                  width={400}
                  height={400}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <h3 className="text-white text-xl font-bold p-6">{product.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
