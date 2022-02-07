import { Flex, HStack, VStack } from '@chakra-ui/react';
import { Outlet, ReactLocation, Router } from 'react-location';
import { getSurahByNumber } from '../../utils/getSurahByNumber';
import { ChapterDisplay } from '../Chapter/ChapterDisplay';
import { NavBar } from '../Navbar';
import { LeftSection, MiddleSection, RightSection } from '.';

export const MainLayout = () => {
	const location = new ReactLocation();

	return (
		<Flex h='100vh' align='center' justify='center' w='full'>
			<VStack h='full' alignItems='flex-start' w='full'>
				<Router
					location={location}
					routes={[
						{
							path: '/',
							element: (
								<HStack h={800}>
									<LeftSection />
									<MiddleSection />
									<RightSection />
								</HStack>
							),
						},
						{
							path: 'surah',
							children: [
								{
									path: ':number',
									element: <ChapterDisplay />,
									loader: async ({ params: { number } }) => ({
										surah: await getSurahByNumber(number),
									}),
								},
							],
						},
					]}
				>
					<NavBar />

					<hr />
					<Outlet />
				</Router>
			</VStack>
		</Flex>
	);
};
