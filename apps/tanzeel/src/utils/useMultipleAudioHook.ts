import { useAtom } from 'jotai';
import { useAudio } from 'react-awesome-audio';
import { currentRecitationAtom } from '../state/currentlyPlayingRecitationAtom';

// This hook will take in an array of audio files and play them in order
export const useMultipleAudioHook = (currentAudio: string) => {
	const [currentRecitation, setCurrentRecitation] = useAtom(currentRecitationAtom);

	// This will iterate over the array of audio files and play them in order
	const { isPlaying, play, pause, toggle } = useAudio({
		src: currentAudio,
		onEnded: () => {
			setCurrentRecitation({
				currentAyah: currentRecitation.currentAyah + 1,
				currentSurah: currentRecitation.currentSurah,
			});
		},
	});

	return {
		isPlaying,
		pause,
		play,
		toggle,
	};
};
