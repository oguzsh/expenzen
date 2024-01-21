import { PropsWithChildren } from 'react';

const CardBody = (props: PropsWithChildren) => {
  return (
    <div className="card-body w-full p-4 justify-between">{props.children}</div>
  );
};

export default CardBody;
