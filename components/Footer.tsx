import Image from "next/image";
import Link from "next/link";

import { footerLinks } from "@constants";

const Footer = () => (
  <footer className='flex flex-col mt-5 border-t border-gray-100 text-black-100 dark:bg-gray-800'>
    <div className='flex flex-wrap justify-between gap-5 px-6 py-10 max-md:flex-col sm:px-16'>
      <div className='flex flex-col items-start justify-start gap-6'>
        <Image src='/logo.svg' alt='logo' width={118} height={18} className='object-contain' />
        <p className='text-base text-gray-300'>
          RavanCarhub 2023 <br />
          All Rights Reserved &copy;
        </p>
      </div>

      <div className="footer__links">
        {footerLinks.map((item) => (
          <div key={item.title} className="footer__link">
            <h3 className="font-bold text-gray-300">{item.title}</h3>
            <div className="flex flex-col gap-5">
              {item.links.map((link) => (
                <Link
                  key={link.title}
                  href={link.url}
                  className="text-gray-400"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className='flex flex-wrap items-center justify-between px-6 py-10 mt-10 text-gray-200 border-t border-gray-100 sm:px-16'>
      <p>@2023 RavanCarHub. All rights reserved</p>

      <div className="footer__copyrights-link">
        <Link href="/" className="text-gray-200">
          Privacy & Policy
        </Link>
        <Link href="/" className="text-gray-200">
          Terms & Condition
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
