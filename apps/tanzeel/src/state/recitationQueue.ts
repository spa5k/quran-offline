import type { queueAsPromised } from 'fastq';
import fastq from 'fastq';
import { useAtom } from 'jotai';
import { currentlyPlayingRecitationUrlsAtom } from './currentlyPlayingRecitationAtom';

interface Task {
	recitationUrl: string;
}

export const recitationQueue: queueAsPromised<Task> = fastq.promise(asyncWorker, 1);

async function asyncWorker(arg: Task): Promise<void> {
	const [current, setCurrent] = useAtom(currentlyPlayingRecitationUrlsAtom);
	setCurrent({ currentAyah });
	// No need for a try-catch block, fastq handles errors automatically
	console.log(arg.recitationUrl);
}
