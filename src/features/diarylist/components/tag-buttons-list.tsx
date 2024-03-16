'use client';

import { SelectButton } from '@components/buttons';
import { useGetDiaryTagList } from '@hooks/queries/diary';
import { useFriendStore } from '@stores/useFriendStore';

interface TagListProps {
  selectTag: string;
  setSelectTag: (value: string) => void;
}

const TagButtonsList = ({ selectTag, setSelectTag }: TagListProps) => {
  const { friend } = useFriendStore();
  const { data } = useGetDiaryTagList(friend.id);

  const handleTagClick = (tag: string) => {
    setSelectTag(tag);
  };
  return (
    <div className="flex overflow-x-scroll pl-7 pt-3 scrollbar-hide">
      <div className="mr-2">
        <SelectButton selected={selectTag.length === 0} onClick={() => handleTagClick('')} label={'전체'} />
      </div>
      {data?.data.tags.map((tag) => (
        <div className="mr-2" key={tag.id}>
          <SelectButton selected={selectTag === tag.name} onClick={() => handleTagClick(tag.name)} label={tag.name} />
        </div>
      ))}
    </div>
  );
};
export default TagButtonsList;
