export type SigninFactory = Array<{
	id: number;
	idCN: string;
	mod: string;
	isInformalData: boolean;
	SigninAwardList: Array<{
		itemid: number;
		sealPic: string;
	}>;
	signInTitle?: string;
	year?: number;
	month?: number;
	SigninRewardList: Array<{
		id: number;
		pngMan: string;
		pngWoman: string;
	}>;
	dailysignInTitle?: string;
	totalDays?: number;
	startTime?: string;
	endTime?: string;
	bgPic?: string;
	isResident?: boolean;
}>