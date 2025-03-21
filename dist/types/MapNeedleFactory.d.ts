export type MapNeedleFactory = Array<{
	id: number;
	idCN: string;
	mod: string;
	isInformalData: boolean;
	neddleName: string;
	defaultVisible: boolean;
	neddlePos: string;
	neddleUrl: string;
	triggerOrder: number;
	triggerArgs: string;
	LevelBefore: Array<{
		id: number;
	}>;
	ParagraphBefore: Array<{
		id: number;
	}>;
	LevelConditions: Array<{
		id: number;
	}>;
	QuestConditions: Array<{
		id: number;
	}>;
	ItemConditions: any[];
	EquipmentConditions: any[];
	UnitConditions: Array<{
		id: number;
	}>;
	lvCondition: number;
	justOnce: boolean;
	childNeedle: boolean;
	needleAward: Array<{
		id: number;
		num: number;
	}>;
	isShowUI: boolean;
	icon_x: number;
	icon_y: number;
	iconPath: string;
}>