import type { ICheckItem } from '@interfaces/checklist';

interface CheckCountProp {
  list: ICheckItem[];
}

const CheckCount = ({ list }: CheckCountProp) => {
  return (
    <h2
      className={`text-body-4 mt-1 ${
        list.filter((l: ICheckItem) => l.checked === true).length === 5 ? 'text-orange-2' : 'text-gray-20'
      } `}
    >{`${list.filter((l: ICheckItem) => l.checked === true).length}/5`}</h2>
  );
};
export default CheckCount;
