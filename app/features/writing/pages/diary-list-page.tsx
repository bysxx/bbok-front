import { CheckList } from '@components/check-list';
import ImageLoader from '@components/imageLoader';
import { NavTopBar } from '@components/top-bar';
import { FooterButtonLayout, DefaultLayout } from '@components/ui/layout';
import { useGetMyChecklist } from '@hooks/queries/member';
import useCustomRouter from '@hooks/useCustomRouter';
import { IDiaryRequestBody, TDiaryKey, TDiaryValue } from '@interfaces/diary';
import Image from 'next/image';
import { useEffect } from 'react';
import { getInitialDiaryList, updateDiaryChecklist } from '../utils/get-diary-checklist';
import { TYPE_CHECLIST_COMMENT } from '../constants/type-check';

interface IDiaryListPageProps {
  diary: IDiaryRequestBody;
  setDiary: (inputName: TDiaryKey, value: TDiaryValue) => void;
}

const DiaryListPage = ({ diary, setDiary }: IDiaryListPageProps) => {
  const { data, isSuccess } = useGetMyChecklist();
  const { push, query } = useCustomRouter();

  console.log(diary.checklist);
  const { type } = query;
  useEffect(() => {
    if (data && isSuccess) {
      setDiary('checklist', getInitialDiaryList(data.data));
    }
  }, [isSuccess]);

  return (
    <FooterButtonLayout
      text="다음"
      multi={true}
      onClick={() => {
        console.log(diary.checklist);
      }}
      multiOnClick={() => {
        console.log('패스', diary.checklist);
        push({ pathname: './writing', query: { step: 4, type: 'good' } });
      }}
      border={false}
    >
      <NavTopBar href={'/'} label={TYPE_CHECLIST_COMMENT[type as 'good' | 'bad'].title} />
      <DefaultLayout>
        <div className="mt-6 flex items-center">
          <h1 className="text-title-1 text-gray-70">이 일화에서 친구는</h1>
          &nbsp;
          <h1 className="text-title-1 text-orange-1">어떤 친구였나요?</h1>
        </div>
        <div className="mb-5 mt-7 flex items-center">
          <Image
            loader={ImageLoader}
            src={TYPE_CHECLIST_COMMENT[type as 'good' | 'bad'].img}
            alt=""
            width={24}
            height={24}
          />
          <h4 className="text-title-3">{TYPE_CHECLIST_COMMENT[type as 'good' | 'bad'].subTitle}</h4>
        </div>
        {type === 'bad' &&
          data?.data.badChecklist.slice(0, 5).map((list) => (
            <div className="mb-3" key={list.id}>
              <CheckList
                selected={diary.checklist.filter((checklist) => checklist.id === list.id)[0]?.isChecked!}
                label={list.criteria}
                key={list.id}
                onClick={() => setDiary('checklist', updateDiaryChecklist(list.id, diary.checklist))}
                side="right"
              />
            </div>
          ))}
      </DefaultLayout>
    </FooterButtonLayout>
  );
};
export default DiaryListPage;
