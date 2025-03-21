export type DataFactory = Array<{
	id: number;
	idCN: string;
	mod: string;
	isInformalData: boolean;
	name: string;
	from?: number;
	tipsDesc?: string;
	desc?: string;
	noteList?: Array<{
		level: number;
		path: string;
	}>;
}>