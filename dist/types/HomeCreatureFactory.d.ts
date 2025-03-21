export type HomeCreatureFactory = Array<{
	id: number;
	idCN: string;
	mod: string;
	isInformalData: boolean;
	resDir: string;
	boundX: number;
	boundY: number;
	speed?: number;
	rotateRatio?: number;
	waitProbability?: number;
	waitMinTime?: number;
	waitMaxTime?: number;
	moveTime?: number;
	name: string;
	des: string;
	quality: string;
	tipsPath: string;
	iconPath: string;
	comfort: number;
	plantScores: number;
	fishScores: number;
	petScores: number;
	foodScores: number;
	playScores: number;
	medicalScores: number;
	fishType?: string;
	fishVolume?: number;
	fishGarbage?: number;
	fishMood?: number;
	animationName?: string;
	purifyTime?: number;
	PlantMood?: number;
	rewards?: Array<{
		id: number;
		num: number;
	}>;
}>