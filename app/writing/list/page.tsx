'use client';

import { CheckList } from '@components/check-list';
import ImageLoader from '@components/imageLoader';
import { NavTopBar } from '@components/top-bar';
import { DefaultLayout, FooterButtonLayout } from '@components/ui/layout';
import Image from 'next/image';
import { useState } from 'react';

const ListDiaryPage = () => {
  const [select, setSelect] = useState(false);
  return (
    <FooterButtonLayout text="다음" multi={true} onClick={() => {}} multiOnClick={() => {}} border={false}>
      <NavTopBar href="./diary" label="기피 기준추가" />
      <DefaultLayout>
        <div className="mt-6 flex items-center">
          <h1 className="text-title-1 text-gray-70">이 일화에서 친구는</h1>
          &nbsp;
          <h1 className="text-title-1 text-orange-1">어떤 친구였나요?</h1>
        </div>

        <div className="mb-5 mt-7 flex items-center">
          <Image loader={ImageLoader} src={'/icon/ui/broken-heart.svg'} alt="" width={24} height={24} />
          <h4 className="text-title-3">기피하는 친구였어요!</h4>
        </div>

        <div className="mb-3">
          <CheckList
            selected={select}
            label={'기준1'}
            onClick={() => {
              setSelect((prev) => !prev);
            }}
            side="right"
          />
        </div>
      </DefaultLayout>
    </FooterButtonLayout>
  );
};

export default ListDiaryPage;
