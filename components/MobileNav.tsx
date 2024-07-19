
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { navLinks } from "@/constants"
import { Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"


const MobileNav = () => {
    return (
        <div className="sm:hidden">
            <Sheet>
                <SheetTrigger>
                    <Menu />
                </SheetTrigger>
                <SheetContent>
                    <div className="mt-12 h-screen flex gap-2 flex-col">
                        <div>
                            <Link href="/">
                                <Image
                                    src='/logo.png'
                                    alt='logo'
                                    width={118}
                                    height={18}
                                    className="object-contain"
                                />
                            </Link>
                        </div>
                        <div className="flex flex-col mt-12 gap-3">
                            {navLinks.map(link => (
                                <div key={link.label} className="text-lg hover:border-b-2 hover:border-blue-500 px-4 py-2">
                                    {link.label}
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col mt-24 gap-3 font-semibold">
                            <Button variant='outline'>Login</Button>
                            <Button className="bg-sky-500">Try For Free</Button>
                        </div>
                    </div>

                </SheetContent>
            </Sheet>
        </div>
    )
}

export default MobileNav