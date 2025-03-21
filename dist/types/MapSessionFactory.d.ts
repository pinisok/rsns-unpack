export type MapSessionFactory = Array<{
	id: number;
	idCN: string;
	mod: string;
	isInformalData: boolean;
	cameraPath: string;
	rotationMinX: number;
	rotationMaxX: number;
	rotationMinY: number;
	rotationMaxY: number;
	durationFrame: number;
	onInitId: number;
	onInitArgs: string;
	onEnterId: number;
	onEnterArgs: string;
	onLeaveId: number;
	onLeaveArgs: string;
	cameraData?: string;
	singleOnInit?: boolean;
	singleOnEnter?: boolean;
	onLeaveActon?: string;
	needWinlevel?: number;
	onLevelWinOpenSession?: number;
	mapNeedleList?: Array<{
		id: number;
	}>;
}>