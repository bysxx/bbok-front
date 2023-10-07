const ModalFooter = () => {
  const navItems: { label: string; iconOn: string; iconOff: string }[] = [
    {
      label: '홈',
      iconOn: '/images/icon/bottom/home-on.svg',
      iconOff: '/images/icon/bottom/home-off.svg',
    },
    {
      label: '글쓰기',
      iconOn: '/images/icon/bottom/writing-on.svg',
      iconOff: '/images/icon/bottom/writing-off.svg',
    },
    {
      label: '마이페이지',
      iconOn: '/images/icon/bottom/mypage-on.svg',
      iconOff: '/images/icon/bottom/mypage-off.svg',
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center">
      {/* tool tip 자리 */}
      <div className="absolute z-20 mb-32 h-[51px] bg-orange-1">
        <h5>먼저 친구를 생성해보세요 tooltip 자리</h5>
      </div>
      <footer className="grid h-[67px] w-full grid-cols-3 border-t border-t-gray-15 text-center text-gray-20">
        {navItems.map((item) => (
          <div
            key={item.label}
            className={`${item.label === '글쓰기' && 'z-20'} flex flex-col items-center bg-[#fbfbfb] p-2 ${
              item.label === '글쓰기' ? 'text-gray-65' : ''
            }`}
          >
            <img className="h-8 w-8" src={item.label === '글쓰기' ? item.iconOn : item.iconOff} alt="" />
            <span className="text-xs">{item.label}</span>
          </div>
        ))}
      </footer>
    </div>
  );
};
export default ModalFooter;
