export type BackgroundFactory = Array<{
	id: number;
	idCN: string;
	mod: string;
	isInformalData?: boolean;
	resStr: string;
	shakeList?: Array<{
		firstDelay: number;
		intervalRandom: number;
		intervalStart: number;
		shakeEffectId: number;
	}>;
	isLoop?: boolean;
	loopGameObjectName?: string;
	loopGameObjectWidth?: number;
	moveSpeed?: number;
	blendList: any[];
	forbidWeatherList?: Array<{
		weatherId: number;
	}>;
}>