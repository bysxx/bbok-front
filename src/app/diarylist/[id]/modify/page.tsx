import diaryServerApi from '@apis/diary/diary.server';
import { PrefetchHydration } from '@components/react-query';
import { DIARY_KEYS } from '@constants/queryKeys';
import { DiaryModifyPage } from '@features/diary/components/modify';

interface IDiaryDetailModifyProp {
  params: {
    id: number;
  };
}

const DiaryDetailModifyPage = ({ params }: IDiaryDetailModifyProp) => {
  return (
    <PrefetchHydration queryKey={DIARY_KEYS.detail([{ ...params }])} queryFn={() => diaryServerApi.detail(params.id)}>
      <DiaryModifyPage id={params.id} />
    </PrefetchHydration>
  );
};
export default DiaryDetailModifyPage;
