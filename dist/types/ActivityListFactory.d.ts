export type ActivityListFactory = Array<{
	id: number;
	idCN: string;
	mod: string;
	isInformalData: boolean;
	stationList?: Array<{
		id: number;
	}>;
	materialList?: Array<{
		id: number;
	}>;
	passengerBufflList?: Array<{
		id?: number;
	}>;
	goodsList?: Array<{
		buyQuotationMax: number;
		buyQuotationMin: number;
		buyStationList: number;
		goodsId: number;
		sellQuotationMax: number;
		sellQuotationMin: number;
		sellStationList: number;
	}>;
	recycleCityList?: Array<{
		cityId: number;
		highCoefficient: number;
		materialList: number;
	}>;
	isChangeLeaflet?: boolean;
	isChangePond?: boolean;
	activityLeafletNum?: number;
	activityPassengerList?: Array<{
		activityPond: number;
		activityPondNum: number;
		cityId: number;
		desc: string;
	}>;
	activityGradeList?: Array<{
		id: number;
	}>;
	activityTriggerList?: Array<{
		id: number;
	}>;
	levelList?: Array<{
		id: number;
	}>;
}>