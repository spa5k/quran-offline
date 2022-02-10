import { Flex, HStack, VStack } from '@chakra-ui/react';
import { DefaultGenerics, Outlet, ReactLocation, Router } from 'react-location';
import { getSurahByNumber } from '../../utils/getSurahByNumber';
import { NavBar } from '../Navbar';
import { ChapterDisplay } from '../Surah/SurahDisplay';
import { LeftSection, MiddleSection, RightSection } from '.';

export const MainLayout = (): JSX.Element => {
	const location: ReactLocation<DefaultGenerics> = new ReactLocation();

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
