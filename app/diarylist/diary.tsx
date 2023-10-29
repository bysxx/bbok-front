import TagLabel from '@components/tag-label';

const Diary = () => {
  const tags = ['가스라이팅', '자존감', '친구', '무시', '거짓말'];
  return (
    <div className="mt-3 bg-gray-10 p-5">
      <h4 className="text-caption-1 text-gray-25">23.07.18</h4>
      <h3 className="text-body-4 mr-11 mt-[6px] text-gray-65">
        오늘 도리한테 들었던 말들은 역대급이었다. ‘그건 너가 잘못해서 그래’ 라니..
      </h3>
      <div className="flex items-end justify-between">
        <div className="flex flex-wrap items-center">
          {tags.map((tag) => (
            <div className="mr-[6px] mt-[1px]" key={tag}>
              <TagLabel label={tag} />
            </div>
          ))}
        </div>
        <img src="images/emoji/emoji1-small.svg" alt="" />
      </div>
    </div>
  );
};
export default Diary;
