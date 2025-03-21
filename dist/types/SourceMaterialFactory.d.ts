export type SourceMaterialFactory = Array<{
	id: number;
	idCN: string;
	mod: string;
	name: string;
	viewId: number;
	quality: string;
	des: string;
	iconPath: string;
	tipsPath: string;
	sort: number;
	endTime: string;
	saletype: string;
	rewardList: Array<{
		id: number;
		num: number;
	}>;
	isInformalData?: boolean;
	breakPath?: string;
	isBreakChange?: boolean;
	breakItemList?: Array<{
		id: number;
		num: number;
	}>;
	isNotDisplayInBag?: boolean;
	Getway?: Array<{
		DisplayName: string;
		FromLevel: number;
		UIName: string;
		Way3: string;
		funcId?: number;
	}>;
	exp?: number;
	cost?: number;
	dayLove?: number;
	petFoodNum?: number;
	petFoodPrice?: number;
	usedPetVarity?: Array<{
		id: number;
	}>;
	addLove?: number;
	equipExp?: number;
	EquipItemType?: number;
}>