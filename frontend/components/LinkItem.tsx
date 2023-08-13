import classnames from 'classnames';
import type { ReactNode } from 'react';

type LinkItemProps = {
  title: string,
  href: string,
  icon?: ReactNode,
  className?: string
}

export const LinkItem = ({ title, href, icon, className: classNameProp }: LinkItemProps) => {
  const className = classnames('flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group', classNameProp);

  return (
    <a href={ href } className={ className }>
      { icon }
      <span className="ml-3">{ title }</span>
    </a>
  );
};
