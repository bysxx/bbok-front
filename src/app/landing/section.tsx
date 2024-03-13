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
        <img className="w-[272px]" src={image} alt="" />
      </div>
    </section>
  );
}
