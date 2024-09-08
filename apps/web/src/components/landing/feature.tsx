import { PersonStanding, Timer, Zap, ZoomIn } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { FEATURES_LIST } from '@/lib/constant';

const Feature = () => {
  return (
    <div>
      <div className='flex flex-col space-y-2 items-start'>
        <Badge variant='outline'>Features</Badge>
        <h2 className='font-bold text-4xl'>Our Core Features</h2>
        <p className='leading-relaxed tracking-tight text-muted-foreground text-left'>
          Managing a small business today is already tough. Avoid further complications by ditching outdated.
        </p>
      </div>

      <div className='mx-auto mt-14 grid gap-8 md:grid-cols-3'>
        {FEATURES_LIST.map((feature, idx) => {
          const Icon = feature.icon;

          return (
            <div className='flex gap-6 rounded-lg md:block p-6 bg-muted' key={idx}>
              <span className='mb-2 flex text-white size-8 shrink-0 items-center justify-center rounded-full bg-primary'>
                <Icon className='size-5' />
              </span>
              <div>
                <h3 className='font-medium md:mb-2 text-lg'>{feature.title}</h3>
                <p className='text-sm text-muted-foreground'>{feature.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Feature;
