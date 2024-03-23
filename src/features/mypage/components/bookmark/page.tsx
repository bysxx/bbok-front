'use client';

import { NavTopBar } from '@components/top-bar';

import BookmarkCard from './card';

const BookmarkPage = () => {
  return (
    <>
      <NavTopBar label="북마크" onClick={() => {}} />

      {/* <EmptyBookmarCard /> */}
      <BookmarkCard />
    </>
  );
};
export default BookmarkPage;
