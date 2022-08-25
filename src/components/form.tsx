import Input from './input';
import Tab from './tab';
import PasswordInput from './passwordInput';
import Button from './button';
import { SubmitHandler } from 'react-hook-form';
import React, { useContext, useEffect } from 'react';
import { StoreContext } from '../store';
import { UseFormReturn } from 'react-hook-form/dist/types';

export interface IFormInput {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  password: string;
  status: string;
}

const Form = ({register, reset, formState: {errors}, watch, handleSubmit, setValue}: UseFormReturn<IFormInput>) => {
  const { operation, actions, Id } = useContext(StoreContext);
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    if (Object.keys(errors).length) return;
    reset();
    const id = Date.now().toString(36) + Math.random().toString(36).slice(2);
    if (operation === 'create') {
      actions.add({
        isAdmin: data.status === 'Administrator',
        id,
        email: data.email,
        company: data.company,
        password: data.password,
        name: `${data.firstName} ${data.lastName}`,
      });
    } else {
      actions.update({
        isAdmin: data.status === 'Administrator',
        id: Id!,
        email: data.email,
        company: data.company,
        password: data.password,
        name: `${data.firstName} ${data.lastName}`,
      });
    }
  };
  const statusValue = watch('status');

  useEffect(() => {
    register('status');
  }, [register]);

  return <>
    <h2 className='font-black text-2xl mb-5'>{operation === 'create' ? 'Add Customer' : 'Update Customer'}</h2>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='grid grid-cols-2 gap-4 mt-4'>
        <Input captionType={errors['firstName']?.message ? 'error' : 'default'}
               caption={errors['firstName']?.message} {...register('firstName', { required: 'Required' })}
               title='First Name' />
        <Input captionType={errors['lastName']?.message ? 'error' : 'default'}
               caption={errors['lastName']?.message} {...register('lastName', { required: 'Required' })}
               title='Last Name' />
      </div>
      <div className='mt-4'>
        <Input captionType={errors['company']?.message ? 'error' : 'default'}
               caption={errors['company']?.message} {...register('company', { required: 'Required' })}
               title='Company' />
      </div>
      <div className='mt-4'>
        <div className='block text-sm text-gray-700 mb-1'>Status</div>
        <Tab activeKey={statusValue} list={['User', 'Administrator']}
             selectTab={(text) => setValue('status', text)} />
      </div>
      <div className='mt-4'>
        <Input captionType={errors['email']?.message ? 'error' : 'default'}
               caption={errors['email']?.message} {...register('email', {
          required: 'Required',
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: 'Invalid Email',
          },
        })} title='Email' />
      </div>
      <div className='mt-4'>
        <PasswordInput title='password' captionType={errors['password']?.type ? 'error' : 'default'}
                       caption='8+ characters' {...register('password', { required: 'Required', minLength: 8 })} />
      </div>
      <div className='mt-4'>
        <Button type='submit' text='Save' />
      </div>
    </form>
  </>;
};

export default Form;