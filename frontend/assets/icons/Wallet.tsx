import classNames from 'classnames';

import { SVGProps, memo } from 'react';

const Wallet = (props: SVGProps<SVGSVGElement>) => {
  const { className: classNameProp, ...propsWithoutClassName } = props;
  const className = classNames('w-8 h-8', classNameProp);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      className={className}
      {...propsWithoutClassName}>
      <path d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3"></path>
    </svg>
  );
};

export default memo(Wallet);
