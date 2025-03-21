export type HomeGoodsFactory = Array<{
	id: number;
	idCN: string;
	mod: string;
	isInformalData: boolean;
	name: string;
	des: string;
	quality: string;
	imagePath: string;
	tipsPath: string;
	isSpeciality: boolean;
	isPollution?: boolean;
	space: number;
	quotationVariation?: number;
	fastQuotationVariation?: number;
	producerList?: Array<{
		id: number;
	}>;
	sort: number;
	Getway: Array<{
		DisplayName: string;
		FromLevel: number;
		UIName: string;
		Way3: string;
		funcId?: number;
	}>;
	price: number;
	costList?: Array<{
		id: number;
		num: number;
	}>;
	rewardsList?: Array<{
		id: number;
		num: number;
	}>;
}>