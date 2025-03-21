export type HomeCoachFactory = Array<{
	id: number;
	idCN: string;
	mod: string;
	isInformalData: boolean;
	coachType: number;
	defaultSkin: number;
	CoachX: number;
	CoachZ: number;
	CoachY: number;
	doorOffsetX: number;
	doorLeftFurniture: number;
	doorRightFurniture: number;
	defaultFloor: number;
	defaultWallPaper: number;
	bayInfos: Array<{
		bayFurniture: number;
		bayType: number;
		offsetX: number;
	}>;
	name: string;
	describe: string;
	level: number;
	thumbnail: string;
	thumbnailone: string;
	skinList: Array<{
		id: number;
	}>;
	cannotMove: boolean;
	cannotDecorate: boolean;
	studyNeedLevel: number;
	studyMaterialList: any[];
	nextCoach: number;
	buildMaterialList: Array<{
		id: number;
		num: number;
	}>;
	waittime: number;
	JumptimeList: Array<{
		id: number;
		num: number;
	}>;
	defaultTemplate: number;
	returnMaterialList: any[];
	unlockLevel: number;
	Achieve: number;
	weaponTypeList: Array<{
		id: number;
	}>;
	space: number;
	weaponNum: number;
	accessoryNum: number;
	electricCost: number;
	characterNum: number;
	carriagedurability: number;
	carriageRubbish: number;
	speedEffect: number;
	passengerCapacity: number;
	Armor: number;
}>