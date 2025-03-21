export type TextFactory = Array<{
	id: number;
	idCN: string;
	mod: string;
	isInformalData?: boolean;
	text: string;
	isReplace?: boolean;
	replaceType?: string;
	playerNameString?: string;
	stationString?: string;
	goodsString?: string;
	noDataString?: string;
	pfp?: string;
}>