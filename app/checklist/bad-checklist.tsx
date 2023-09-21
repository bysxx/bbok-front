import CheckList from '@components/check-list';

interface BadCheckListProps {
  badCheckList: string[];
  setBadCheckList: (value: string[]) => void;
}

const BadCheckList = ({ badCheckList, setBadCheckList }: BadCheckListProps) => {
  // 체크 리스트 아이템을 클릭했을 때
  const handleCheckListClick = (label: string) => {
    const updateCheckList = badCheckList.includes(label)
      ? badCheckList.filter((check) => check !== label)
      : badCheckList.concat(label);

    setBadCheckList(updateCheckList);
  };
  // api로 badchecklist 받아옴
  const badCheckLists = [
    '나를 배려하지 않는 친구',
    '신뢰를 잃는 행동을 하는 친구',
    '나의 자존감을 낮추는 친구',
    '유머 코드가 맞지 않는 친구',
    '나에게 너무 많이 의존하는 친구',
    '이성에 집착하는 친구',
    '자기 과시와 자랑이 심한 친구',
    '종교적·정치적 가치관이 다른 친구',
    '의사소통 스타일이 맞지 않는 친구',
    '나를 가르치려고 하는 친구',
  ];
  return (
    <div className="mt-[38px]">
      <h5 className="text-body-3 mb-4">내 기준에 벗어난 친구</h5>
      {badCheckLists.map((bad: string) => (
        <div key={bad} className="mb-[12px]">
          <CheckList
            selected={badCheckList.includes(bad)}
            label={bad}
            key={bad}
            onClick={() => handleCheckListClick(bad)}
          />
        </div>
      ))}
    </div>
  );
};
export default BadCheckList;
