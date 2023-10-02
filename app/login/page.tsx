import { SignInButton } from '@components/buttons';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <main className="relative flex min-h-screen flex-col justify-between bg-yellow px-8 pb-9 pt-16">
      <img className="absolute left-0 top-0" src="/images/login/star-1.svg" alt="" />
      <img className="absolute right-0 top-48" src="/images/login/star-2.svg" alt="" />

      <section className="z-10">
        <h3 className="text-body-3">나를 아프게 하는 가시를 뽁!</h3>
        <h2 className="text-title-1 mt-2">친구관계를 위한 나만의 일기장</h2>
        <img className="mt-6" src="/images/icon/logo.svg" alt="" />
      </section>

      <Link className="z-10" href="/kakao">
        <SignInButton />
      </Link>
    </main>
  );
}
