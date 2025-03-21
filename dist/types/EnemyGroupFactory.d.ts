export type EnemyGroupFactory = Array<{
	id: number;
	idCN: string;
	mod: string;
	enemys: Array<{
		id: number;
		probability: number;
	}>;
	refreshTime: number;
	range?: number;
	refreshPer?: number;
	atkRange?: number;
}>