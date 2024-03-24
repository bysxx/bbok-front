'use client';

import { NavTopBar } from '@components/top-bar';
import { useGetBookmarkList } from '@hooks/queries/bookmark';
import useCustomRouter from '@hooks/useCustomRouter';
import type { BookmarkContent } from '@interfaces/bookmark';

import BookmarkCard from './card';
import EmptyBookmarkCard from './empty-card';

const BookmarkPage = () => {
  const { data } = useGetBookmarkList();
  const { push } = useCustomRouter();
  return (
    <>
      <NavTopBar
        label="북마크"
        onClick={() => {
          push('./');
        }}
      />
      {data?.data.bookmarks.length === 0 && <EmptyBookmarkCard />}
      {(data?.data?.bookmarks?.length || 0) > 0 &&
        data?.data.bookmarks.map((bookmark: BookmarkContent) => (
          <div key={bookmark.id} className="mt-3 px-4">
            <BookmarkCard key={bookmark.id} {...bookmark} />
          </div>
        ))}
    </>
  );
};
export default BookmarkPage;
