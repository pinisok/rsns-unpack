export type TranslateFactory = Array<{
	id: number;
	idCN: string;
	mod: string;
	isInformalData: boolean;
	languageType: string;
	resList: Array<{
		path: string;
	}>;
}>