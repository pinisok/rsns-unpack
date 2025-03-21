export type ControllerFactory = Array<{
	id: number;
	idCN: string;
	mod: string;
	actionList: Array<{
		actionID: number;
	}>;
	normalAttackCritID?: number;
	skillList: Array<{
		actionId: number;
		activeFrame: number;
		activeTime: number;
		rangeSN?: number;
	}>;
	isInvisibleBeforeShowUp?: boolean;
	showupSkillList: Array<{
		actionId: number;
	}>;
	skillLoopDelayFrame: number;
	shapeShiftList: Array<{
		controllerID?: number;
		hpPercentSN?: number;
	}>;
	commandList?: Array<{
		actionID: number;
	}>;
	isUseEnergy?: boolean;
	energySkillList?: Array<{
		actionId: number;
		isClearEnergy?: boolean;
		rangeSN?: number;
	}>;
	energyRestorePerFrameSN?: number;
	isInformalData?: boolean;
	targetInvisibleEffectId?: number;
	effectOffsetX?: number;
	effectOffsetY?: number;
	enemySkillList?: Array<{
		skillListId: number;
	}>;
	isSkillDelay?: boolean;
	minDelay?: number;
	maxDelay?: number;
}>