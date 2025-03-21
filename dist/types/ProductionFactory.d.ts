export type ProductionFactory = Array<{
	id: number;
	idCN: string;
	mod: string;
	isInformalData: boolean;
	name: string;
	unlock?: number;
	iconPath?: string;
	condition: Array<{
		id: number;
	}>;
}>