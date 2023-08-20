import { FormInput, FormInputProps } from '../FormInput';

interface CurrencyInputProps extends FormInputProps { }

export const CurrencyInput = ({ type = 'number', placeholder, startContent: startContentProp, ...rest }: CurrencyInputProps) => {
  const startContent = (
    < div className="pointer-events-none flex items-center" >
      <span className="text-default-400 text-small">$</span>
    </div >
  );

  return (
    <FormInput
      type={ type }
      startContent={ startContentProp ?? startContent }
      placeholder={ placeholder ?? '0.00$' }
      { ...rest }
    />
  );
};
