export type SoundFactory = Array<{
	id: number;
	idCN: string;
	mod: string;
	isBindAction: boolean;
	introUrl?: string;
	resUrl?: string;
	isInformalData?: boolean;
	startTime?: number;
	endTime?: number;
	intervalFrame?: number;
	audioMixerPath?: string;
	groupName?: string;
	mute?: boolean;
	bypassEffects?: boolean;
	bypassListenerEffects?: boolean;
	bypassReverbZones?: boolean;
	playOnAwake?: boolean;
	loop?: boolean;
	priority?: number;
	volume?: number;
	pitch?: number;
	stereoPan?: number;
	spatialBlend?: number;
	reverbZoneMix?: number;
	name?: string;
	time?: number;
	unlock?: string;
	list?: Array<{
		sound: number;
	}>;
	condition?: string;
}>