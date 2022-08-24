import Avatar from './avatar';
import { useContext } from 'react';
import { StoreContext } from '../store';
import Activator from './activator';
import Icon from './icon'

const Table = () => {
  const { data, actions } = useContext(StoreContext);
  return <table
    className='border-collapse w-full text-sm'>
    <thead>
    <tr>
      <th className='w-1/2 font-normal p-2 text-slate-500 text-left'>Name</th>
      <th className='w-1/2 font-normal p-2 text-slate-500 text-left'>Company</th>
      <th className='w-1/2 font-normal p-2 text-slate-500 text-left'>Email</th>
      <th className='w-1/2 font-normal p-2 text-slate-500 text-left'>Admin</th>
      <th className='w-1/2 font-normal p-2 text-slate-500 text-left'>Actions</th>
    </tr>
    </thead>
    <tbody>
    {data.map(customer => <tr key={customer.id}>
      <td className='p-2 text-slate-900'>
        <Avatar size='24px' value={customer.name} />{customer.name}
      </td>
      <td className='p-2 text-slate-900'>{customer.company}</td>
      <td className='p-2 text-slate-900'>{customer.email}</td>
      <td className='p-2 text-slate-900 h-1'>
        <Activator active={customer.isAdmin} />
      </td>
      <td className='p-2 text-slate-900 flex'>
        <Icon className="mr-2" type="editable" />
        <Icon type="removable" />
      </td>
    </tr>)}
    </tbody>
  </table>;
};

export default Table;