export type PassageFactory = Array<{
	id: number;
	idCN: string;
	mod: string;
	isInformalData: boolean;
	star: number;
	type: string;
	gender: number;
	career: number;
	age: number;
	spineUrl: string;
	resUrl: string;
	payNum: number;
	passageDesc: number;
	homePassage: number;
	waste: number;
	tag: Array<{
		id: number;
		weight: number;
	}>;
	comfort: Array<{
		common: number;
		most: number;
		out: number;
		pay: number;
	}>;
	plantScores: Array<{
		common: number;
		most: number;
		out: number;
		pay: number;
	}>;
	fishScores: Array<{
		common: number;
		most: number;
		out: number;
		pay: number;
	}>;
	petScores: Array<{
		common: number;
		most: number;
		out: number;
		pay: number;
	}>;
	foodScores: Array<{
		common: number;
		most: number;
		out: number;
		pay: number;
	}>;
	playScores: Array<{
		common: number;
		most: number;
		out: number;
		pay: number;
	}>;
	medicalScores: Array<{
		common: number;
		most: number;
		out: number;
		pay: number;
	}>;
	arm: Array<{
		common: number;
		most: number;
		out: number;
		pay: number;
	}>;
	clean: Array<{
		common: number;
		most: number;
		out: number;
		pay: number;
	}>;
}>