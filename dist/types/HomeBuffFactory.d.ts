export type HomeBuffFactory = Array<{
	id: number;
	idCN: string;
	mod: string;
	isInformalData: boolean;
	name: string;
	desc: string;
	buffType?: string;
	param?: number;
	continueTime: number;
	indexSpeedMin?: number;
	indexSpeedMax?: number;
	intensifyDesc?: string;
	intensifyParam?: number;
	indexTrust?: number;
	goodsList?: Array<{
		id: number;
	}>;
	endTime?: string;
	battleBuff?: number;
	showIcon?: string;
	leafletType?: string;
}>