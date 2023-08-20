import { FormFooter } from 'components/Form/FormFooter';
import { CurrencyInput } from 'components/Form/Inputs/CurrencyInput/CurrencyInput';
import { FormInput } from 'components/Form/Inputs/FormInput';
import { Form, Formik } from 'formik';

export type AccountInput = {
  name: string
  accountType: string
  balance: string
}

type AccountFormProps = {
  onSubmit: (args: AccountInput) => Promise<void>;
}

export const AccountForm = ({ onSubmit }: AccountFormProps) => {
  const initialValues: AccountInput = {
    name: '',
    accountType: '',
    balance: ''
  };

  return (
    <Formik initialValues={ initialValues } onSubmit={ onSubmit }>
      { ({ handleSubmit, isSubmitting, handleChange, values }) => (
        <Form onSubmit={ (e) => {
          e.preventDefault();
          handleSubmit();
        } }>
          <FormInput
            label="Account Name"
            name='name'
            placeholder="Enter your account name..."
            value={ values?.name }
            onChange={ handleChange }
          />
          <FormInput
            label="Account Type"
            name='accountType'
            placeholder="bank, savings, etc"
            value={ values?.accountType }
            onChange={ handleChange }
          />
          <CurrencyInput
            label="Balance"
            name='balance'
            value={ values?.balance }
            onChange={ handleChange }
          />
          <FormFooter isSubmitting={ isSubmitting } onClose={ () => { } } />
        </Form>
      ) }
    </Formik >
  );
};
