'use client';

import * as React from 'react';
import * as yup from 'yup';

import { CardContent, CardFooter } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/hooks/use-auth';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';
import { yupResolver } from '@hookform/resolvers/yup';

interface ProfileFormProps {
  //
}

const profileSchema = yup.object({
  fullname: yup.string().required(),
  phone: yup.string().required(),
});

const ProfileForm: React.FC<ProfileFormProps> = ({ ...props }) => {
  const { toast } = useToast();
  const { user, update } = useAuth();

  const form = useForm<yup.InferType<typeof profileSchema>>({
    resolver: yupResolver(profileSchema),
    defaultValues: {
      fullname: '',
      phone: '',
    },
  });

  React.useEffect(() => {
    if (user) {
      form.setValue('fullname', user.fullname);
      form.setValue('phone', user.phone);
    }
  }, [user, form]);

  const onSubmit = async (formData: yup.InferType<typeof profileSchema>) => {
    try {
      await update(formData);
      toast({
        title: 'Profile saved',
        description: 'Your profile has been saved successfully',
      });
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: 'Profile failed',
        description: error.message,
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <CardContent className='grid gap-4'>
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input placeholder='enter your email' defaultValue={user?.email} disabled readOnly />
            </FormControl>
            <FormMessage />
          </FormItem>

          <FormField
            control={form.control}
            name='fullname'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder='enter your full name' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='phone'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input placeholder='enter your phone' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </CardContent>

        <CardFooter className='border-t px-6 py-4'>
          <Button type='submit'>Save</Button>
        </CardFooter>
      </form>
    </Form>
  );
};

export default ProfileForm;
