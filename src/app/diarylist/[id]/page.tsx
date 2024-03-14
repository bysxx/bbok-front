import { DiaryDetailPage } from '@features/detail/pages';

interface IDiaryDetailProp {
  params: {
    id: number;
  };
}
const DiarylistDetailPage = ({ params }: IDiaryDetailProp) => {
  return <DiaryDetailPage id={params.id} />;
};
export default DiarylistDetailPage;
