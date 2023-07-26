'use client';

import TypewriterComponent from 'typewriter-effect';
import Link from 'next/link';
import { useAuth } from '@clerk/nextjs';

import { Button } from '@/components/ui/button';

const typeWriterOptions = {
  strings: [
    'Intelligent conversations',
    'Stunning Imagery Generation',
    'Creative Content Writing',
    'Efficient Email Composing',
  ],
  autoStart: true,
  loop: true,
};

export const LandingHero = () => {
  const { isSignedIn } = useAuth();

  return (
    <div className='text-white font-bold py-36 text-center space-y-5'>
      <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold'>
        Your Ultimate AI Partner for
      </h1>
      <div className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold'>
        <h2 className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-200'>
          <TypewriterComponent options={typeWriterOptions} />
        </h2>
      </div>
      <h3 className='text-sm md:text-xl font-light text-zinc-400'>
        Create content using AI 10x faster
      </h3>
      <div>
        <Link href={isSignedIn ? '/dashboard' : '/login'}>
          <Button
            variant='outline'
            className='md:text-lg p-4 md:p-6 rounded-full font-semibold text-black'
          >
            Start Generating for Free
          </Button>
        </Link>
      </div>
    </div>
  );
};
