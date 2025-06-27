import { BsFacebook, BsInstagram, BsLinkedin, BsWhatsapp } from 'react-icons/bs';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className='bg-stone-900 py-10 mt-20'>
      <div className='container flex flex-col md:flex-row items-center justify-between'>
        <p className='text-white text-lg'>&copy; Joblarship {new Date().getFullYear()}. All rights reserved.</p>
        <div className='flex items-center gap-4'>
          <div>
            <BsWhatsapp
              size={22}
              color='white'
            />
          </div>
          <div>
            <FaXTwitter
              size={22}
              color='white'
            />
          </div>
          <div>
            <BsLinkedin
              size={22}
              color='white'
            />
          </div>
          <div>
            <BsFacebook
              size={22}
              color='white'
            />
          </div>
          <div>
            <BsInstagram
              size={22}
              color='white'
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
