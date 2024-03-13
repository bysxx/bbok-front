import Link from 'next/link';
import React from 'react';

interface SearchBarProps {
  input: string;
  setInput: (e: React.FormEvent<HTMLInputElement>) => void;
  onClick: () => void;
  href: string;
}

const SearchBar = ({ input, setInput, onClick, href }: SearchBarProps) => {
  return (
    <div className="flex w-full items-center justify-center py-[10px] pl-4 pr-6">
      <Link href={href}>
        <img src="/images/icon/ui/back.svg" alt="" className="mr-2" />
      </Link>
      <form className="size-full">
        <div className="relative">
          <input
            type="input"
            id="default-search"
            className="block w-full rounded-lg border border-none bg-gray-10 py-[11px] pl-[12px] text-gray-70 focus:outline-0"
            placeholder="키워드로 일화를 검색할 수 있어요"
            onChange={setInput}
            value={input}
            required
          />
          <div className="absolute inset-y-0 right-0 flex cursor-pointer items-center px-[12px]">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClick}
            >
              <circle cx="8.73166" cy="8.73166" r="5.89833" stroke="#2D2D2D" strokeWidth="1.66667" />
              <path d="M12.918 12.917L17.5013 16.667" stroke="#303636" strokeWidth="1.66667" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </form>
    </div>
  );
};
export default SearchBar;
