type ActivatorProps = {
  active?: boolean
}

const Activator = ({ active }: ActivatorProps) => {
  return <div className={`w-full h-full rounded ${active ? 'bg-blue-500' : 'bg-slate-300'}`}></div>;
};

export default Activator;