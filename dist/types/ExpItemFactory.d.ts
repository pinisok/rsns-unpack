export type ExpItemFactory = Array<{
	id: number;
	idCN: string;
	mod: string;
	exp: number;
	stillTime: number;
	timeMin: number;
	timeMax: number;
	modelUrl: string;
	distance: number;
	jumpPower: number;
	jumpNum: number;
	duration: number;
	isInformalData?: boolean;
	diamond?: number;
}>