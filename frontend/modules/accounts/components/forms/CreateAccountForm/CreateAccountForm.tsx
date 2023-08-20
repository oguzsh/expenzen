import { useCreateAccount } from 'modules/accounts/mutations/__generated__/index.gql';
import { AccountForm, AccountInput } from '../Form/AccountForm';
import { Loading } from 'components/Loading';
import { ALL_ACCOUNTS } from 'modules/accounts/queries';

type CreateAccountFormProps = {
  onClose: () => void;
}

export const CreateAccountForm = ({ onClose }: CreateAccountFormProps) => {
  const [createAccount, { loading, error }] = useCreateAccount();

  const handleSubmit = async (inputs: AccountInput) => {
    const modifiedInput = { ...inputs, balance: Number(inputs.balance) };

    await createAccount({
      variables: {
        input: modifiedInput
      },
      refetchQueries: [
        ALL_ACCOUNTS,
        'allAccounts'
      ],
    });

    if (!loading) {
      onClose();
    }
  };

  if (loading) {
    <Loading />;
  }

  if (error) {
    console.error(error); // TODO: Error boundary
  }

  return (
    <AccountForm onSubmit={ handleSubmit } />
  );
};
