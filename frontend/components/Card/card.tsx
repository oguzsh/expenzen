import classNames from 'classnames';
import { PropsWithChildren } from 'react';

type CardProps = PropsWithChildren<{
  className?: string
}>

export const Card = ({ children, className: classNameProp }: CardProps) => {
  const className = classNames('w-full p-4 rounded-lg shadow dark:bg-gray-800', classNameProp);

  return (
    <div className={ className }>
      { children }
    </div>
  );
};
