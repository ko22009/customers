import type { NextPage } from 'next';
import Head from 'next/head';
import Icon from '../components/icon';
import Input from '../components/input';
import Button from '../components/button';
import Tab from '../components/tab';
import Table from '../components/table';
import { StoreProvider } from '../store';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <StoreProvider>
        <div className="flex flex-row">
          <div className="p-8 basis-1/4 min-w-[400px] border-r-2">
            <h2 className="font-black text-2xl mb-5">Add Customer</h2>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <Input title="First Name" />
              <Input title="Last Name" />
            </div>
            <div className="mt-4">
              <Input title="Company" />
            </div>
            <div className="mt-4">
              <div className='block text-sm text-gray-700 mb-1'>Status</div>
              <Tab activeKey="User" list={['User', 'Administrator']} selectTab={() => {}} />
            </div>
            <div className="mt-4">
              <Input title="Email" />
            </div>
            <div className="mt-4">
              <Input title="Password" rightSlot={<Icon type="visible" />} caption="8+ characters" />
            </div>
            <div className="mt-4">
              <Button text="Save" />
            </div>
          </div>
          <div className="p-8 w-full">
            <h2 className="font-black text-2xl mb-5">Customers</h2>
            <Table />
          </div>
        </div>
      </StoreProvider>
    </>
  );
};

export default Home;
