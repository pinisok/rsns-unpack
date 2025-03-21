export type HomeCharacterFactory = Array<{
	id: number;
	idCN: string;
	mod: string;
	isInformalData?: boolean;
	resDir: string;
	aiTree: string;
	trainmanTree: string;
	catchWalk: string;
	catchTree: string;
	moveSpeed: number;
	moveSpeedY: number;
	characteristicList: Array<{
		id: number;
	}>;
	favoriteCoachList: any[];
	favoriteFurnitureList: any[];
	favoriteCharacterList: Array<{
		id: number;
		weight: number;
	}>;
	dislikeFurniture: Array<{
		id: number;
	}>;
	dislikeCharacter: any[];
	sex: string;
	sexualOrientation: string;
	chatGroupList?: Array<{
		id: number;
		weight: number;
	}>;
	shadowResDir?: string;
	shadowScaleX?: number;
	shadowScaleY?: number;
	noonTimeBegin?: string;
	noonTimeEnd?: string;
	nightTimeBegin?: string;
	nightTimeEnd?: string;
	speakDefaultList?: Array<{
		id: number;
	}>;
	name?: string;
	interactiveIconPath?: string;
	minTime?: number;
	maxTime?: number;
	infoTree?: string;
	bgPath?: string;
	defaultSkins?: Array<{
		id: number;
	}>;
	nudeSkins?: Array<{
		id: number;
	}>;
	resStatePath?: Array<{
		path: string;
		state: number;
	}>;
	spineAnimationInfos?: any[];
	produceNum?: number;
	iconPath?: string;
	des?: string;
	PetMood?: number;
	PetFoodInt?: number;
	Favorability?: Array<{
		id: number;
		num: number;
		weight: number;
	}>;
	upgradeList?: Array<{
		id: number;
	}>;
	PetExpSourceMaterialList?: Array<{
		id: number;
	}>;
	comfort?: number;
	plantScores?: number;
	fishScores?: number;
	petScores?: number;
	foodScores?: number;
	playScores?: number;
	medicalScores?: number;
	rest?: string;
	stand?: string;
	eat?: string;
	petInteractionList?: Array<{
		interaction: string;
	}>;
	petID?: number;
}>