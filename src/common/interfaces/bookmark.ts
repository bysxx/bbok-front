/**
 * 북마크 item type
 */
export interface BookmarkContent {
  id: number;
  contents: string;
  reference: string;
}
/**
 * 북마크 리스트 reponse type
 */
export interface IBookmarkListResponse {
  bookmarks: BookmarkContent[];
}
