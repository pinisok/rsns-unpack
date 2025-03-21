export type WeatherFactory = Array<{
	id: number;
	idCN: string;
	mod: string;
	resUrl?: string;
	snowLevel?: Array<{
		EmissionPosX: number;
		alpha: number;
		fogRate: number;
		fogSpeedMax: number;
		fogSpeedMin: number;
		invalidParticle: string;
		mainVelocityMax: number;
		mainVelocityMin: number;
		noiseStrength: number;
		rate: number;
		sideVelocityMax: number;
		sideVelocityMin: number;
	}>;
	isInformalData?: boolean;
	combinePath?: string;
	intervalFrame?: number;
	buffId?: number;
	isSkill?: boolean;
	isSecond?: boolean;
	homeid?: number;
	iconResUrl?: string;
	backgroundResUrl?: string;
	weatherName?: string;
	weatherDetailList?: Array<{
		resUrl: string;
		text: string;
	}>;
	WeatherType?: string;
	rainLevel?: Array<{
		rateOverTimeBack: number;
		rateOverTimeFront: number;
		rateOverTimeSplash: number;
		windForce: number;
	}>;
	fogLevel?: Array<{
		rateOverTime: number;
	}>;
	startEffectId?: number;
	endEffectId?: number;
	effectId?: number;
	interval?: number;
	duration?: number;
	radiusSN?: number;
	environIconPath?: string;
	environName?: string;
	environDetail?: string;
	tempenvironName?: string;
	tempenvironDetail?: string;
	isTipTrigger?: boolean;
	postEffectName?: string;
	floatValueList?: Array<{
		key: string;
		value: number;
	}>;
	offsetXSN?: number;
	offsetYSN?: number;
	offsetZSN?: number;
}>