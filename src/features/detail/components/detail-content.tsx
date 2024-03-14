'use client';

import ImageLoader from '@components/imageLoader';
import Popup from '@components/popup';
import useCustomRouter from '@hooks/useCustomRouter';
import useModal from '@hooks/Utils/useModal';
import { DetailOption } from '@interfaces/enums';
import Image from 'next/image';

import StickerBottomModal from '../../../app/diarylist/[id]/sticker-bottom-modal';
import { DETAIL_OPTIONS } from '../constants';

const DetailContent = ({ content, id }: { content: string; id: number }) => {
  const { push } = useCustomRouter();

  const { isOpen: stickerIsOpen, onOpen: onStickerOpen, onClose: onStickerClose } = useModal();
  const { isOpen: deleteIsOpen, onOpen: onDeleteOpen, onClose: onDeleteClose } = useModal();
  return (
    <>
      <Popup isOpen={deleteIsOpen} onClose={onDeleteClose} label="삭제" onClick={() => {}} title="정말 삭제하시겠어요?">
        <p className="text-caption-1 text-center text-gray-40">삭제한 일화는 다시 복구할 수 없어요.</p>
      </Popup>
      {stickerIsOpen && <StickerBottomModal onClose={onStickerClose} />}

      <div className="h-96">
        <div className="mt-6 flex h-full flex-col justify-between rounded-[10px] bg-gray-5  py-4 pl-4 pr-7">
          <h1 className="text-body-4 text-gray-70">{content}</h1>
          <div className="flex justify-end">
            {DETAIL_OPTIONS.map((option) => (
              <section
                key={option.label}
                className="ml-4 flex cursor-pointer flex-col items-center justify-center"
                onClick={() => {
                  if (option.value === DetailOption.criteria || option.value === DetailOption.modify) {
                    push(`/diarylist/${id}/${option.value}`);
                  } else if (option.value === DetailOption.delete) {
                    onDeleteOpen();
                  } else if (option.value === DetailOption.sticker) {
                    onStickerOpen();
                  }
                }}
              >
                <Image loader={ImageLoader} width={24} height={24} src={option.image} alt="" />
                <h5 className=" text-[10px] font-medium text-gray-25">{option.label}</h5>
              </section>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default DetailContent;
