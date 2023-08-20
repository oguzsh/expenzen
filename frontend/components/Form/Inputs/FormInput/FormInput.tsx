import { Input, InputProps } from '@nextui-org/react';
import classnames from 'classnames';

export type FormInputProps = InputProps

export const FormInput = ({ type = 'text', isRequired = true, className: classNameProp, ...rest }: FormInputProps) => {
  const className = classnames('mb-4', classNameProp);

  return (
    <Input
      isRequired={ isRequired }
      className={ className }
      type={ type }
      labelPlacement="outside"
      { ...rest }
    />
  );
};
