'use client';

import type { ModalProps } from '@chakra-ui/react';
import { Modal, ModalBody, ModalContent, ModalFooter, ModalOverlay } from '@chakra-ui/react';
import BoxButton from '@components/buttons/box-button';

interface IModalProps extends ModalProps {
  isOpen: boolean;
  onClose: () => void;
  label: string;
  onClick: () => void;
  title: string;
}

const Popup = (props: IModalProps) => {
  const { isOpen, onClose, label, onClick, title, children, ...rest } = props;
  return (
    <Modal onClose={onClose} isOpen={isOpen} {...rest} isCentered={true}>
      <ModalOverlay />

      <ModalContent className="items-center justify-center" borderRadius="20px" width="20rem">
        <ModalBody>
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-title-1 mb-3 mt-9 text-gray-70">{title}</h2>
            {children}
          </div>
        </ModalBody>
        <ModalFooter className="mt-[14px] grid w-full grid-cols-2 gap-2 px-3">
          <div className="w-full">
            <BoxButton text="취소" onClick={onClose} bg="gray15" color="gray55" />
          </div>
          <div className="w-full">
            <BoxButton text={label} onClick={onClick} bg="alert" />
          </div>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
export default Popup;
