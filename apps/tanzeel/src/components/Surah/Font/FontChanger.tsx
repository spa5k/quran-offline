import { Button, ButtonGroup, Flex } from '@chakra-ui/react';
import { useAtom } from 'jotai';
import { changeFontAtom } from '../../../state';

export enum TypesofFonts {
	Uthmani = 'Uthmanic',
	IndoPak = 'IndoPak',
}

export const FontChanger = (): JSX.Element => {
	const [font, setFont] = useAtom(changeFontAtom);
	return (
		<Flex flexDir='column' alignItems='center'>
			<ButtonGroup>
				<Button onClick={() => setFont(TypesofFonts.Uthmani)}>Uthmani</Button>

				<Button onClick={() => setFont(TypesofFonts.IndoPak)}>IndoPak</Button>
			</ButtonGroup>

			<p>Current font - {font}</p>
		</Flex>
	);
};
