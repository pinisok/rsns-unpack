export type HomeCoachSkinFactory = Array<{
	id: number;
	idCN: string;
	mod: string;
	isInformalData: boolean;
	dirtySkins: Array<{
		dirtyPercent: number;
		path: string;
	}>;
	leftPointX: number;
	rightPointX: number;
	skinSize: number;
	glassNames: any[];
	homeWeaponPosList: Array<{
		x?: number;
		y?: number;
		z?: number;
	}>;
	name: string;
	skinDetail: string;
	thumbnail: string;
	skinDisplay: string;
	produceMaterialList: Array<{
		id: number;
		num: number;
	}>;
	skinItem?: number;
	coordinate: any[];
	coachType: number;
	jetEffect?: number;
	jetList?: Array<{
		x: number;
		xs: number;
		xx: number;
		y: number;
		ys: number;
		yx: number;
		z: number;
		zs: number;
		zx: number;
	}>;
	visualAngle?: number;
	lightList?: Array<{
		x: number;
		xs: number;
		xx: number;
		y: number;
		ys: number;
		yx: number;
		z: number;
		zs: number;
		zx: number;
	}>;
	sonarList?: Array<{
		x: number;
		xs: number;
		xx: number;
		y: number;
		ys: number;
		yx: number;
		z: number;
		zs: number;
		zx: number;
	}>;
	runeList?: Array<{
		x: number;
		xs: number;
		xx: number;
		y: number;
		ys: number;
		yx: number;
		z: number;
		zs: number;
		zx: number;
	}>;
}>