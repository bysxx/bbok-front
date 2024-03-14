import diaryServerApi from '@apis/diary/diary.server';
import { PrefetchHydration } from '@components/react-query';
import { DIARY_KEYS } from '@constants/queryKeys';
import { DiaryDetailPage } from '@features/detail/pages';

interface IDiaryDetailProp {
  params: {
    id: number;
  };
}
const DiarylistDetailPage = ({ params }: IDiaryDetailProp) => {
  return (
    <PrefetchHydration queryKey={DIARY_KEYS.detail([{ ...params }])} queryFn={() => diaryServerApi.detail(params.id)}>
      <DiaryDetailPage id={params.id} />
    </PrefetchHydration>
  );
};
export default DiarylistDetailPage;
