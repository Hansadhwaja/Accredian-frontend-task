
import { footerLinks } from "@/constants"

import Image from "next/image"
import Link from "next/link"
import { SocialIcon } from 'react-social-icons'

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100 max-container">
      <hr />
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image
            src='/logo.png'
            alt='logo'
            width={118} height={18}
            className="object-contain"
          />
        </div>
        <div className="flex gap-8">
          {footerLinks.map((link) => (
            <div key={link.title} className="flex flex-col gap-3">
              <h3 className="font-bold">{link.title}</h3>
              {link.links.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className="text-gray-500">
                  {item.title}
                </Link>
              ))}
            </div>
          ))}

        </div>
      </div>
      <div className="flex justify-between items-center flex-wrap mt-19 border-t border-gray-100 sm:px-16 px-6 py-10">
        <div className="mt-5">
          <h1 className="font-semibold text-xl">Follow Us On</h1>
          <div className="mt-3">
            <SocialIcon network='linkedin' />
            <SocialIcon network="twitter" />
            <SocialIcon network="youtube" />
            <SocialIcon network="instagram" />
            <SocialIcon network="facebook" />
          </div>
        </div>
        <p className="mt-8"> © 2024 Accredian Pvt Ltd. All Rights Reserved </p>
      </div>


    </footer>
  )
}

export default Footer