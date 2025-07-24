'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { X, Menu, ChevronDownIcon } from 'lucide-react';
import Logo from '../logo';
import { academicDropdownLinks, scholarshipDropdownLinks } from '@/constants';
import { usePathname } from 'next/navigation';

const MobileNav = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);

  const handleNavClose = () => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen1(false);
    setIsDropdownOpen2(false);
  };

  const handleIsDropdownOpen1 = () => {
    setIsDropdownOpen1(prev => !prev);
    setIsDropdownOpen2(false); // Close the second dropdown when the first is opened
  };

  const handleIsDropdownOpen2 = () => {
    setIsDropdownOpen2(prev => !prev);
    setIsDropdownOpen1(false); // Close the first dropdown when the second is opened
  };

  const handleMobileNavOpen = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  return (
    <>
      <button
        className='lg:hidden text-lg z-30'
        onClick={handleMobileNavOpen}>
        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          transition={{ type: 'keyframes', duration: 0.3 }}
          className='fixed top-0 left-0 w-full h-full bg-white shadow-lg z-20 md:hidden border-none'>
          <div className=''>
            <div className='mb-10 translate-y-4 translate-x-4 '>
              <Logo />
            </div>
            <ul className='flex flex-col grow gap-4 py-24 mt-10'>
              <li
                className='text-xl px-6 py-3'
                onClick={handleNavClose}>
                <Link
                  href='/'
                  className={`${pathname === '/' ? 'text-primary-100' : ''}`}>
                  Home
                </Link>
              </li>

              {/* Mobile dropdown 1 */}

              <li className={`'flex flex-col gap-2 py-3 ${isDropdownOpen1 ? 'bg-gray-100' : ''}`}>
                <div
                  className='text-xl relative flex items-center justify-between cursor-pointer px-6'
                  onClick={handleIsDropdownOpen1}>
                  Jobs
                  <ChevronDownIcon className={`${isDropdownOpen1 ? 'rotate-180 text-orange-400' : ''} duration-300`} />
                </div>

                <div className={`${isDropdownOpen1 ? 'block' : 'hidden'} flex flex-col gap-3 w-full mb-10 bg-gray-100 px-7 rounded-xs`}>
                  <div className='mt-4'>
                    {academicDropdownLinks.map((item, i) => (
                      <Link
                        href={item.link}
                        className={`text-lg  text-black hover:bg-orange-200 inline-block hover:text-primary-100 p-2 w-full  ${
                          pathname === item.link ? 'text-orange-400' : ''
                        }`}
                        key={i}
                        onClick={handleNavClose}>
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </li>

              {/* Mobile dropdown 2 */}

              <li
                className={`'flex flex-col gap-2 py-3 ${isDropdownOpen2 ? 'bg-gray-100' : ''}  ${
                  scholarshipDropdownLinks.some(link => link.link === pathname) ? 'text-orange-400' : ''
                } `}>
                <div
                  className='text-xl relative flex items-center justify-between cursor-pointer px-6'
                  onClick={handleIsDropdownOpen2}>
                  Scholarships
                  <ChevronDownIcon className={`${isDropdownOpen2 ? 'rotate-180 text-orange-400' : ''} duration-300`} />
                </div>

                <div className={`${isDropdownOpen2 ? 'block' : 'hidden'} flex flex-col gap-3 w-full mb-10 bg-gray-100 px-7 rounded-xs`}>
                  <div className='mt-4'>
                    {scholarshipDropdownLinks.map((item, i) => (
                      <Link
                        href={item.link}
                        className={`text-lg  text-black hover:bg-orange-200 inline-block hover:text-primary-100 p-2 w-full  ${
                          pathname === item.link ? 'text-orange-400' : ''
                        }`}
                        key={i}
                        onClick={handleNavClose}>
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </li>

              <li
                className='text-xl px-6 py-3'
                onClick={handleNavClose}>
                <Link
                  href='/fellowships'
                  className={`${pathname === '/fellowships' ? 'text-primary-100' : ''}`}>
                  Fellowships
                </Link>
              </li>

              <li
                className='text-xl px-6 py-3'
                onClick={handleNavClose}>
                <Link
                  href='/grants'
                  className={`${pathname === '/grants' ? 'text-primary-100' : ''}`}>
                  Grants
                </Link>
              </li>

              <li
                className='text-xl px-6 py-3'
                onClick={handleNavClose}>
                <Link
                  href='/contact'
                  className={`${pathname === '/contact' ? 'text-primary-100' : ''}`}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default MobileNav;
