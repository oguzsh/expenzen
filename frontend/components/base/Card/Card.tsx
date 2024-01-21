import classNames from 'classnames';

import type { PropsWithChildren } from 'react';

import CardBody from './CardBody';

type CardProps = {
  customClasses: {
    color: string;
    grid: string;
  };
};

const Card = ({ customClasses, children }: PropsWithChildren<CardProps>) => {
  const cardClasses = classNames(
    'card flex justify-center items-center border-2 dark:border-none rounded-xl',
    customClasses.color,
    customClasses.grid,
  );

  return (
    <div className={cardClasses}>
      <CardBody>{children}</CardBody>
    </div>
  );
};

export default Card;
