'use client';

import Popup from '@components/popup';
import Tab from '@components/tab';
import { NavTopBar } from '@components/top-bar';
import { ACCOUNT_TAB_LIST } from '@features/mypage/constants';
import { useMemberMutation } from '@hooks/queries/member';
import useCustomRouter from '@hooks/useCustomRouter';
import useModal from '@hooks/useModal';
import { AccountTab } from '@interfaces/enums';
import { showErrorToast } from '@libs/showToast';

const MyPageAccountPage = () => {
  const { back } = useCustomRouter();
  const { isOpen: withdrawIsOpen, onClose: onWithdrawClose, onOpen: onWidthdrawOpen } = useModal();
  const { isOpen: initialIsOpen, onClose: onInitialClose, onOpen: onInitialOpen } = useModal();
  const { deleteMember } = useMemberMutation();

  return (
    <main>
      <Popup
        isOpen={withdrawIsOpen}
        onClose={onWithdrawClose}
        label="탈퇴"
        onClick={() => {
          deleteMember.mutate();
          onWithdrawClose();
        }}
        title="정말 뽁을 떠나시겠어요?"
      >
        <p className="text-caption-1 text-center text-gray-40">
          계정을 삭제하면 지금까지
          <br />
          작성한 일화들을 더 이상 볼 수 없어요.
        </p>
      </Popup>
      <Popup
        isOpen={initialIsOpen}
        onClose={onInitialClose}
        label="초기화"
        onClick={() => {
          // TODO: 초기화 api 호출
          showErrorToast('아직 기능이 준비가 안되었어요');
          onInitialClose();
        }}
        title="정말 초기화 하시겠어요?"
      >
        <p className="text-caption-1 text-center text-gray-40">
          초기화를 진행하면 지금까지
          <br />
          작성한 일화들은 복구가 불가능해요.
        </p>
      </Popup>
      <NavTopBar onClick={back} label="내 계정" className="mb-[10px]" />
      {ACCOUNT_TAB_LIST.map((tab, i) => (
        <Tab
          key={tab.value}
          divider={i !== ACCOUNT_TAB_LIST.length - 1}
          onClick={() => {
            if (tab.value === AccountTab.initial) {
              onInitialOpen();
            } else if (tab.value === AccountTab.widthDraw) {
              onWidthdrawOpen();
            }
          }}
          label={tab.label}
        />
      ))}
    </main>
  );
};
export default MyPageAccountPage;
