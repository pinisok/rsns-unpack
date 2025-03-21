export type HomeSkillFactory = Array<{
	id: number;
	idCN: string;
	mod: string;
	isInformalData: boolean;
	name: string;
	desc: string;
	tag: number;
	sort: number;
	homeSkillType: string;
	param: number;
	isReplace?: boolean;
	isPCT: boolean;
	city?: number;
	goodsList?: Array<{
		id: number;
	}>;
}>