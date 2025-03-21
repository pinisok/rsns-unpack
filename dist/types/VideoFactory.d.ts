export type VideoFactory = Array<{
	id: number;
	idCN: string;
	mod: string;
	name: string;
	videoPath: string;
	coverPath?: string;
	width: number;
	height: number;
	isInformalData?: boolean;
}>