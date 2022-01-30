import { Grid } from '@chakra-ui/react';
import { ChapterBox } from '../Chapter';

export const ChaptersGrid = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 8];
  return (
    <Grid templateColumns="repeat(5, 1fr)" gap={6} width="full">
      {arr.map(() => (
        <ChapterBox />
      ))}
    </Grid>
  );
};
