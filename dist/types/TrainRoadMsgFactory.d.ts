export type TrainRoadMsgFactory = Array<{
	id: number;
	idCN: string;
	mod: string;
	isInformalData: boolean;
	name: string;
	skyBoxPath: string;
	cubeMapPath: string;
	processPath: string;
	fogEnable: boolean;
	fogColor: string;
	fogMode: string;
	fogDensity: number;
	sceneObjectPath: string;
	skyColorStr: string;
	equatorColorStr: string;
	groundColorStr: string;
	viewDistance: number;
	intensityMultiplie: number;
	enableRainbow: boolean;
	rainbowDistance: number;
	rainbowAngle: number;
	effectList: Array<{
		alphaStr: string;
		colorStr: string;
		parentName: string;
	}>;
	inactiveList: Array<{
		effectUrl: string;
	}>;
	waterColorFarStr?: string;
	weatherRateSN?: number;
	weatherList?: Array<{
		weatherId: number;
	}>;
}>