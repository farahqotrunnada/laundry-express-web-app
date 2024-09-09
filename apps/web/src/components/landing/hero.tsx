'use client';

import * as React from 'react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MoveRight } from 'lucide-react';

interface HeroProps {
  //
}

export const Hero: React.FC<HeroProps> = ({ ...props }) => {
  return (
    <div className='grid grid-cols-1 gap-8 items-center lg:grid-cols-2'>
      <div className='flex gap-4 flex-col'>
        <div>
          <Badge variant='outline'>We&apos;re live!</Badge>
        </div>
        <div className='flex gap-4 flex-col'>
          <h1 className='text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-bold'>
            This is the start of something!
          </h1>
          <p className='leading-relaxed tracking-tight text-muted-foreground max-w-md text-left'>
            Managing a small business today is already tough. Avoid further complications by ditching outdated, tedious
            trade methods. Our goal is to streamline SMB trade, making it easier and faster than ever.
          </p>
        </div>

        <div className='flex flex-row gap-4'>
          <Button className='gap-4' variant='outline'>
            Jump on a call <MoveRight className='w-5 h-5' />
          </Button>
          <Button className='gap-4'>
            Sign up here <MoveRight className='w-4 h-4' />
          </Button>
        </div>
      </div>

      <div className='bg-muted rounded-md aspect-square'></div>
    </div>
  );
};
