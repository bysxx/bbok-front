import { ButtonOption } from '@components/buttons';

interface ModalProps {
  label: string;
  onClose: () => void;
  onClick: () => void;
  title: string;
  content: string;
}
const Modal = ({ label, onClose, onClick, title, content }: ModalProps) => {
  return (
    <div className="fixed left-0 top-0 z-[1055] flex h-screen w-full items-center justify-center bg-[#2F2F2F] bg-opacity-90 text-center">
      <div className="flex h-1/3 w-80 animate-[bottom-sheet-up_200ms_ease-in-out] flex-col items-center rounded-xl bg-white pb-[14px]">
        <div className="mx-0 my-auto">
          <h3 className="text-[19px] font-bold text-gray-70">{title}</h3>
          <h5 className="text-caption-1 text-gray-40">{content}</h5>
        </div>
        <div className="grid w-full grid-cols-2 gap-2 px-3">
          <ButtonOption type="gray" label="취소" onClick={onClose} />
          <ButtonOption type="red" label={label} onClick={onClick} />
        </div>
      </div>
    </div>
  );
};
export default Modal;
