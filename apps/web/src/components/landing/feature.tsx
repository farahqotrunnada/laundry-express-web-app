import { PersonStanding, Timer, Zap, ZoomIn } from 'lucide-react';

import { Badge } from '@/components/ui/badge';

const features = [
  {
    title: 'Performance',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, accusantium quam. Temporibus quae quos deserunt!',
    icon: <Timer className='size-6' />,
  },
  {
    title: 'Innovation',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, accusantium quam. Temporibus quae quos deserunt!',
    icon: <Zap className='size-6' />,
  },
  {
    title: 'Quality',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, accusantium quam. Temporibus quae quos deserunt!',
    icon: <ZoomIn className='size-6' />,
  },
  {
    title: 'Accessibility',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, accusantium quam. Temporibus quae quos deserunt!',
    icon: <PersonStanding className='size-6' />,
  },
];

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

      <div className='mx-auto mt-14 grid gap-8 md:grid-cols-2 md:gap-y-6 lg:mt-20'>
        {features.map((feature, idx) => (
          <div className='flex gap-6 rounded-lg md:block p-6 bg-muted' key={idx}>
            <span className='mb-8 flex text-white size-10 shrink-0 items-center justify-center rounded-full md:size-12 bg-primary'>
              {feature.icon}
            </span>
            <div>
              <h3 className='font-medium md:mb-2 text-lg'>{feature.title}</h3>
              <p className='text-sm text-muted-foreground'>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
