export type EnemyWaveFactory = Array<{
	id: number;
	idCN: string;
	mod: string;
	isInformalData: boolean;
	effectBeforeBattleId: number;
	delayFrame: number;
	lv?: number;
	awake?: number;
	resonance?: number;
	enemyList: Array<{
		atkRateSN: number;
		controllerId?: number;
		defRateSN: number;
		enemyListId?: number;
		hpRateSN: number;
		id: number;
		x_SN: number;
		z_SN: number;
	}>;
	startGuildanceList: Array<{
		guildanceID: number;
	}>;
	goingGuildanceList: Array<{
		guildanceID: number;
	}>;
	finishGuildanceList: Array<{
		guildanceID: number;
	}>;
	waveAfter?: boolean;
	dropTableList?: Array<{
		listId: number;
	}>;
}>