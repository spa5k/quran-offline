import { Flex, HStack, VStack } from '@chakra-ui/react';
import { DefaultGenerics, Outlet, ReactLocation, Router } from 'react-location';
import { NavBar } from '../Navbar';
import { SurahDisplay } from '../Surah';
import { LeftSection, MiddleSection, RightSection } from '.';

export const MainLayout = (): JSX.Element => {
	const location: ReactLocation<DefaultGenerics> = new ReactLocation();

	return (
		<Flex h='100vh' align='center' justify='center' w='full' minH='full'>
			<VStack h='100%' alignItems='flex-start' w='full' minH='full'>
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
									element: <SurahDisplay />,
									loader: async ({ params: { number } }) => ({
										number,
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
