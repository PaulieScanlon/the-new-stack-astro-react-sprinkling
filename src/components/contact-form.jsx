import { useForm } from 'react-hook-form';

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    return null;
  };

  return (
    <div className='max-w-xl'>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
        <div className='flex gap-4'>
          <div className='grow'>
            <input
              placeholder='First name'
              {...register('firstName', { required: true })}
              className='border border-zinc-200 rounded p-2 w-full'
            />
            <span className='block py-1 h-6 text-xs text-red-500'>{errors.firstName && 'This field is required'}</span>
          </div>

          <div className='grow'>
            <input
              placeholder='Last name'
              {...register('lastName', { required: true })}
              className='border border-zinc-200 rounded p-2 w-full'
            />
            <span className='block py-1 h-6 text-xs text-red-500'>{errors.lastName && 'This field is required'}</span>
          </div>
        </div>
        <div className='flex gap-4'>
          <div className='grow'>
            <input
              placeholder='you@email.com'
              {...register('email', { required: true })}
              className='border border-zinc-200 rounded p-2 w-full'
            />
            <span className='block py-1 h-6 text-xs text-red-500'>{errors.email && 'This field is required'}</span>
          </div>
        </div>
        <div className='flex justify-end'>
          <button type='submit' className='px-4 py-2 text-white font-medium rounded bg-blue-500'>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
