'use client';

import Link from 'next/link';
import Image from 'next/image';

import { urlFor } from '@/sanity/lib/sanity-image-url';
import { Opportunities } from '@/sanity/types';

import { BsFacebook, BsInstagram, BsLinkedin, BsTwitterX } from 'react-icons/bs';
import { FaCalendarAlt } from 'react-icons/fa';
import PortableTextRenderer from '@/components/misc/portable-text-renderer';
import { Button } from '@/components/ui/button';

const Details = ({ data }: { data: Opportunities }) => {
  const currentUrl = encodeURIComponent(window.location.href);
  console.log(currentUrl);

  const text = encodeURIComponent('Check out this opportunity!');

  const socialShareLinks = {
    twitter: `https://twitter.com/intent/tweet?url=${currentUrl}&text=${text}`,
    instagram: `https://www.instagram.com/joblarship?utm_source=qr&igsh=aXpjdndsazdzazZx`,
    whatsapp: `https://wa.me/?text=${currentUrl}`,
    linkedIn: `https://www.linkedin.com/shareArticle?mini=true&url=${currentUrl}&title=${text}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`,
  };

  return (
    <>
      <div className='mb-8 md:mb-10'>
        <div className='relative aspect-square h-80 md:h-120 w-full mb-6'>
          <Image
            src={data.image ? urlFor(data.image).width(1500).height(1500).url() : ''}
            alt=''
            fill
            priority={true}
            quality={100}
            className='rounded-md object-cover'
          />
        </div>
        <h1 className='text-3xl md:text-4xl text-black text-left mb-2'>{data.title}</h1>
        <p className='text-gray-500 text-xl mb-5'>{data?.location}</p>

        {data.deadline && (
          <p className='bg-red-200 text-red-500 w-fit flex items-center gap-3 px-3 py-1 rounded-xs'>
            <FaCalendarAlt size={20} />
            Deadline: {new Date(data.deadline).toDateString()}
          </p>
        )}
      </div>

      <div className='flex flex-col lg:flex-row justify-between gap-20'>
        <div className='w-full md:w-[85%]'>
          <PortableTextRenderer content={data.description} />
        </div>

        {/* aside */}
        <aside className='w-full md:w-[55%] lg:w-[50%] bg-white self-start shadow-lg py-8 px-10 rounded-xl'>
          <div className='flex flex-col gap-10'>
            {data.skills && (
              <div>
                <p className='font-medium text-lg mb-3'>Skills Required</p>
                <ol className='flex flex-col gap-2 list-disc'>
                  {data.skills.map((item, i) => (
                    <li
                      className='text-gray-700'
                      key={i}>
                      {item}
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {data.experience && (
              <div>
                <p className='text-lg font-medium mb-3'>Experience</p>
                <p>{data.experience}</p>
              </div>
            )}

            {data.jobType && (
              <div>
                <p className='text-lg font-medium mb-3'>Job Type</p>
                <p>{data.jobType}</p>
              </div>
            )}

            {data.salary && (
              <div>
                <p className='font-medium text-lg mb-3'>Salary</p>
                <p className='text-gray-700 list-disc'>{data.salary}</p>
              </div>
            )}

            <div>
              <p className='text-xl font-medium mb-5'>Share</p>
              <div className='flex items-center gap-4'>
                <div>
                  <Link
                    href={socialShareLinks.instagram}
                    target='_blank'
                    rel='noopener noreferrer'>
                    <BsInstagram size={23} />
                  </Link>
                </div>
                <div>
                  <Link
                    href={socialShareLinks.twitter}
                    target='_blank'
                    rel='noopener noreferrer'>
                    <BsTwitterX size={23} />
                  </Link>
                </div>
                <div>
                  <Link
                    href={socialShareLinks.facebook}
                    target='_blank'
                    rel='noopener noreferrer'>
                    <BsFacebook size={23} />
                  </Link>
                </div>
                <div>
                  <Link
                    href={socialShareLinks.linkedIn}
                    target='_blank'
                    rel='noopener noreferrer'>
                    <BsLinkedin size={23} />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className='mt-14'>
            <Button
              className='text-lg py-6 w-1/2 cursor-pointer'
              asChild>
              <Link
                href={data.applicationLink!}
                target='_blank'
                rel='noopener noreferrer'>
                Apply
              </Link>
            </Button>
          </div>
        </aside>
      </div>
    </>
  );
};

export default Details;
