import CheckList from '@components/check-list';

interface GoodCheckListProps {
  goodCheckList: string[];
  setGoodCheckList: (value: string[]) => void;
}

const GoodCheckList = ({ goodCheckList, setGoodCheckList }: GoodCheckListProps) => {
  // 체크 리스트 아이템을 클릭했을 때
  const handleGoodChecklist = (value: string) => {
    const updateCheckList = goodCheckList.includes(value)
      ? goodCheckList.filter((check) => check !== value)
      : goodCheckList.concat(value);
    setGoodCheckList(updateCheckList);
  };

  // api로 good checklist 받아옴
  const goodCheckLists = [
    '이야기를 잘 듣고 공감해주는 친구',
    '존중하고 배려하는 마음을 가진 친구',
    '관심사가 비슷한 친구',
    '신뢰할 수 있는 친구',
    '긍정적인 친구',
    '성격이 잘 맞는 친구',
    '둘이서 만나도 편한 친구',
    '나를 편견없이 대해주는 친구',
    '배울 점이 많은 친구',
    '내 자존감을 올려주는 친구',
  ];
  return (
    <div className="mt-[38px]">
      <h5 className="text-body-3 mb-4">내 기준에 적합한 친구</h5>
      {goodCheckLists.map((good: string) => (
        <div key={good} className="mb-[12px]">
          <CheckList
            selected={goodCheckList.includes(good)}
            label={good}
            key={good}
            onClick={() => handleGoodChecklist(good)}
          />
        </div>
      ))}
    </div>
  );
};
export default GoodCheckList;
