'use client';
import { Opportunities } from '@/sanity/types';
import Link from 'next/link';
import React from 'react';
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitterX } from 'react-icons/bs';

const Details = ({ data }: { data: Opportunities }) => {
  const currentUrl = encodeURIComponent(window.location.href);

  const text = encodeURIComponent('Check out this opportunity!');

  const socialShareLinks = {
    twitter: `https://twitter.com/intent/tweet?url=${currentUrl}&text=${text}`,
    instagram: `https://www.instagram.com/nemesisvoid`,
    whatsapp: `https://wa.me/?text=${currentUrl}`,
    linkedIn: `https://www.linkedin.com/shareArticle?mini=true&url=${currentUrl}&title=${text}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`,
  };

  const twitterShareUrl = `https://twitter.com/intent/tweet?url=${currentUrl}&text=${text}`;
  return (
    <>
      <div className='mb-8 md:mb-10'>
        <h1 className='text-3xl md:text-5xl text-black text-left mb-2'>{data.title}</h1>
        <p className='text-gray-500 text-2xl mb-5'>{data?.location}</p>

        {data.deadline && <p className='bg-red-200 text-red-500 w-fit px-3 py-1 rounded-xs'>Deadline: {new Date(data.deadline).toDateString()}</p>}
      </div>

      <div className='flex flex-col lg:flex-row justify-between gap-20'>
        <div className=''>
          <h3 className='capitalize text-2xl font-medium mb-4'>{data.type} Details and Requirements</h3>

          <p className='text-lg leading-loose lg:text-justify'>{data.description}</p>

          {data.eligibility && (
            <ul>
              {data.eligibility.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          )}

          {data.requirement && (
            <>
              <p>Job Requirements</p>
              <ul>
                {data.field && (
                  <ul>
                    {data.field.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </ul>
            </>
          )}
        </div>

        {/* aside */}
        <aside className='w-full md:w-[55%] lg:w-[75%] bg-white shadow-lg py-8 px-10 rounded-xl'>
          <div className='flex flex-col gap-10'>
            {data.field && (
              <div>
                <p className='font-medium text-lg mb-3'>Fields</p>
                <ol className='flex flex-col gap-2 list-disc'>
                  {data.field.map((item, i) => (
                    <li
                      className='text-gray-700'
                      key={i}>
                      {item}
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {data.qualification && (
              <div>
                <p className='font-medium text-lg mb-3'>Minimum Qualifications</p>
                <ol className='flex flex-col gap-2 list-disc'>
                  {data.qualification.map((item, i) => (
                    <li
                      className='text-gray-700'
                      key={i}>
                      {item}
                    </li>
                  ))}
                </ol>
              </div>
            )}

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

            {data.salary && (
              <div>
                <p className='font-medium text-lg mb-3'>Skills Required</p>
                <p className='text-gray-700 list-disc'>{data.salary}</p>
              </div>
            )}

            <div>
              <p className='text-lg font-medium mb-3'>Share</p>
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
        </aside>
      </div>
    </>
  );
};

export default Details;
