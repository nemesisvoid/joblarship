'use client';

import { academicDropdownLinks, scholarshipDropdownLinks } from '@/constants';
import { ChevronDownIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
const DesktopNav = () => {
  const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);

  const pathname = usePathname();

  const handleIsDropdownOpen1 = () => {
    setIsDropdownOpen1(prev => !prev);
  };

  const handleIsDropdownOpen2 = () => {
    setIsDropdownOpen2(prev => !prev);
  };

  return (
    <nav className='hidden lg:flex self-center'>
      <ul className='flex items-center gap-12'>
        <li className={`text-xl hover:text-orange-400 ${pathname === '/' ? 'text-orange-400' : ''}`}>
          <Link href='/'>Home</Link>
        </li>

        <li
          className={`text-xl relative flex items-center gap-1 cursor-pointer hover:text-orange-400  
          }  ${academicDropdownLinks.some(link => link.link === pathname) ? 'text-orange-400' : ''}`}
          onMouseEnter={handleIsDropdownOpen1}
          onMouseLeave={handleIsDropdownOpen1}>
          Jobs
          <ChevronDownIcon className={`${isDropdownOpen1 ? 'rotate-180 text-orange-400' : ''} duration-300`} />
          <div
            className={`${isDropdownOpen1 ? 'absolute' : 'hidden'} flex flex-col gap-2 w-[300%] top-7 -left-2 z-100 mb-10 bg-gray-100  rounded-xs`}>
            {academicDropdownLinks.map((item, i) => (
              <Link
                href={item.link}
                className={`text-lg hover:bg-orange-100 inline-block hover:text-primary-100 p-3 w-full text-black  ${
                  pathname === item.link ? 'text-orange-400' : ''
                }`}
                key={i}>
                {item.name}
              </Link>
            ))}
          </div>
        </li>

        <li
          className={`text-xl relative flex items-center gap-1 cursor-pointer ${
            scholarshipDropdownLinks.some(link => link.link === pathname) ? 'text-orange-400' : ''
          } `}
          onMouseEnter={handleIsDropdownOpen2}
          onMouseLeave={handleIsDropdownOpen2}>
          Scholarships
          <ChevronDownIcon className={`${isDropdownOpen2 ? 'rotate-180 text-orange-400' : ''} duration-300`} />
          <div
            className={`${isDropdownOpen2 ? 'absolute' : 'hidden'} flex flex-col gap-2 w-[150%] top-7 -left-2 z-100 mb-10  bg-gray-100  rounded-xs`}>
            {scholarshipDropdownLinks.map((item, i) => (
              <div key={i}>
                <Link
                  href={`${item.link}`}
                  className={`text-lg text-black hover:bg-orange-100 inline-block hover:text-primary-100 p-3 w-full  ${
                    pathname === item.link ? 'text-orange-400' : ''
                  }`}>
                  {item.name}
                </Link>
              </div>
            ))}
          </div>
        </li>

        <li className={`text-xl ${pathname.startsWith('/fellowships') ? 'text-orange-400' : ''}`}>
          <Link href='/fellowships'>Fellowships</Link>
        </li>

        <li className={`text-xl hover:text-orange-400 ${pathname === '/grants' ? 'text-orange-400' : ''}`}>
          <Link href='/grants'>Grants</Link>
        </li>

        <li className={`text-xl hover:text-orange-400 ${pathname === '/contact' ? 'text-orange-400' : ''}`}>
          <Link href='/contact'>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default DesktopNav;
