import Input, { InputProps } from './input';
import React, { useState } from 'react';
import Icon from './icon';

type PasswordInputType = Omit<InputProps, 'ref'>

const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputType>(function PasswordInput(props: PasswordInputType, ref) {
  const [typePassword, setTypePassword] = useState('password');
  const rightSlot = <Icon type={typePassword === 'password' ? 'visible' : 'hidden'}
                          onClick={() => setTypePassword((type) => type === 'password' ? 'text' : 'password')} />;
  return <Input ref={ref} {...props} type={typePassword} rightSlot={rightSlot} />;
});

export default PasswordInput