import { Box } from '@chakra-ui/react';

import DiaryItemSkeleton from './skeleton';

const DiaryListSkeletonCard = () => {
  return (
    <>
      <Box className="mb-3">
        <DiaryItemSkeleton />
      </Box>
      <Box className="mb-3">
        <DiaryItemSkeleton />
      </Box>
    </>
  );
};
export default DiaryListSkeletonCard;
