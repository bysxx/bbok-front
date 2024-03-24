import bookmarkApi from '@apis/bookmark/bookmark.client';
import { BOOKMARK_KEYS } from '@constants/queryKeys';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useBookmarkMutation = () => {
  const queryClient = useQueryClient();
  /**
   * 북마크 등록
   */
  const postBookmark = useMutation({
    mutationFn: bookmarkApi.post,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: BOOKMARK_KEYS.lists() });
    },
  });

  return { postBookmark };
};
