export type HomeGoodsQuotationFactory = Array<{
	id: number;
	idCN: string;
	mod: string;
	isInformalData: boolean;
	goodsId: number;
	price: number;
	minQuotation: number;
	maxQuotation: number;
	num: number;
	stockMultipleMin: number;
	stockMultipleMax: number;
	isSudden: boolean;
	needDevelopNum: number;
	needItem: number;
	needItemNum: number;
}>