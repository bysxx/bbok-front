import { ICheckItem } from "@interfaces/checklist";
import { useState } from "react";
import { CHECK_LIST } from "../constants/checklist";
import uuid from "react-uuid";

const useHandleChecklist = () => {
  const initialBadList: ICheckItem[] = CHECK_LIST.bad.map(badchecklists => {
    return {
      id: uuid(),
      criteria: badchecklists,
      checked: false
    }
  });
  const initialGoodList: ICheckItem[] = CHECK_LIST.good.map(goodchecklists => {
    return {
      id: uuid(),
      criteria: goodchecklists,
      checked: false
    }
  });


  const [allBadList, setAllBadList] = useState<ICheckItem[]>(initialBadList);
  const [allGoodList, setAllGoodList] = useState<ICheckItem[]>(initialGoodList);

  return {allBadList, setAllBadList, allGoodList, setAllGoodList}
};

export default useHandleChecklist;
