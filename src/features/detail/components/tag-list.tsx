import TagLabel from '@components/tag-label';

const TagList = ({ tags }: { tags: string[] }) => {
  return (
    <div className="pt-8">
      <h5 className="text-lg font-semibold">태그</h5>
      <div className="mt-3 flex items-center justify-start">
        {tags.map((tag: any) => (
          <div className="mr-2" key={tag}>
            <TagLabel label={tag} type="orange" />
          </div>
        ))}
      </div>
    </div>
  );
};
export default TagList;
