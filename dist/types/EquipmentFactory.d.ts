export type EquipmentFactory = Array<{
	id: number;
	idCN: string;
	mod: string;
	isInformalData: boolean;
	name: string;
	quality: string;
	des: string;
	attack_SN: number;
	healthPoint_SN: number;
	defence_SN: number;
	growthId: number;
	SetId: number;
	equipTagId: number;
	campTagId: number;
	skillList: Array<{
		skillId: number;
	}>;
	randomSkillList: Array<{
		skillId: number;
		weight: number;
	}>;
	disappearSkillList: Array<{
		skillId: number;
	}>;
	iconPath: string;
	tipsPath: string;
	Getway: Array<{
		DisplayName: string;
		FromLevel: number;
		UIName: string;
		Way3: string;
		funcId?: number;
	}>;
}>