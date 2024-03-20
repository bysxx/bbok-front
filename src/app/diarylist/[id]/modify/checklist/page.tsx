import diaryServerApi from '@apis/diary/diary.server';
import { PrefetchHydration } from '@components/react-query';
import { DIARY_KEYS } from '@constants/queryKeys';

interface IDiaryDetailCriteriaProp {
  params: {
    id: number;
  };
}

const DiaryDetailCriteriaPage = ({ params }: IDiaryDetailCriteriaProp) => {
  return (
    <PrefetchHydration queryKey={DIARY_KEYS.detail([{ ...params }])} queryFn={() => diaryServerApi.detail(params.id)}>
      {/* <DiaryChecklistModifyPage id={params.id} /> */}
    </PrefetchHydration>
  );
};
export default DiaryDetailCriteriaPage;
