import { LoaderIcon } from 'lucide-react';

const Loader = () => {
  return (
    <div className='h-40 flex items-center justify-center my-20'>
      <LoaderIcon
        className='animate-spin text-orange-500'
        size={44}
      />
    </div>
  );
};

export default Loader;
