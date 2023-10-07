import Link from 'next/link';

const CloseTopBar = ({ label, href }: { label: string; href: string }) => {
  return (
    <div className="flex w-full items-center justify-between px-5 py-4">
      <h5 className="grow text-center text-[17px] font-medium text-gray-70">{label}</h5>
      <Link href={href}>
        <h6 className="text-sm font-medium text-gray-45">닫기</h6>
      </Link>
    </div>
  );
};
export default CloseTopBar;
