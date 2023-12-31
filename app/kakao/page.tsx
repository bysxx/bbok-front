'use client';

import Loading from '@components/ui/loading';
import { redirectUri } from '@libs/config';
import { getLoginToken } from '@requests/login';
import { useUserStore } from '@stores/useUserStore';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

// page for redirect(kakao -> main)
export default function KakaoPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { setUserData, userData } = useUserStore();

  useEffect(() => {
    if (searchParams.get('code')) {
      getLoginToken(searchParams.get('code') as string, redirectUri).then((res) => {
        setUserData(res.data);
        // 처음 사용하는 유저이면
        router.replace('/checklist');
        // 이전에도 사용한 유저이면
        // router.replace('/');
      });
    }
  }, [searchParams]);

  return (
    <main className="flex h-screen items-center justify-center">
      <Loading />
      {userData?.accessToken}
    </main>
  );
}
