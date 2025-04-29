import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src={require('@/assets/images/logo.png')}
            alt="MCM Logo"
            width={50}
            height={50}
            className="h-10 w-auto"
          />
          <span className="text-xl font-bold text-mcm-green">MCM Export</span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#about" className="text-sm font-medium hover:text-mcm-green">
            About
          </Link>
          <Link href="#services" className="text-sm font-medium hover:text-mcm-green">
            Services
          </Link>
          <Link href="#products" className="text-sm font-medium hover:text-mcm-green">
            Products
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:text-mcm-green">
            Contact
          </Link>
        </nav>
        <Button asChild className="hidden md:inline-flex bg-mcm-green hover:bg-mcm-darkgreen">
          <Link href="#contact">Get in Touch</Link>
        </Button>
        <Button variant="ghost" size="icon" className="md:hidden">
          <span className="sr-only">Toggle menu</span>
          <Menu className="h-6 w-6" />
        </Button>
      </div>
    </header>
  )
}
