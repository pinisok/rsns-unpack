export type MapEventFactory = Array<{
	id: number;
	idCN: string;
	mod: string;
	isInformalData: boolean;
	resUrl: string;
	prefabPath?: string;
	uiArgs?: string;
	cameraPath?: string;
	cameraUseTween?: boolean;
	durationFrame?: number;
}>