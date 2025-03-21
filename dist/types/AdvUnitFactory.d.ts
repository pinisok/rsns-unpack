export type AdvUnitFactory = Array<{
	id: number;
	idCN: string;
	mod: string;
	name: string;
	modelUrl: string;
	hp: number;
	viewRange: number;
	escRange: number;
	moveRange: number;
	hateTime: number;
	idleTime: number;
	maxCatch: number;
	unitType: string;
	status: Array<{
		id: number;
	}>;
	stoic?: boolean;
	shootPointPath?: string;
	height?: number;
	sizeMin?: number;
	sizeMax?: number;
	atkCoe?: number;
	isBoss?: boolean;
	deathFx?: number;
}>