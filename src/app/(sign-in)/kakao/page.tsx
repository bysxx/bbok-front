'use client';

import authApi from '@apis/auth';
import { LoadingPage } from '@components/ui/pages';
import useCustomRouter from '@hooks/useCustomRouter';
import { redirectUri } from '@libs/config';
import { useUserStore } from '@stores/useUserStore';
import { setCookie } from 'cookies-next';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

// page for redirect(kakao -> main)
export default function KakaoPage() {
  const { push } = useCustomRouter();
  const searchParams = useSearchParams();
  const { setUserData } = useUserStore();

  useEffect(() => {
    if (searchParams.get('code')) {
      authApi.signIn(searchParams.get('code') as string, redirectUri).then((res) => {
        setUserData(res.data);
        setCookie('accessToken', res.data.accessToken);
        setCookie('refreshToken', res.data.refreshToken);
        setCookie('isVisited', true);
        if (res.data.newMember) {
          push('/checklist/create');
        } else {
          push('/');
        }
      });
    }
  }, [searchParams]);

  return <LoadingPage />;
}
