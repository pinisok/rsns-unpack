export type ProfilePhotoFactory = Array<{
	id: number;
	idCN: string;
	mod: string;
	isInformalData: boolean;
	name: string;
	quality?: string;
	imagePath: string;
	tipsPath?: string;
	des?: string;
	convertItem: Array<{
		id: number;
		num: number;
	}>;
	sort: number;
}>