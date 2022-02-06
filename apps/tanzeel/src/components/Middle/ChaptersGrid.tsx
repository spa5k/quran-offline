import { Wrap } from '@chakra-ui/react';
import { ChapterBox } from '../Chapter';

export const ChaptersGrid = () => {
	const arr = [1, 2, 3, 4, 5, 6, 7, 8, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 8];
	return (
		<Wrap spacing='30px'>
			{arr.map((_, index) => <ChapterBox number={index + 1} />)}
		</Wrap>
	);
};
