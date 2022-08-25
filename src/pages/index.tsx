import type { NextPage } from 'next';
import Head from 'next/head';
import Table from '../components/table';
import { StoreProvider } from '../store';
import Form, { IFormInput } from '../components/form';
import { useForm } from 'react-hook-form';

const Home: NextPage = () => {
  const formProps = useForm<IFormInput>({ defaultValues: { status: 'User' }, mode: 'onSubmit' });

  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <StoreProvider>
        <div className='flex flex-row'>
          <div className='p-8 basis-1/4 min-w-[400px] border-r-2'>
            <Form {...formProps} />
          </div>
          <div className='p-8 w-full'>
            <h2 className='font-black text-2xl mb-5'>Customers</h2>
            <Table {...formProps} />
          </div>
        </div>
      </StoreProvider>
    </>
  );
};

export default Home;
