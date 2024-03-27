'use client';

import authApi from '@apis/auth';
import { LoadingPage } from '@components/ui/pages';
import useCustomRouter from '@hooks/useCustomRouter';
import { redirectUri } from '@libs/config';
import { setIsVisited, setTokens } from '@libs/cookie/manageCookie.client';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

// page for redirect(kakao -> main)
export default function KakaoPage() {
  const { push } = useCustomRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get('code')) {
      authApi.signIn(searchParams.get('code') as string, redirectUri).then((res) => {
        setTokens(res.data.accessToken, res.data.refreshToken);
        setIsVisited(true);
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
