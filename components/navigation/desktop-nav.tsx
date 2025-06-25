'use client';

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
    <nav className='hidden md:flex self-center'>
      <ul className='flex items-center gap-12'>
        <li className={`text-xl hover:text-orange-400 ${pathname === '/' ? 'text-orange-400' : ''}`}>
          <Link href='/'>Home</Link>
        </li>

        <li
          className={`text-xl relative flex items-center gap-1 cursor-pointer hover:text-orange-400
          }`}
          onMouseEnter={handleIsDropdownOpen1}
          onMouseLeave={handleIsDropdownOpen1}>
          Careers
          <ChevronDownIcon className={`${isDropdownOpen1 ? 'rotate-180 text-orange-400' : ''} duration-300`} />
          <div
            className={`${isDropdownOpen1 ? 'absolute' : 'hidden'} flex flex-col gap-3 w-[260%] top-7 -left-2 z-100 mb-10 bg-gray-100  rounded-xs`}>
            <div>
              <Link
                href='/careers/academics'
                className={`hover:bg-orange-200 inline-block hover:text-primary-100 p-3 w-full text-black  ${
                  pathname.includes('academics') ? 'text-orange-400' : ''
                }`}>
                Academic
              </Link>
            </div>

            <div>
              <Link
                href='/careers/industry'
                className='text-black hover:bg-orange-200 inline-block hover:text-primary-100 p-3 w-full'>
                Industry
              </Link>
            </div>

            <div>
              <Link
                href='/careers/others'
                className='text-black hover:bg-orange-200 inline-block hover:text-primary-100 p-3  w-full'>
                Others
              </Link>
            </div>
          </div>
        </li>

        <li
          className={`text-xl relative flex items-center gap-1 cursor-pointer ${pathname.startsWith('/scholarships') ? 'text-orange-400' : ''}`}
          onMouseEnter={handleIsDropdownOpen2}
          onMouseLeave={handleIsDropdownOpen2}>
          Scholarships
          <ChevronDownIcon className={`${isDropdownOpen2 ? 'rotate-180 text-orange-400' : ''} duration-300`} />
          <div
            className={`${isDropdownOpen2 ? 'absolute' : 'hidden'} flex flex-col gap-3 w-[200%] top-7 -left-2 z-100 mb-10 bg-gray-100  rounded-xs`}>
            <div>
              <Link
                href='/scholarships/undergraduates'
                className='hover:bg-orange-200 inline-block hover:text-primary-100 p-3 w-full'>
                Undergraduate
              </Link>
            </div>

            <div>
              <Link
                href='/scholarships/masters'
                className='hover:bg-orange-200 inline-block hover:text-primary-100 p-3 w-full'>
                Masters
              </Link>
            </div>

            <div>
              <Link
                href='/scholarships/phd'
                className='hover:bg-orange-200 inline-block hover:text-primary-100 p-3  w-full'>
                PhD
              </Link>
            </div>
          </div>
        </li>

        <li className={`text-xl ${pathname.startsWith('/fellowships') ? 'text-orange-400' : ''}`}>
          <Link href='/fellowships'>Fellowship</Link>
        </li>

        <li className={`text-xl hover:text-orange-400 ${pathname === '/grants' ? 'text-orange-400' : ''}`}>
          <Link href='/grants'>Grants</Link>
        </li>
      </ul>
    </nav>
  );
};

export default DesktopNav;
