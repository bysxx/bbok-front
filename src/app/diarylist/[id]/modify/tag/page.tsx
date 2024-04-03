'use client';

import WritingTagForm from '@features/diary/components/writing/tag-form';
import { useGetDiaryDetail } from '@hooks/queries/diary';

interface ITagsDetailModifyProp {
  params: {
    id: number;
  };
}

const TagsDetailModifyPage = ({ params }: ITagsDetailModifyProp) => {
  const { data } = useGetDiaryDetail(params.id);
  return <WritingTagForm defaultValue={data?.data.tags || []} />;
};
export default TagsDetailModifyPage;
