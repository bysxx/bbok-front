import type { ICheckItem } from '@interfaces/checklist';

interface CheckCountProp<T> {
  list: ICheckItem<T>[];
}

function CheckListCount<T = number>({ list }: CheckCountProp<T>) {
  return (
    <h2
      className={`text-body-4 mt-1 ${
        list.filter((l: ICheckItem<T>) => l.isChecked === true).length === 5 ? 'text-orange-2' : 'text-gray-20'
      } `}
    >{`${list.filter((l: ICheckItem<T>) => l.isChecked === true).length}/5`}</h2>
  );
}
export default CheckListCount;
