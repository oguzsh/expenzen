import classNames from 'classnames';

import { SVGProps, memo } from 'react';

const Hamburger = (props: SVGProps<SVGSVGElement>) => {
  const { className: classNameProp, ...propsWithoutClassName } = props;
  const className = classNames(
    'inline-block w-9 h-9 stroke-current dark:text-white',
    classNameProp,
  );

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      className={className}
      {...propsWithoutClassName}>
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
};
export default memo(Hamburger);
