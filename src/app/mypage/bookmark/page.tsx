'use client';

import { NavTopBar } from '@components/top-bar';
import { BookmarkCard } from '@features/mypage/components/bookmark';

const MyPageBookmarkPage = () => {
  return (
    <>
      <NavTopBar label="북마크" onClick={() => {}} />

      {/* <EmptyBookmarCard /> */}
      <BookmarkCard />
    </>
  );
};
export default MyPageBookmarkPage;
