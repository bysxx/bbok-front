import { TAP_LIST } from '../constants';

const TabContainer = () => {
  return (
    <>
      {TAP_LIST.map((tap, i) => (
        <section key={tap.value}>
          <div className="py-[18px] pl-7">
            <h1 className="text-sm font-medium text-gray-70">{tap.label}</h1>
          </div>
          {i !== TAP_LIST.length - 1 && <div className="h-[0.5px] w-full bg-gray-15" />}
        </section>
      ))}
    </>
  );
};
export default TabContainer;
