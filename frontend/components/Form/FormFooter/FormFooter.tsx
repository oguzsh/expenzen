import { Button } from '@nextui-org/react';

type FormFooterProps = {
  secondaryText?: string;
  primaryText?: string;
  onClose: () => void;
  isSubmitting: boolean;
};

export const FormFooter = ({ onClose, isSubmitting, secondaryText = 'Cancel', primaryText = 'Save' }: FormFooterProps) => {
  return (
    <div className='flex justify-end mb-4 mt-4'>
      <Button color="danger" variant="light" onClick={ onClose }>
        { secondaryText }
      </Button>
      <Button color="primary" className='ml-4' type='submit' isDisabled={ isSubmitting }>
        { primaryText }
      </Button>
    </div>
  );
};
