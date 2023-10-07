import Link from 'next/link';

interface NavTopBarInterface {
  label: string;
  href: string;
}

const NavTopBar = ({ label, href }: NavTopBarInterface) => {
  return (
    <div className="flex w-full items-center p-4">
      <Link href={href}>
        <img src={'/images/icon/ui/back.svg'} alt="" />
      </Link>
      <h5 className="text-body-1 mr-5 grow text-center font-medium text-gray-70">{label}</h5>
    </div>
  );
};
export default NavTopBar;
