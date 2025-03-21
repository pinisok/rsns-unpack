export type DictionaryFactory = Array<{
	id: number;
	idCN: string;
	mod: string;
	isInformalData: boolean;
	Card?: Array<{
		Skill: number;
	}>;
	Technical?: Array<{
		id: number;
	}>;
	Control?: Array<{
		id: number;
	}>;
	Defence?: Array<{
		id: number;
	}>;
}>