import { downloadAllAyahsBySurah, downloadAyahRecitation, downloadSurahDetails, downloadSurahInfo, downloadSurahList } from './helpers';

const main = async (): Promise<void> => {
	// Download All Verses Chapter by Chapter
	// const langCodes = ['bn', 'en', 'es', 'fr', 'id', 'ru', 'sv', 'tr', 'ur', 'zh'];
	const lang = 'en';
	// for (const lang of langCodes) {
	await Promise.all([
		downloadSurahList({ lang }),
		downloadSurahInfo({ lang }),
		downloadAllAyahsBySurah({ lang }),
		downloadSurahDetails({ lang }),
		downloadAyahRecitation({ reciter: 'Abdul_Basit_Murattal_64kbps' }),
	]);
	// }
};

main().catch((err) => console.error(err));
