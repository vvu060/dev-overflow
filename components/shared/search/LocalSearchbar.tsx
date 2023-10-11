import React from 'react';

interface LocalSearchbarProps {
  route: string;
  iconPosition: 'left' | 'right';
  imgSrc: string;
  placeholder: string;
  otherClasses?: string;
}

const LocalSearchbar = ({
  route,
  iconPosition,
  imgSrc,
  placeholder,
  otherClasses,
}: LocalSearchbarProps) => {
  return <div>LocalSearchbar</div>;
};

export default LocalSearchbar;
