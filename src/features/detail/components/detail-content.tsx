'use client';

import Popup from '@components/popup';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import StickerBottomModal from '../../../app/diarylist/[id]/sticker-bottom-modal';

const DetailContent = ({ content }: { content: string }) => {
  const [stickerModal, setStickerModal] = useState<boolean>(false);
  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  const deleteModalHandler = () => {
    setDeleteModal(!deleteModal);
  };
  const stickerModalHandler = () => {
    setStickerModal(!stickerModal);
  };
  const router = useRouter();
  const options = [
    {
      label: '스티커',
      image: '../images/icon/ui/sticker.svg',
      onClick: () => {
        stickerModalHandler();
      },
    },
    {
      label: '수정',
      image: '../images/icon/ui/edit.svg',
      onClick: () => {
        router.push('/diarylist/1/modify');
      },
    },
    {
      label: '기준',
      image: '../images/icon/ui/checkbox.svg',
      onClick: () => {
        router.push('/diarylist/1/criteria');
      },
    },
    {
      label: '삭제',
      image: '../images/icon/ui/delete.svg',
      onClick: () => {
        deleteModalHandler();
      },
    },
  ];
  return (
    <>
      <Popup
        isOpen={deleteModal}
        onClose={deleteModalHandler}
        label="삭제"
        onClick={() => {}}
        title="정말 삭제하시겠어요?"
      >
        <p className="text-caption-1 text-center text-gray-40">삭제한 일화는 다시 복구할 수 없어요.</p>
      </Popup>
      {stickerModal && <StickerBottomModal onClose={stickerModalHandler} />}

      <div className="h-96">
        <div className="mt-6 flex h-full flex-col rounded-[10px] bg-gray-5 py-4  pl-4 pr-7">
          <h5 className="text-body-4 flex flex-1 flex-col pr-[14px]">{content}</h5>
          <div className="sticky bottom-0 flex justify-end">
            {options.map((o) => (
              <div key={o.label} className="ml-4 cursor-pointer">
                <img src={o.image} alt="" onClick={o.onClick} />
                <h5 className="text-[10px] font-medium text-gray-25">{o.label}</h5>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default DetailContent;
