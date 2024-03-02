'use client';

import { LoadingPage } from '@components/ui/pages';
import { redirectUri } from '@libs/config';
import authApi from '@requests/auth';
import { useUserStore } from '@stores/useUserStore';
import { setCookie } from 'cookies-next';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

// page for redirect(kakao -> main)
export default function KakaoPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { setUserData } = useUserStore();

  useEffect(() => {
    if (searchParams.get('code')) {
      authApi.signIn(searchParams.get('code') as string, redirectUri).then((res) => {
        setUserData(res.data);
        setCookie('accessToken', res.data.accessToken);
        setCookie('refreshToken', res.data.refreshToken);
        setCookie('isVisited', true);
        // 처음 사용하는 유저이면
        router.replace('/checklist');
        // 이전에도 사용한 유저이면
        // router.replace('/');
      });
    }
  }, [searchParams]);

  return <LoadingPage />;
}
