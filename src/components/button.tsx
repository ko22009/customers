type ButtonProps = {
  text: string,
  onClick?: () => void;
}

const Button = ({ text, onClick }: ButtonProps) => {
  return <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded' onClick={onClick}>
    {text}
  </button>;
};

export default Button;