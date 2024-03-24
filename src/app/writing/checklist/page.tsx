'use client';

import { CheckList } from '@components/check-list';
import ImageLoader from '@components/imageLoader';
import { NavTopBar } from '@components/top-bar';
import { DefaultLayout, FooterButtonLayout } from '@components/ui/layout';
import { LoadingPage } from '@components/ui/pages';
import { CHECKLIST_TABS, TYPE_CHECLIST_COMMENT } from '@features/diary/constants';
import { getInitialDiaryList, updateDiaryChecklist } from '@features/diary/utils/get-diary-checklist';
import { useDiaryMutation } from '@hooks/queries/diary';
import { useGetMyChecklist } from '@hooks/queries/member';
import useCustomRouter from '@hooks/useCustomRouter';
import { useTabs } from '@hooks/useTabs';
import type { IDiaryCheckListItem } from '@interfaces/checklist';
import type { IDiaryRequestBody } from '@interfaces/diary';
import type { TQuery } from '@interfaces/enums';
import { TypeQuery } from '@interfaces/enums';
import { useFriendStore } from '@stores/useFriendStore';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';

const WritingChecklistPage = () => {
  const { back } = useCustomRouter();
  const [checklists, setChecklists] = useState<IDiaryCheckListItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { currentItem, changeItem } = useTabs<TQuery>(0, CHECKLIST_TABS);
  const { tab } = currentItem;
  const { friend } = useFriendStore();
  const { postDiary } = useDiaryMutation();
  const { register, getValues, setValue } = useFormContext<IDiaryRequestBody>();
  const { tags, content, date, emoji } = getValues();

  // TODO: 체크리스트 api 변경 후 연결
  const { data, isSuccess, isLoading } = useGetMyChecklist();
  useEffect(() => {
    if (isSuccess && data) {
      setChecklists(getInitialDiaryList(data.data));
    }
  }, [isSuccess, data]);

  if (isLoading) {
    return <LoadingPage />;
  }

  const handleClickChecklist = (id: number) => {
    setChecklists(updateDiaryChecklist(id, checklists));
    setValue('checklist', updateDiaryChecklist(id, checklists));
  };

  const handleCreateDiary = async () => {
    setLoading(true);
    const result = { content, sticker: '', tags, emoji, date, id: friend.id, checklist: checklists };
    await postDiary.mutateAsync(result);
  };

  const TAB_CONTROL = {
    [TypeQuery.bad]: {
      onClick: () => changeItem(1),
      multiClick: () => changeItem(1),
      navClick: () => back(),
    },
    [TypeQuery.good]: {
      onClick: () => handleCreateDiary(),
      multiClick: () => handleCreateDiary(),
      navClick: () => changeItem(0),
    },
  };

  return (
    <FooterButtonLayout
      text={TYPE_CHECLIST_COMMENT[tab].bottom}
      multi={true}
      isLoading={loading}
      border={false}
      onClick={TAB_CONTROL[tab].onClick}
      multiOnClick={TAB_CONTROL[tab].multiClick}
    >
      <NavTopBar onClick={TAB_CONTROL[tab].navClick} label={TYPE_CHECLIST_COMMENT[tab].title} />

      <DefaultLayout>
        <div className="mt-6 flex items-center">
          <h1 className="text-title-1 text-gray-70">이 일화에서 친구는</h1>
          &nbsp;
          <h1 className="text-title-1 text-orange-1">어떤 친구였나요?</h1>
        </div>
        <div className="mb-5 mt-7 flex items-center">
          <Image loader={ImageLoader} src={TYPE_CHECLIST_COMMENT[tab].img} alt="" width={24} height={24} />
          <h4 className="text-title-3">{TYPE_CHECLIST_COMMENT[tab].subTitle}</h4>
        </div>

        {(tab === TypeQuery.good
          ? data?.data.goodChecklist.filter((_, i) => i < 5)
          : data?.data.badChecklist.filter((_, i) => i < 5)
        )?.map((list) => (
          <div className="mb-3" key={list.id} {...register('checklist')}>
            <CheckList
              selected={checklists.filter((checklist) => checklist.id === list.id)[0]?.isChecked || false}
              label={list.criteria}
              key={list.id}
              onClick={() => {
                handleClickChecklist(list.id);
              }}
              side="right"
            />
          </div>
        ))}
      </DefaultLayout>
    </FooterButtonLayout>
  );
};
export default WritingChecklistPage;
