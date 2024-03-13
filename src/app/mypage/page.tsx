'use client';

import { useUserStore } from '@stores/useUserStore';

export default function MyPage() {
  const { userData } = useUserStore();

  return (
    <div>
      <h1>My Page</h1>
      <p>{userData?.memberId}</p>
    </div>
  );
}
