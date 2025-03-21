export type HomeTemplateFactory = Array<{
	id: number;
	idCN: string;
	mod: string;
	isInformalData: boolean;
	name: string;
	describe: string;
	iconPath: string;
	furnitures: Array<{
		id: number;
		x: number;
		y: number;
		creatures?: number;
	}>;
}>