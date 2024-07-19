'use client'
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import axios from 'axios';
import Image from 'next/image';
import heroImg from '@/public/2784130.jpg'

const schema = z.object({
  referrerName: z.string().nonempty("Referrer's name is required"),
  referrerEmail: z.string().email("Invalid email address"),
  refereeName: z.string().nonempty("Referee's name is required"),
  refereeEmail: z.string().email("Invalid email address"),
  course: z.string().nonempty("Course is required"),
});

type FormData = z.infer<typeof schema>;

const Refer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const response = await axios.post('http://localhost:5000/api/referral', data);
      console.log('Response:', response.data);
      setSuccess(true);
      // Handle success, e.g., show a success message, close the modal, etc.
      setIsModalOpen(false);
    } catch (error) {
      console.error('Error submitting referral:', error);
      // Handle error, e.g., show an error message
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='flex flex-col justify-center items-center max-container'>
      <section className="border rounded-2xl shadow-xl p-12 w-full flex flex-col-reverse sm:flex-row">
        <div className='flex my-auto gap-4 flex-col m-2'>
          <div className='my-4'>
            <h1 className=' text-3xl sm:text-6xl font-bold text-slate-700'>Refer & Earn </h1>
            <p className='mt-3'>Refer courses to your friends and <br /> earn direct cashback upto <span className='text-sky-500 font-semibold'>1200 </span>rupees!</p>
          </div>
          {!success && (
            <Button className='bg-sky-400 hover:bg-sky-500' onClick={() => setIsModalOpen(true)}>Refer Now</Button>
          )}
        </div>
        <div className='w-full sm:w-3/5 rotate-2 -mr-10'>
          <Image src={heroImg} alt='HeroImg' className='object-cover' />
        </div>
      </section>
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className='bg-white rounded-xl w-5/6'>
          <DialogTitle className='text-2xl font-bold'>Refer a Course</DialogTitle>
          <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-2'>
            <div className='flex flex-col'>
              <label className='font-normal'>Your Name</label>
              <input {...register('referrerName')} className='border p-2 rounded-lg' placeholder='Enter Referrer Name' />
              {errors.referrerName && <p className='text-rose-500 font-extralight'>*{errors.referrerName.message}</p>}
            </div>
            <div className='flex flex-col'>
              <label className='font-normal'>Your Email</label>
              <input {...register('referrerEmail')} className='border p-2 rounded-lg' placeholder='Enter Referrer Email' />
              {errors.referrerEmail && <p className='text-rose-500 font-extralight'>*{errors.referrerEmail.message}</p>}
            </div>
            <div className='flex flex-col'>
              <label className='font-normal'>Referee's Name</label>
              <input {...register('refereeName')} className='border p-2 rounded-lg' placeholder='Enter Referee Name' />
              {errors.refereeName && <p className='text-rose-500 font-extralight'>*{errors.refereeName.message}</p>}
            </div>
            <div className='flex flex-col'>
              <label className='font-normal'>Referee's Email</label>
              <input {...register('refereeEmail')} className='border p-2 rounded-lg' placeholder='Enter Referee Email' />
              {errors.refereeEmail && <p className='text-rose-500 font-extralight'>*{errors.refereeEmail.message}</p>}
            </div>
            <div className='flex flex-col'>
              <label className='font-normal'>Course</label>
              <input {...register('course')} className='border p-2 rounded-lg' placeholder='Enter course Name' />
              {errors.course && <p className='text-rose-500 font-extralight'>*{errors.course.message}</p>}
            </div>
            <Button className='bg-sky-400 hover:bg-sky-500 mt-3' type="submit">Submit</Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Refer;
