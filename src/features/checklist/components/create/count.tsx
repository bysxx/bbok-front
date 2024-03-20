import { IChecklistItem } from '@features/checklist/types';

interface CheckCountProp<T> {
  list: IChecklistItem<T>[];
}

function ChecklistCount<T = number>({ list }: CheckCountProp<T>) {
  return (
    <h2
      className={`text-body-4 mt-1 ${
        list.filter((l: IChecklistItem<T>) => l.isUsed === true).length === 5 ? 'text-orange-2' : 'text-gray-20'
      } `}
    >{`${list.filter((l: IChecklistItem<T>) => l.isUsed === true).length}/5`}</h2>
  );
}
export default ChecklistCount;
