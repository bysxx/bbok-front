'use client';

import { useState } from 'react';

export default function UiChipSelect({ text }: { text: string }) {
  const [selected, setSelected] = useState(false);

  return (
    <div
      className={`cursor-pointer rounded-md p-2 ${selected ? 'bg-orange-1' : 'bg-gray-13'}`}
      onClick={() => setSelected(!selected)}
    >
      <div className={`text-sm leading-none ${selected ? 'text-white' : 'text-gray-30'}`}>{text}</div>
    </div>
  );
}
