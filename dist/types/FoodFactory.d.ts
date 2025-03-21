export type FoodFactory = Array<{
	id: number;
	idCN: string;
	mod: string;
	isInformalData: boolean;
	name: string;
	foodImagePath: string;
	des: string;
	energy?: number;
	chefImagePath?: string;
	message?: string;
	rewards?: Array<{
		id: number;
		num: number;
	}>;
	expirationDate?: number;
	foodSettlementImagePath?: string;
	trust?: number;
	PriceIndex?: number;
	mealTypeNum?: number;
	cost?: Array<{
		id: number;
		num: number;
	}>;
	foodRes?: string;
	iconBuffDesMember?: string;
	numBuffDesMember?: number;
	tipBuffDesMember?: number;
	memberTrust?: Array<{
		buff: number;
		id: number;
		like: number;
	}>;
	iconBuffDesLCZ?: string;
	numBuffDesLCZ?: number;
	tipBuffDesLCZ?: number;
	speed?: Array<{
		id: number;
		weight: number;
	}>;
	battleBuffList?: Array<{
		id: number;
		weight: number;
	}>;
	battleBuffImagePath?: string;
	battleBuffDes?: number;
	foodPrefab?: string;
	playerAni?: Array<{
		animation: number;
	}>;
	isPickFood?: boolean;
	foodName?: string;
	npcList?: Array<{
		npcAni: number;
		npcId: number;
	}>;
	performFurnitureList?: Array<{
		furnitureId: number;
		isPerformEffect: boolean;
		normalPath: string;
		performPath: string;
	}>;
	bgmPlay?: number;
}>