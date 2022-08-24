import type { NextPage } from 'next';
import Head from 'next/head';
import Avatar from '../components/avatar';
import Icon from '../components/icon';
import Input from '../components/input';
import Button from '../components/button';
import Tab from '../components/tab';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <h2 className="font-black text-2xl mb-5">Add Customer</h2>
      <Avatar size="24px" value="Jane Cooper" />
      <Icon type="visible" />
      <Input captionType="error" caption="Oh, snapp! Some error message." rightSlot={<Icon type="visible" />} />
      <Button text="Label" />
      <Tab activeKey="User" list={['User', '2']} selectTab={() => {}} />
    </>
  );
};

export default Home;
