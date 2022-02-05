import { Box, Button, ButtonGroup, HStack } from '@chakra-ui/react';

export const SelectionBar = () => (
	<HStack justify='space-between' width='full'>
		<Box>
			<ButtonGroup>
				<Button>1</Button>
				<Button>2</Button>
			</ButtonGroup>
		</Box>
		<HStack>
			<ButtonGroup>
				<Button>Sort Serial</Button>
				<Button>Sort Alphabet</Button>
				<Button>Sort Parah</Button>
			</ButtonGroup>
		</HStack>
	</HStack>
);
