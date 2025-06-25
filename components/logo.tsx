import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link
      href='/'
      className='relative'>
      <div className='absolute left-1/2 top-1/2  -translate-y-1/2 w-50'>
        <Image
          src={'/logo.png'}
          alt='joblarhsip logo'
          width={110}
          height={50}
        />
      </div>
    </Link>
  );
};

export default Logo;
