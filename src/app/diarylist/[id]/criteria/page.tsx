import diaryServerApi from '@apis/diary/diary.server';
import { PrefetchHydration } from '@components/react-query';
import { DIARY_KEYS } from '@constants/queryKeys';
import { DiaryCriteriaPage } from '@features/diary/criteria/pages';

interface IDiaryDetailCriteriaProp {
  params: {
    id: number;
  };
}

const DiaryDetailCriteriaPage = ({ params }: IDiaryDetailCriteriaProp) => {
  return (
    <PrefetchHydration queryKey={DIARY_KEYS.detail([{ ...params }])} queryFn={() => diaryServerApi.detail(params.id)}>
      <DiaryCriteriaPage id={params.id} />
    </PrefetchHydration>
  );
};
export default DiaryDetailCriteriaPage;
