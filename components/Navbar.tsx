import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"
import { navLinks } from "@/constants"
import MobileNav from "./MobileNav"

const Navbar = () => {
  return (
    <header className="max-container shadow-xl mb-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <div className="flex gap-6">
          <Link href="/" className=" flex justify-center items-center">
            <Image
              src='/logo.png'
              alt='logo'
              width={118}
              height={18}
              className="object-contain"
            />
          </Link>
        </div>
        <div className="lg:flex gap-3 hidden">
          {navLinks.map(link => (
            <div key={link.label} className="hover:border-b-2 px-2 hover:border-blue-300">{link.label}</div>
          ))}
        </div>
        <div className="sm:flex hidden gap-3 font-semibold">
          <Button variant='outline'>Login</Button>
          <Button className="bg-sky-500">Try For Free</Button>
        </div>
        <MobileNav />
      </nav>

    </header>
  )
}

export default Navbar