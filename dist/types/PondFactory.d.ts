export type PondFactory = Array<{
	id: number;
	idCN: string;
	mod: string;
	isInformalData: boolean;
	passengerTypeList?: Array<{
		id: number;
		weight: number;
	}>;
	passengerTagList?: Array<{
		id: number;
		weight: number;
	}>;
	type?: number;
	dec?: string;
	isHighLight?: boolean;
	item?: Array<{
		id: number;
		num: number;
	}>;
	build?: Array<{
		id: number;
		num: number;
	}>;
	divide?: number;
	tax?: number;
	ticket?: number;
	adName?: string;
	adType?: number;
	adIcon?: string;
	adDesc?: number;
	adItem?: Array<{
		id: number;
		num: number;
	}>;
	adPassageTypeList?: Array<{
		id: number;
		weight: number;
	}>;
	adPassageTagList?: Array<{
		id: number;
		weight: number;
	}>;
	adIncome?: Array<{
		adPassageMax: number;
		adPassageMin: number;
		distance: number;
		earning: number;
	}>;
}>