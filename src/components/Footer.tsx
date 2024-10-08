import Link from 'next/link';
import React from 'react'
import { BsDribbble, BsFacebook,BsWhatsapp, BsGithub, BsInstagram, BsTwitter} from "react-icons/bs";


const Footer = () => {
  return (
    <footer className='border border-t-8 border-teal-600'>
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
          <Link href="/" className="flex z-40 font-semibold">
            Harman Muasa <span className="text-green-600">Blog</span>
          </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div className="">
              <div className="flex flex-col">
              <Link href="https://myportfolioblogapp.onrender.com/about" target='_blank' rel='noopenernoreferrer'>
              <span className="">About</span>
              </Link>
              <Link href="https://myportfolioblogapp.onrender.com/" target='_blank' rel='noopenernoreferrer'>
              <span className="">portfolio</span>
              </Link>
              </div>
            </div>

            <div className="">
              <h3 className="">Follow us</h3>
              <div className="flex flex-col">
              <a href="https://github.com/Muasa-harman" target="_blank" rel="noopener noreferrer">
              <span className="">Github</span>
              </a>
              <a href="https://www.youtube.com/channel/UCRl2sxwaaadLzj26XNreurw" target="_blank" rel="noopener noreferrer">
              <span className="">YouTube</span>
              </a>
              <a href="https://www.linkedin.com/in/harman-muasa-fullstackdev/" target='_blank' rel='noopener noreferrer'>
              <span className="">LinkedIn</span>
              </a>
              </div>
            </div>

            <div className="">
              <h3 className="">Legal</h3>
              <div className="flex flex-col">
              <a hrefLang="https://www.linkedin.com/in/harman-muasa-fullstackdev/" target='_blank' rel='noopener noreferrer'>
              <span className="">Privacy</span>
              </a>
              <a hrefLang="/about" target='_blank' rel='noopener noreferrer'>
              <span className="">Terms &amp; Conditions</span>
              </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full sm:flex sm:items-center sm:justify-between bg-[rgb(16,23,42)] text-white">
          <div className=""> &copy; Harman Muasa Blog{new Date().getFullYear()} . All Right Reserved</div>
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            {<BsFacebook/>}
            {<BsInstagram/>}
            {<BsTwitter/>}
            {<BsGithub/> }
            {<BsDribbble/>}
            {<BsWhatsapp/>}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer