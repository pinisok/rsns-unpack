export type NPCFactory = Array<{
	id: number;
	idCN: string;
	mod: string;
	isInformalData: boolean;
	name: string;
	spineUrl: string;
	spineOffsetX: number;
	spineOffsetY: number;
	spineScale: number;
	resUrl: string;
	offsetX: number;
	offsetY: number;
	enterText: Array<{
		id: number;
		reputation?: number;
		weight: number;
		activityId?: number;
		endTime?: string;
		startTime?: string;
	}>;
	talkText: Array<{
		id: number;
		reputation?: number;
		weight: number;
		activityId?: number;
		endTime?: string;
		startTime?: string;
	}>;
	UseItem: Array<{
		id: number;
		reputation: number;
		weight: number;
	}>;
	ItemText: Array<{
		id: number;
		reputation: number;
		weight: number;
	}>;
	drinkText?: Array<{
		id: number;
		reputation: number;
		weight: number;
	}>;
	StoreText?: Array<{
		id: number;
		reputation: number;
		weight: number;
	}>;
	OneText?: Array<{
		id: number;
		reputation: number;
		weight: number;
	}>;
	upperText?: Array<{
		id: number;
		reputation: number;
		weight: number;
	}>;
	levelListText?: Array<{
		id: number;
		reputation?: number;
		weight: number;
	}>;
	enterOfferText?: any[];
	notEnterOfferText?: any[];
	qResUrl?: string;
	tabBuyText?: Array<{
		id: number;
		weight: number;
		reputation?: number;
	}>;
	tabSellText?: Array<{
		id: number;
		weight: number;
		reputation?: number;
	}>;
	buyDownText?: Array<{
		id: number;
		weight: number;
		reputation?: number;
	}>;
	buyUpText?: Array<{
		id: number;
		weight: number;
		reputation?: number;
	}>;
	buyFlatText?: Array<{
		id: number;
		weight: number;
		reputation?: number;
	}>;
	cancelBuyText?: Array<{
		id: number;
		weight: number;
		reputation?: number;
	}>;
	buySuccessText?: Array<{
		id: number;
		weight: number;
		reputation?: number;
	}>;
	sellDownText?: Array<{
		id: number;
		weight: number;
		reputation?: number;
	}>;
	sellUpText?: Array<{
		id: number;
		weight: number;
		reputation?: number;
	}>;
	sellFlatText?: Array<{
		id: number;
		weight: number;
		reputation?: number;
	}>;
	cancelSellText?: Array<{
		id: number;
		weight: number;
		reputation?: number;
	}>;
	sellSuccessText?: Array<{
		id: number;
		weight: number;
		reputation?: number;
	}>;
	haggleSuccessText?: Array<{
		id: number;
		weight: number;
		reputation?: number;
	}>;
	haggleFailText?: Array<{
		id: number;
		weight: number;
		reputation?: number;
	}>;
	raiseSuccessText?: Array<{
		id: number;
		weight: number;
		reputation?: number;
	}>;
	raiseFailText?: Array<{
		id: number;
		weight: number;
		reputation?: number;
	}>;
	openWarehouseText?: Array<{
		id: number;
		reputation: number;
		weight: number;
	}>;
	buySettlementText?: Array<{
		id: number;
		reputation: number;
		weight: number;
	}>;
	sellSettlementText?: Array<{
		id: number;
		reputation: number;
		weight: number;
	}>;
	animalStoreText?: Array<{
		id: number;
		reputation: number;
		weight: number;
	}>;
	petStoreText?: Array<{
		id: number;
		reputation: number;
		weight: number;
	}>;
	plantStoreText?: Array<{
		id: number;
		reputation: number;
		weight: number;
	}>;
	fishStoreText?: Array<{
		id: number;
		reputation: number;
		weight: number;
	}>;
	petStuffStoreText?: Array<{
		id: number;
		reputation: number;
		weight: number;
	}>;
	petSellText?: Array<{
		id: number;
		reputation: number;
		weight: number;
	}>;
	plantSellText?: Array<{
		id: number;
		reputation: number;
		weight: number;
	}>;
	fishSellText?: Array<{
		id: number;
		reputation: number;
		weight: number;
	}>;
	petStuffSellText?: Array<{
		id: number;
		reputation: number;
		weight: number;
	}>;
	investText?: Array<{
		id: number;
		reputation: number;
		weight: number;
	}>;
	investOneText?: Array<{
		id: number;
		reputation: number;
		weight: number;
	}>;
	investTwoText?: Array<{
		id: number;
		reputation: number;
		weight: number;
	}>;
	investThreeText?: Array<{
		id: number;
		reputation: number;
		weight: number;
	}>;
	investFourText?: Array<{
		id: number;
		reputation: number;
		weight: number;
	}>;
	investFiveText?: Array<{
		id: number;
		reputation: number;
		weight: number;
	}>;
	investSixText?: any[];
	questListText?: Array<{
		id: number;
		weight: number;
		reputation?: number;
	}>;
	questListNullText?: Array<{
		id: number;
		weight: number;
		reputation?: number;
	}>;
	acceptQuestText?: Array<{
		id: number;
		weight: number;
		reputation?: number;
	}>;
	cancelQuestText?: Array<{
		id: number;
		weight: number;
		reputation?: number;
	}>;
	addQuestSuccessText?: Array<{
		id: number;
		weight: number;
		reputation?: number;
	}>;
	notEnoughText?: any[];
	tabBattleText?: Array<{
		id: number;
		reputation: number;
		weight: number;
	}>;
	tabOrderText?: Array<{
		id: number;
		reputation: number;
		weight: number;
	}>;
	orderSuccessText?: Array<{
		id: number;
		reputation: number;
		weight: number;
	}>;
	signText?: Array<{
		id: number;
		reputation: number;
		weight: number;
	}>;
	cancelSignText?: Array<{
		id: number;
		reputation: number;
		weight: number;
	}>;
	discardText?: Array<{
		id: number;
		reputation: number;
		weight: number;
	}>;
	enterExchangeText?: Array<{
		id: number;
		reputation: number;
		weight: number;
	}>;
	enterSaleText?: Array<{
		id: number;
		reputation: number;
		weight: number;
	}>;
	exchangeSuccessText?: Array<{
		id: number;
		reputation: number;
		weight: number;
	}>;
	saleSuccessText?: Array<{
		id: number;
		reputation: number;
		weight: number;
	}>;
	enterRecycleText?: Array<{
		id: number;
		reputation: number;
		weight: number;
	}>;
	recycleSuccessText?: Array<{
		id: number;
		reputation: number;
		weight: number;
	}>;
	rewardGetText?: Array<{
		id: number;
		reputation: number;
		weight: number;
	}>;
}>