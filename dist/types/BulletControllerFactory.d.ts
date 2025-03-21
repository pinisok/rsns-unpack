export type BulletControllerFactory = Array<{
	id: number;
	idCN: string;
	mod: string;
	isInformalData: boolean;
	offsetX_SN: number;
	offsetY_SN: number;
	offsetZ_SN: number;
	angleX: number;
	angleY: number;
	angleZ: number;
	originAngle: number;
	radius: number;
	maxCount: number;
	isActiveExtraBullet?: boolean;
	speed?: number;
	isForward?: boolean;
}>