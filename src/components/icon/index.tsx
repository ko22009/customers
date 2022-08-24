import visible from './resources/Eye.svg'
import hidden from './resources/Eye Off.svg'
import editable from './resources/Edit.svg'
import removable from './resources/Trash.svg'
import Image from 'next/image';

const IconList = {
  visible,
  hidden,
  editable,
  removable
} as const;

type IconProps = {
  type: keyof typeof IconList;
}

const Icon = ({type}: IconProps) => {
  return <Image alt={type} src={IconList[type]} />
}

export default Icon