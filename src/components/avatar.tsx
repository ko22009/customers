import React, { useRef, useEffect } from 'react';
import * as jdenticon from 'jdenticon'

type avatarProps = {
  size?: string;
  value?: string;
}

const Avatar = ({ value = 'test', size = '100%' }: avatarProps) => {
  const icon = useRef<SVGSVGElement>(null);

  useEffect(() => {
    icon.current && jdenticon.update(icon.current, value);
  }, [value]);

  return (
    <svg className="bg-gray-200 rounded inline mr-2" data-jdenticon-value={value} height={size} ref={icon} width={size} />
  );
};

export default Avatar;