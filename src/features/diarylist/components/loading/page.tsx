import { Skeleton } from '@chakra-ui/react';

import TagsListSkeleton from '../tags/skeleton';
import DiaryItemSkeleton from './skeleton';

const DiaryListSkeletonPage = () => {
  return (
    <>
      <div className="flex w-full items-center justify-center py-[15px] pl-4 pr-6">
        <img src="/images/icon/ui/back.svg" alt="" className="mr-2" />
        <Skeleton width="90%" borderRadius="8px" height="36px" startColor="#EEEEEE" endColor="#E0E0E0" />
      </div>
      <div className="mb-9 mt-3 px-7">
        <TagsListSkeleton />
      </div>
      <div className="px-6">
        <DiaryItemSkeleton />
        <DiaryItemSkeleton />
        <DiaryItemSkeleton />
        <DiaryItemSkeleton />
      </div>
    </>
  );
};
export default DiaryListSkeletonPage;
