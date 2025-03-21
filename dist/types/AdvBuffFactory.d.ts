export type AdvBuffFactory = Array<{
	id: number;
	idCN: string;
	mod: string;
	name: string;
	fxUrl: string;
	audio: number;
	stillTime?: number;
	damage?: number;
	distance?: number;
	downEvery?: number;
	downMax?: number;
	isInformalData?: boolean;
}>