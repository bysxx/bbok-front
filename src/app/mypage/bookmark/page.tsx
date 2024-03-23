'use client';

import { NavTopBar } from '@components/top-bar';
import { EmptyBookmarCard } from '@features/mypage/components/bookmark';

const MyPageBookmarkPage = () => {
  return (
    <>
      <NavTopBar label="북마크" onClick={() => {}} />

      <EmptyBookmarCard />
    </>
  );
};
export default MyPageBookmarkPage;
