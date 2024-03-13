interface BookmarkContent {
  id: number;
  content: string;
  reference: string;
}
export interface IBookmarkList {
  bookmarks: BookmarkContent[];
}
