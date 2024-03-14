import ImageLoader from '@components/imageLoader';
import Image from 'next/image';

interface ILandingItem {
  bg: string;
  title: string;
  image: string;
}

export default function LandingSection({ bg, title, image }: ILandingItem) {
  return (
    <section className={`${bg} px-7 pt-5`}>
      <h2 className="text-title-1 text-gray-70" dangerouslySetInnerHTML={{ __html: title }} />
      <div className="mt-7 flex w-full justify-center">
        <Image
          src={image}
          loader={ImageLoader}
          alt=""
          width="0"
          height="0"
          sizes="100vw"
          className="h-auto w-full"
          priority={true}
        />
      </div>
    </section>
  );
}
