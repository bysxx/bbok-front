'use client';

import { TagButton } from '@components/buttons';

interface TagListProps {
  selectTag: string[];
  setSelectTag: (value: string[]) => void;
}

const TagButtonsList = ({ selectTag, setSelectTag }: TagListProps) => {
  const tags = ['태그1', '태그2', '태그3', '태그4', '태그5', '태그6', '태그7', '태그8', '태그9', '태그10'];

  const handleAllTagClick = () => {
    if (selectTag.length > 0) {
      setSelectTag([]);
    }
  };

  const handleTagClick = (tag: string) => {
    if (selectTag.includes(tag)) {
      setSelectTag(selectTag.filter((t) => t !== tag));
    } else if (selectTag.length < 7) {
      setSelectTag([...selectTag, tag]);
    }
  };
  return (
    <div className="flex overflow-x-scroll pl-7 pt-3 scrollbar-hide">
      <div className="mr-2">
        <TagButton selected={selectTag.length === 0} onClick={handleAllTagClick} label={'전체'} />
      </div>
      {tags.map((tag: string) => (
        <div className="mr-2" key={tag}>
          <TagButton selected={selectTag.includes(tag)} onClick={() => handleTagClick(tag)} label={tag} />
        </div>
      ))}
    </div>
  );
};
export default TagButtonsList;
