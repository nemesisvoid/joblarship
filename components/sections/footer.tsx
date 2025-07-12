import Link from 'next/link';
import { BsFacebook, BsInstagram } from 'react-icons/bs';
import { FaXTwitter } from 'react-icons/fa6';
// import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className='bg-stone-900 py-10'>
      <div className='container flex flex-col-reverse md:flex-row md:items-center max-md:gap-6 justify-between'>
        <p className='text-white text-lg'>&copy; Joblarship {new Date().getFullYear()}. All rights reserved.</p>
        <div className='flex items-center gap-5'>
          <div>
            <Link
              href={`https://www.twitter.com/@joblarship49047`}
              target='_blank'
              rel='noopener noreferrer'>
              <FaXTwitter
                size={24}
                color='white'
              />
            </Link>
          </div>
          <div>
            <Link
              href={`https://www.facebook.com/share/15oZyTQtxU/`}
              target='_blank'
              rel='noopener noreferrer'>
              <BsFacebook
                size={24}
                color='white'
              />
            </Link>
          </div>

          <div>
            <Link
              href={`https://www.instagram.com/joblarship?utm_source=qr&igsh=aXpjdndsazdzazZx`}
              target='_blank'
              rel='noopener noreferrer '>
              <BsInstagram
                size={24}
                color='white'
              />
            </Link>
          </div>

          <div></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
