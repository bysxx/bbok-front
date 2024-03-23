/**
 * 북마크 item type
 */
interface BookmarkContent {
  id: number;
  content: string;
  reference: string;
}
/**
 * 북마크 리스트 reponse type
 */
export interface IBookmarkListResponse {
  bookmarks: BookmarkContent[];
}
