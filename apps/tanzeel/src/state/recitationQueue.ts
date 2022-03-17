import type { queueAsPromised } from 'fastq';
import fastq from 'fastq';
import { useAtom } from 'jotai';
import { currentRecitationAtom } from './currentlyPlayingRecitationAtom';

interface Task {
	recitationUrl: string;
}

export const recitationQueue: queueAsPromised<Task> = fastq.promise(asyncWorker, 1);

async function asyncWorker(arg: Task): Promise<void> {
	const [current, setCurrent] = useAtom(currentRecitationAtom);
	setCurrent({ currentAyah: current.currentAyah + 1, currentSurah: current.currentSurah + 1 });
	console.log(`Recitation ${arg.recitationUrl} started`);
}
// , recitationUrl: arg.recitationUrl
