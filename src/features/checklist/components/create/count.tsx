import { IUserChecklistItem } from '@interfaces/checklist';

interface CheckCountProp<T> {
  list: IUserChecklistItem<T>[];
}

function ChecklistCount<T = number>({ list }: CheckCountProp<T>) {
  return (
    <h2
      className={`text-body-4 mt-1 ${
        list.filter((l: IUserChecklistItem<T>) => l.isUsed === true).length === 5 ? 'text-orange-2' : 'text-gray-20'
      } `}
    >{`${list.filter((l: IUserChecklistItem<T>) => l.isUsed === true).length}/5`}</h2>
  );
}
export default ChecklistCount;
