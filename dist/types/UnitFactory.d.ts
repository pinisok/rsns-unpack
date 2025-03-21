export type UnitFactory = Array<{
	id: number;
	idCN: string;
	mod: string;
	name: string;
	sideId: number;
	viewId: number;
	controllerId: number;
	isBoss: boolean;
	isDeadNotDisappear: boolean;
	tagList: Array<{
		tagId: number;
	}>;
	hp_SN: number;
	def_SN: number;
	atk_SN: number;
	atkSpeed_SN: number;
	luck_SN: number;
	line?: number;
	subLine?: number;
	costRestore_SN?: number;
	actionStandID: number;
	actionMoveID: number;
	actionAttackedID: number;
	actionAttackedBackID: number;
	actionKnockUpID: number;
	actionStunID: number;
	actionDeadID: number;
	hitPointX_SN: number;
	hitPointY_SN: number;
	hitAreaX_SN: number;
	hitAreaY_SN: number;
	hitAreaHalfWidth_SN: number;
	hitAreaHalfHeight_SN: number;
	isInformalData?: boolean;
	EnglishName?: string;
	skinList?: Array<{
		unitViewId?: number;
	}>;
	bulletControllerList?: Array<{
		controllerId: number;
	}>;
	bossHpTemp?: number;
	isFly?: boolean;
	originFlyYSN?: number;
	randomOffsetFlyYSN?: number;
	flyOnStraight?: boolean;
	classifyTagList?: any[];
	passiveSkillList?: Array<{
		skillId: number;
	}>;
	isUseCustomCostRestore?: boolean;
	costRestorePerFrame_SN?: number;
	spName?: string;
	specialGiftDes?: string;
	quality?: string;
	allSkillList?: any[];
	skillList?: Array<{
		num: number;
		skillId?: number;
	}>;
	noUpgradeSkillList?: Array<{
		skillId: number;
	}>;
	equipmentSlotList?: Array<{
		tagID?: number;
	}>;
	growthId?: number;
	growthTagList?: Array<{
		growthTagId: number;
	}>;
	skillLvUpList?: any[];
	breakthroughList?: Array<{
		breakthroughId: number;
	}>;
	awakeList?: Array<{
		awakeId: number;
	}>;
	talentList?: Array<{
		talentId: number;
	}>;
	rewardList?: Array<{
		id: number;
		num: number;
	}>;
	actionVictoryID?: number;
	decomposeRewardList?: Array<{
		id: number;
		num: number;
	}>;
	isSpine2?: number;
	homeSkillList?: Array<{
		id: number;
		nextIndex: number;
		resonanceLv: number;
	}>;
	totalCost?: number;
	totalCardNum?: number;
	skillMin?: number;
	homeCharacter?: number;
	stationStoreCharacter?: number;
	gotoBed?: boolean;
	isDoctor?: boolean;
	medicalPoint?: number;
	WasteCoefficient?: number;
	FoodList?: Array<{
		id: number;
		letter: string;
		weight?: number;
	}>;
	ProfilePhotoList?: Array<{
		id: number;
		weight: number;
	}>;
	classifyList?: any[];
	fileList?: Array<{
		file: number;
	}>;
	age?: number;
	gender?: string;
	birthday?: string;
	height?: string;
	birthplace?: string;
	ability?: string;
	identity?: string;
	basic?: string;
	ResumeList?: Array<{
		des: string;
	}>;
	StoryList?: any[];
	CvName?: string;
	getCharacter?: string;
	safeInformation?: string;
	unitInformation?: string;
	isNeutral?: boolean;
	isCantBeHit?: boolean;
	isImmuneAlly?: boolean;
	isImmuneEnemy?: boolean;
	ownerDeadAddBuffID?: number;
	deadAddBuffToOwner?: number;
	fightEndBuffId?: number;
	enemyDrop?: Array<{
		id: number;
	}>;
	abilityList?: Array<{
		id: number;
	}>;
	weaknessList?: Array<{
		id: number;
	}>;
	resistanceList?: Array<{
		id: number;
	}>;
	enemyType?: number;
	enemyCamp?: number;
	battleDes?: string;
	enemyBookId?: number;
	normalDes?: string;
	lineDes?: string;
	armorDes?: string;
	riskDes?: string;
}>