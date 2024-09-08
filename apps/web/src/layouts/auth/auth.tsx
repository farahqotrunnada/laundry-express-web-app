import Background from '@/assets/background.jpg';
import Image from 'next/image';
import React from 'react';

interface AuthProps extends React.PropsWithChildren {
  //
}

const AuthLayout: React.FC<AuthProps> = ({ children }) => {
  return (
    <div className='w-full lg:grid lg:grid-cols-2 h-screen'>
      <div className='flex items-center justify-center py-12'>
        <div className='mx-auto w-96'>{children}</div>
      </div>
      <div className='hidden bg-muted lg:block overflow-hidden'>
        <Image
          src={Background}
          alt='Image'
          width='1920'
          height='1080'
          placeholder='blur'
          className='h-full w-full object-cover dark:brightness-[0.2] dark:grayscale'
        />
      </div>
    </div>
  );
};

export default AuthLayout;
