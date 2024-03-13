import Image from 'next/image';

interface IProfileProps {
  src: string;
  name: string;
}
const Profile = ({ src, name }: IProfileProps) => {
  return (
    <section className="flex items-center pb-11 pl-7 pt-5">
      <Image src={src} alt="" width={61} height={61} className="mr-3 h-[61px] rounded-[100px]" />
      <div className="flex flex-col">
        <h2 className="mb-1 text-base font-medium text-gray-70">{name}</h2>
        <h5 className="text-xs font-medium text-gray-30">카카오로 로그인</h5>
      </div>
    </section>
  );
};
export default Profile;
