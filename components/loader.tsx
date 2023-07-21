import Image from 'next/image';

export const Loader = () => {
  return (
    <div className='flex flex-col items-center justify-center h-full gap-y-4'>
      <div className='w-10 h-10 relative animate-spin'>
        <Image src='/illuminate-black.png' alt='logo' fill />
      </div>
      <p className=''>Generating...</p>
    </div>
  );
};
