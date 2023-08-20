import type { ReactNode } from 'react';
import { Modal as NextUiModal, ModalContent, ModalHeader, ModalBody, Button } from '@nextui-org/react';

type ModalProps = {
  header: string;
  children: ReactNode
  buttonTitle: ReactNode;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onOpenChange: () => void;
}

export const Modal = ({ buttonTitle, header, children, ...rest }: ModalProps) => {
  const { isOpen, onOpen, onOpenChange } = rest;

  return (
    <>
      <Button onPress={ onOpen } color='primary'>{ buttonTitle }</Button>
      <NextUiModal isOpen={ isOpen } onOpenChange={ onOpenChange }>
        <ModalContent>
          <>
            <ModalHeader className="flex flex-col gap-1">{ header }</ModalHeader>
            <ModalBody>
              { children }
            </ModalBody>
          </>
        </ModalContent>
      </NextUiModal >
    </>
  );
};
