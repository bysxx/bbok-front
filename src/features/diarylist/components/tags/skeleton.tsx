import { Skeleton } from '@chakra-ui/react';

const TagsListSkeleton = () => {
  return (
    <div className="flex items-center gap-2">
      <Skeleton borderRadius="6px" width="50px" height="30px" startColor="#EEEEEE" endColor="#E0E0E0" />
      <Skeleton borderRadius="6px" width="50px" height="30px" startColor="#EEEEEE" endColor="#E0E0E0" />
      <Skeleton borderRadius="6px" width="50px" height="30px" startColor="#EEEEEE" endColor="#E0E0E0" />
      <Skeleton borderRadius="6px" width="50px" height="30px" startColor="#EEEEEE" endColor="#E0E0E0" />
      <Skeleton borderRadius="6px" width="50px" height="30px" startColor="#EEEEEE" endColor="#E0E0E0" />
      <Skeleton borderRadius="6px" width="50px" height="30px" startColor="#EEEEEE" endColor="#E0E0E0" />
      <Skeleton borderRadius="6px" width="50px" height="30px" startColor="#EEEEEE" endColor="#E0E0E0" />
    </div>
  );
};
export default TagsListSkeleton;
