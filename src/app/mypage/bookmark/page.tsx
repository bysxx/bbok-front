import bookmarkServerApi from '@apis/bookmark/bookmark.server';
import { PrefetchHydration } from '@components/react-query';
import { BOOKMARK_KEYS } from '@constants/queryKeys';
import { BookmarkPage } from '@features/mypage/components/bookmark';

const MyPageBookmarkPage = () => {
  return (
    <PrefetchHydration queryKey={BOOKMARK_KEYS.lists()} queryFn={bookmarkServerApi.get}>
      <BookmarkPage />
    </PrefetchHydration>
  );
};
export default MyPageBookmarkPage;
