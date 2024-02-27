'use client';

import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Footer() {
  const pathname = usePathname();
  const navItems: { href: string; label: string; iconOn: string; iconOff: string }[] = [
    {
      href: '/',
      label: '홈',
      iconOn: '/images/icon/bottom/home-on.svg',
      iconOff: '/images/icon/bottom/home-off.svg',
    },
    {
      href: '/diarylist',
      label: '글쓰기',
      iconOn: '/images/icon/bottom/writing-on.svg',
      iconOff: '/images/icon/bottom/writing-off.svg',
    },
    {
      href: '/mypage',
      label: '마이페이지',
      iconOn: '/images/icon/bottom/mypage-on.svg',
      iconOff: '/images/icon/bottom/mypage-off.svg',
    },
  ];

  return (
    <footer className="sticky bottom-0 grid w-full grid-cols-3 border-t border-t-gray-15 bg-[#fbfbfb] text-center text-gray-20">
      {navItems.map((item) => (
        <Link
          className={classNames('flex flex-col p-2 items-center', { 'text-gray-65': item.href === pathname })}
          key={item.label}
          href={item.href}
        >
          <img className="size-8" src={item.href === pathname ? item.iconOn : item.iconOff} alt="" />
          <span className="text-xs">{item.label}</span>
        </Link>
      ))}
    </footer>
  );
}

export default Footer;
