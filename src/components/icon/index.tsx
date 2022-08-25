import visible from './resources/Eye.svg';
import hidden from './resources/Eye Off.svg';
import editable from './resources/Edit.svg';
import removable from './resources/Trash.svg';
import Image from 'next/image';
import React from 'react';

const IconList = {
  visible,
  hidden,
  editable,
  removable,
} as const;

type IconProps = {
  type: keyof typeof IconList;
  className?: string;
  onClick?: React.MouseEventHandler
}

const Icon = ({ type, className, onClick }: IconProps) => {
  return <div className={`flex justify-center ${className} ${onClick ? 'cursor-pointer' : ''}`} onClick={onClick}>
    <Image alt={type} src={IconList[type]} className={className} />
  </div>;
};

export default Icon;