export type FridgeItemFactory = Array<{
	id: number;
	idCN: string;
	mod: string;
	isInformalData: boolean;
	name: string;
	des: string;
	quality: string;
	iconPath: string;
	tipsPath: string;
	sort: number;
	saletype: string;
	rewardList: any[];
	space: number;
	Getway: Array<{
		DisplayName: string;
		FromLevel: number;
		UIName: string;
		Way3: string;
		funcId?: number;
	}>;
}>