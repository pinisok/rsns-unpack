export type HomeCharacterSkinFactory = Array<{
	id: number;
	idCN: string;
	mod: string;
	isInformalData: boolean;
	skinType: number;
	name: string;
	des: string;
	spineDataPath?: string;
	skinPath: string;
	iconPath: string;
	tipsPath: string;
	quality: string;
	character: Array<{
		id: number;
	}>;
	hairType?: string;
	hairList?: Array<{
		hairType: string;
		skinPath: string;
		spineDataPath: string;
	}>;
}>