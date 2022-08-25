type TabProps = {
  list: string[],
  activeKey: string,
  selectTab: (key: string) => void;
}

const Tab = ({ list, activeKey, selectTab }: TabProps) => {
  return <div className='flex justify-around text-sm font-semibold text-center bg-gray-100 p-1 rounded-lg'>
    {list.map(text =>
      <button key={text} onClick={(e) => {
        e.preventDefault()
        selectTab(text)
      }}
         className={`inline-block w-full m-1 py-2 px-4 rounded-lg hover:bg-white ${activeKey === text ? 'bg-white shadow-md border' : ''}`}>
        {text}
      </button>
    )}
  </div>;
};

export default Tab;