export type BulletViewFactory = Array<{
	id: number;
	idCN: string;
	mod: string;
	isInformalData?: boolean;
	isNotRotateCoordinate?: boolean;
	isRotate?: boolean;
	isFlip?: boolean;
	resUrl?: string;
	scale?: number;
	aniName?: string;
	isLoop?: boolean;
	sortOrder?: string;
	isPrefab?: boolean;
}>