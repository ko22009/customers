type ButtonProps = {
  text: string,
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

const Button = ({ text, onClick, type = 'button' }: ButtonProps) => {
  return <button type={type} className='bg-blue-500 hover:bg-blue-700 w-full text-white font-bold py-2 px-6 rounded' onClick={onClick}>
    {text}
  </button>;
};

export default Button;