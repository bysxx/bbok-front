'use client';

import BottomSheet from '@components/bottom-sheet';
import { StickerBadge, StickerOption } from '@components/sticker-badge';
import { useState } from 'react';

interface StickerModalProps {
  onClose: () => void;
}
const StickerBottomModal = ({ onClose }: StickerModalProps) => {
  const [modify] = useState(false);
  return (
    <BottomSheet>
      <>
        <div className="flex items-center justify-between">
          <h5 className="text-friend-card-name">커스텀 스티커</h5>
          <div className="flex items-center">
            <button className="text-friend-card-name mr-3 text-gray-45">{modify ? '수정완료' : '관리'}</button>
            <img className="cursor-pointer" onClick={onClose} src="../images/icon/ui/close.svg" alt="" />
          </div>
        </div>
        <div className="mt-5 flex overflow-x-scroll scrollbar-hide">
          <div className="flex items-center justify-center gap-4">
            <StickerOption type="add" onClick={() => {}} />
            <StickerOption type="picture" onClick={() => {}} />
            <StickerBadge
              src="https://media.istockphoto.com/id/1438931606/ko/%EC%82%AC%EC%A7%84/%EB%82%98%EB%AC%B4%EB%A5%BC-%EA%B0%80%EC%A7%84-%EC%97%AC%EC%9E%90%EC%9D%98-%EC%86%90-%EA%B7%B8%EB%85%80%EB%8A%94-%EC%8B%AC%EA%B3%A0%EC%9E%88%EB%8B%A4-%ED%99%98%EA%B2%BD-%EB%B3%B4%EC%A0%84-%EA%B0%9C%EB%85%90-%EC%9E%90%EC%9B%90-%EB%B3%B4%ED%98%B8-%EB%B0%8F-%EB%B3%B4%EC%A1%B4-%EC%A7%80%EA%B5%AC-%EC%98%A8%EB%82%9C%ED%99%94%EB%A5%BC-%EC%A4%84%EC%9D%B4%EA%B8%B0-%EC%9C%84%ED%95%B4-%EB%82%98%EB%AC%B4%EB%A5%BC-%EC%8B%AC%EB%8B%A4-%EC%9E%AC%EC%83%9D-%EA%B0%80%EB%8A%A5-%EC%97%90%EB%84%88%EC%A7%80-%EC%82%AC%EC%9A%A9-%EC%9E%90%EC%97%B0%EB%A6%BC%EC%9D%98-%EB%B3%B4%EC%A0%84.jpg?s=1024x1024&w=is&k=20&c=eHyDbTRuznMR1BVDX4e9ZMyoaq4pozNdE_Iwe9Q394U="
              type="delete"
            />
            <StickerBadge src="https://media.istockphoto.com/id/1438931606/ko/%EC%82%AC%EC%A7%84/%EB%82%98%EB%AC%B4%EB%A5%BC-%EA%B0%80%EC%A7%84-%EC%97%AC%EC%9E%90%EC%9D%98-%EC%86%90-%EA%B7%B8%EB%85%80%EB%8A%94-%EC%8B%AC%EA%B3%A0%EC%9E%88%EB%8B%A4-%ED%99%98%EA%B2%BD-%EB%B3%B4%EC%A0%84-%EA%B0%9C%EB%85%90-%EC%9E%90%EC%9B%90-%EB%B3%B4%ED%98%B8-%EB%B0%8F-%EB%B3%B4%EC%A1%B4-%EC%A7%80%EA%B5%AC-%EC%98%A8%EB%82%9C%ED%99%94%EB%A5%BC-%EC%A4%84%EC%9D%B4%EA%B8%B0-%EC%9C%84%ED%95%B4-%EB%82%98%EB%AC%B4%EB%A5%BC-%EC%8B%AC%EB%8B%A4-%EC%9E%AC%EC%83%9D-%EA%B0%80%EB%8A%A5-%EC%97%90%EB%84%88%EC%A7%80-%EC%82%AC%EC%9A%A9-%EC%9E%90%EC%97%B0%EB%A6%BC%EC%9D%98-%EB%B3%B4%EC%A0%84.jpg?s=1024x1024&w=is&k=20&c=eHyDbTRuznMR1BVDX4e9ZMyoaq4pozNdE_Iwe9Q394U=" />

            <StickerBadge src="https://media.istockphoto.com/id/1438931606/ko/%EC%82%AC%EC%A7%84/%EB%82%98%EB%AC%B4%EB%A5%BC-%EA%B0%80%EC%A7%84-%EC%97%AC%EC%9E%90%EC%9D%98-%EC%86%90-%EA%B7%B8%EB%85%80%EB%8A%94-%EC%8B%AC%EA%B3%A0%EC%9E%88%EB%8B%A4-%ED%99%98%EA%B2%BD-%EB%B3%B4%EC%A0%84-%EA%B0%9C%EB%85%90-%EC%9E%90%EC%9B%90-%EB%B3%B4%ED%98%B8-%EB%B0%8F-%EB%B3%B4%EC%A1%B4-%EC%A7%80%EA%B5%AC-%EC%98%A8%EB%82%9C%ED%99%94%EB%A5%BC-%EC%A4%84%EC%9D%B4%EA%B8%B0-%EC%9C%84%ED%95%B4-%EB%82%98%EB%AC%B4%EB%A5%BC-%EC%8B%AC%EB%8B%A4-%EC%9E%AC%EC%83%9D-%EA%B0%80%EB%8A%A5-%EC%97%90%EB%84%88%EC%A7%80-%EC%82%AC%EC%9A%A9-%EC%9E%90%EC%97%B0%EB%A6%BC%EC%9D%98-%EB%B3%B4%EC%A0%84.jpg?s=1024x1024&w=is&k=20&c=eHyDbTRuznMR1BVDX4e9ZMyoaq4pozNdE_Iwe9Q394U=" />

            <StickerBadge src="https://media.istockphoto.com/id/1438931606/ko/%EC%82%AC%EC%A7%84/%EB%82%98%EB%AC%B4%EB%A5%BC-%EA%B0%80%EC%A7%84-%EC%97%AC%EC%9E%90%EC%9D%98-%EC%86%90-%EA%B7%B8%EB%85%80%EB%8A%94-%EC%8B%AC%EA%B3%A0%EC%9E%88%EB%8B%A4-%ED%99%98%EA%B2%BD-%EB%B3%B4%EC%A0%84-%EA%B0%9C%EB%85%90-%EC%9E%90%EC%9B%90-%EB%B3%B4%ED%98%B8-%EB%B0%8F-%EB%B3%B4%EC%A1%B4-%EC%A7%80%EA%B5%AC-%EC%98%A8%EB%82%9C%ED%99%94%EB%A5%BC-%EC%A4%84%EC%9D%B4%EA%B8%B0-%EC%9C%84%ED%95%B4-%EB%82%98%EB%AC%B4%EB%A5%BC-%EC%8B%AC%EB%8B%A4-%EC%9E%AC%EC%83%9D-%EA%B0%80%EB%8A%A5-%EC%97%90%EB%84%88%EC%A7%80-%EC%82%AC%EC%9A%A9-%EC%9E%90%EC%97%B0%EB%A6%BC%EC%9D%98-%EB%B3%B4%EC%A0%84.jpg?s=1024x1024&w=is&k=20&c=eHyDbTRuznMR1BVDX4e9ZMyoaq4pozNdE_Iwe9Q394U=" />
            <StickerBadge src="https://media.istockphoto.com/id/1438931606/ko/%EC%82%AC%EC%A7%84/%EB%82%98%EB%AC%B4%EB%A5%BC-%EA%B0%80%EC%A7%84-%EC%97%AC%EC%9E%90%EC%9D%98-%EC%86%90-%EA%B7%B8%EB%85%80%EB%8A%94-%EC%8B%AC%EA%B3%A0%EC%9E%88%EB%8B%A4-%ED%99%98%EA%B2%BD-%EB%B3%B4%EC%A0%84-%EA%B0%9C%EB%85%90-%EC%9E%90%EC%9B%90-%EB%B3%B4%ED%98%B8-%EB%B0%8F-%EB%B3%B4%EC%A1%B4-%EC%A7%80%EA%B5%AC-%EC%98%A8%EB%82%9C%ED%99%94%EB%A5%BC-%EC%A4%84%EC%9D%B4%EA%B8%B0-%EC%9C%84%ED%95%B4-%EB%82%98%EB%AC%B4%EB%A5%BC-%EC%8B%AC%EB%8B%A4-%EC%9E%AC%EC%83%9D-%EA%B0%80%EB%8A%A5-%EC%97%90%EB%84%88%EC%A7%80-%EC%82%AC%EC%9A%A9-%EC%9E%90%EC%97%B0%EB%A6%BC%EC%9D%98-%EB%B3%B4%EC%A0%84.jpg?s=1024x1024&w=is&k=20&c=eHyDbTRuznMR1BVDX4e9ZMyoaq4pozNdE_Iwe9Q394U=" />

            <StickerBadge src="https://media.istockphoto.com/id/1438931606/ko/%EC%82%AC%EC%A7%84/%EB%82%98%EB%AC%B4%EB%A5%BC-%EA%B0%80%EC%A7%84-%EC%97%AC%EC%9E%90%EC%9D%98-%EC%86%90-%EA%B7%B8%EB%85%80%EB%8A%94-%EC%8B%AC%EA%B3%A0%EC%9E%88%EB%8B%A4-%ED%99%98%EA%B2%BD-%EB%B3%B4%EC%A0%84-%EA%B0%9C%EB%85%90-%EC%9E%90%EC%9B%90-%EB%B3%B4%ED%98%B8-%EB%B0%8F-%EB%B3%B4%EC%A1%B4-%EC%A7%80%EA%B5%AC-%EC%98%A8%EB%82%9C%ED%99%94%EB%A5%BC-%EC%A4%84%EC%9D%B4%EA%B8%B0-%EC%9C%84%ED%95%B4-%EB%82%98%EB%AC%B4%EB%A5%BC-%EC%8B%AC%EB%8B%A4-%EC%9E%AC%EC%83%9D-%EA%B0%80%EB%8A%A5-%EC%97%90%EB%84%88%EC%A7%80-%EC%82%AC%EC%9A%A9-%EC%9E%90%EC%97%B0%EB%A6%BC%EC%9D%98-%EB%B3%B4%EC%A0%84.jpg?s=1024x1024&w=is&k=20&c=eHyDbTRuznMR1BVDX4e9ZMyoaq4pozNdE_Iwe9Q394U=" />
          </div>
        </div>
      </>
    </BottomSheet>
  );
};
export default StickerBottomModal;
