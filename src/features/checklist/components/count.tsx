interface CheckCountProp {
  num: number;
}

function ChecklistCount({ num }: CheckCountProp) {
  return <h2 className={`text-body-4 mt-1 ${num === 5 ? 'text-orange-2' : 'text-gray-20'} `}>{`${num}/5`}</h2>;
}
export default ChecklistCount;
