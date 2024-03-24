'use client';

import ImageLoader from '@components/imageLoader';
import SearchBar from '@components/search-bar';
import { FooterButtonLayout } from '@components/ui/layout';
import useCustomRouter from '@hooks/useCustomRouter';
import useInput from '@hooks/useInput';
import Image from 'next/image';

const NoLengthDiaryListCard = () => {
  const { push } = useCustomRouter();
  const { text, onChange } = useInput('');
  return (
    <FooterButtonLayout
      text="일화작성"
      onClick={() => push({ pathname: './writing', query: { step: 1 } })}
      border={false}
    >
      <SearchBar input={text} setInput={onChange} onClick={() => {}} href="./" />
      <div className="flex flex-1 flex-col items-center justify-center">
        <Image loader={ImageLoader} src={'illustration/diary-list.svg'} width={256} height={256} alt="" />
        <h1 className="text-title-1 mt-[10px] text-gray-65">친구랑 있었던 얘기를 털어놓아요</h1>
        <span className="text-body-3 mt-[17px] text-center text-gray-30">
          친구에게 화났던 일, 실망했던 일 등<br /> 비밀스러운 이야기도 괜찮아요
        </span>
      </div>
    </FooterButtonLayout>
  );
};
export default NoLengthDiaryListCard;
