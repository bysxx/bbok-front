import React, { useCallback } from 'react';

interface SearchBarProps {
  input: string;
  setInput: (value: string) => void;
  onClick: () => void;
}

const SearchBar = ({ input, setInput, onClick }: SearchBarProps) => {
  const handleSearchInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  }, []);
  return (
    <form className="h-full w-full">
      <div className="relative">
        <input
          type="input"
          id="default-search"
          className="block w-full rounded-lg border border-none bg-gray-10 py-[11px] pl-[12px] text-gray-70 focus:outline-0"
          placeholder="키워드로 일화를 검색할 수 있어요"
          onChange={handleSearchInputChange}
          value={input}
          required
        />
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-[12px]">
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
  );
};
export default SearchBar;
