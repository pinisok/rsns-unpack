export type TimeLineFactory = Array<{
	id: number;
	idCN: string;
	mod: string;
	isInformalData: boolean;
	timeLinePath: string;
	x: number;
	y: number;
	z: number;
	actorList: Array<{
		actor: string;
		limitList: number;
		replaceType: string;
	}>;
	lczPathList: Array<{
		lcz: string;
	}>;
	fixedActorList: Array<{
		id: number;
	}>;
	camX?: number;
	camY?: number;
	camZ?: number;
	rotationX?: number;
	fOV?: number;
	processPath?: string;
	cubemap?: string;
	isChangeLighting?: boolean;
	skyColorStr?: string;
	equatorColorStr?: string;
	groundColorStr?: string;
	inTrainMap?: boolean;
	showBtn?: boolean;
	btnX?: number;
	btnY?: number;
	skybox?: string;
	isChangeFog?: boolean;
	isOpenFog?: boolean;
	fogColorStr?: string;
	fogMode?: string;
	density?: number;
	levelId?: number;
}>