import React, { HTMLInputTypeAttribute } from 'react';

enum captionColors {
  default = 'text-gray-400',
  error = 'text-red-500'
}

export type InputProps = {
  captionType?: keyof typeof captionColors
  caption?: string
  title: string;
  placeholder?: string
  rightSlot?: React.ReactElement
  type?: HTMLInputTypeAttribute;
} & React.HTMLProps<HTMLInputElement>

const Input = React.forwardRef<HTMLInputElement, InputProps>(function Input({title, captionType = 'default', caption, placeholder, rightSlot, type = "text", ...anotherProps}: InputProps, ref) {
  return <div>
    <label className='block text-sm text-gray-700'>{title}
    <div className='mt-1 relative'>
      <input ref={ref} {...anotherProps} type={type} className='block w-full px-3 py-2 sm:text-sm border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300' placeholder={placeholder} />
      <div className='absolute inset-y-0 right-2 flex items-center'>
        {rightSlot}
      </div>
    </div>
    </label>
    <p className={`mt-1 text-sm ${captionColors[captionType]}`}>{caption}</p>
  </div>;
});

export default Input;