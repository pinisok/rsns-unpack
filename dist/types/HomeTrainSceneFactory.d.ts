export type HomeTrainSceneFactory = Array<{
	id: number;
	idCN: string;
	mod: string;
	isInformalData: boolean;
	space: number;
	spaceMax: number;
	min: number;
	parts: Array<{
		fid: number;
		rot: number;
		size: number;
		x: number;
		y: number;
		z: number;
	}>;
}>