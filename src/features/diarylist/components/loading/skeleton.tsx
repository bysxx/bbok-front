import { Box, Skeleton, SkeletonCircle, Stack } from '@chakra-ui/react';

const DiaryItemSkeleton = () => {
  return (
    <Box className="my-3 flex size-full flex-col rounded-md bg-gray-10 p-5">
      <Stack padding={1} spacing={2}>
        <Skeleton width="90%" borderRadius="10px" height="22px" startColor="#EEEEEE" endColor="#E0E0E0" />
        <Skeleton width="80%" borderRadius="10px" height="22px" startColor="#EEEEEE" endColor="#E0E0E0" />
        <Box className="flex flex-row items-center justify-between">
          <Skeleton width="40%" borderRadius="10px" height="22px" startColor="#EEEEEE" endColor="#E0E0E0" />
          <SkeletonCircle width="40px" startColor="#EEEEEE" height="40px" endColor="#E0E0E0" />
        </Box>
      </Stack>
    </Box>
  );
};
export default DiaryItemSkeleton;
