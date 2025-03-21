export type FormulaFactory = Array<{
	id: number;
	idCN: string;
	mod: string;
	isInformalData: boolean;
	drawingname: string;
	drawingItem: number;
	drawingLevel: number;
	drawingQuality: string;
	drawingTime: number;
	doneCost: any[];
	draw: Array<{
		id: number;
		numMax: number;
		numMin: number;
	}>;
	drawForm: Array<{
		id: number;
		num: number;
	}>;
	energyCondition: any[];
	composeCondition: Array<{
		id: number;
		num: number;
	}>;
	isAdded: boolean;
	added: Array<{
		chance: number;
		id: number;
		numMax: number;
		numMin: number;
	}>;
	numLimit: number;
	quantity: number;
	unlockenergyCondition: Array<{
		id: number;
		num: number;
	}>;
	unlock: number;
}>