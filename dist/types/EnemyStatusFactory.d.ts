export type EnemyStatusFactory = Array<{
	id: number;
	idCN: string;
	mod: string;
	hpPersent: number;
	moveSpeed: number;
	audioUrl: string;
	weaponid: Array<{
		id: number;
	}>;
	atkRange?: number;
	chaseRange?: number;
	randomDelayTime?: number;
	randomMove?: number;
	randomMoveMinRot?: number;
	randomMoveMaxRot?: number;
	dropFVO?: Array<{
		cnt: number;
		expid: number;
		range: number;
	}>;
}>