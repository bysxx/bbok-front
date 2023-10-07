import { NavTopBar } from '@components/top-bar';

import FriendCriteria from './friend-criteria';

const CriteriaPage = () => {
  const badList = ['기피유형1', '기피유형2', '기피유형3', '기피유형4', '기피유형5'];
  const goodList = ['적합유형1', '적합유형2', '적합유형3', '적합유형4', '적합유형5'];
  return (
    <div>
      <NavTopBar label="나의 친구 기준" href="./" />
      <div className="mb-5 mt-[26px] px-6">
        <FriendCriteria type="bad" list={badList} />
      </div>
      <div className="px-6">
        <FriendCriteria type="good" list={goodList} />
      </div>
    </div>
  );
};
export default CriteriaPage;
