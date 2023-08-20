import { Modal } from 'components/Modal';
import { CreateAccountForm } from '../../forms/CreateAccountForm';
import { useDisclosure } from '@nextui-org/react';

export const CreateAccountModal = () => {
  const modalProps = useDisclosure();

  return (
    <Modal  buttonTitle='Create a new account' header='Create a new account' { ...modalProps }>
      <CreateAccountForm onClose={ () => modalProps.onClose() } />
    </Modal >
  );
};
