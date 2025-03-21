export type MailFactory = Array<{
	id: number;
	idCN: string;
	mod: string;
	isInformalData?: boolean;
	title: string;
	content: string;
	addresser: string;
	rewards: Array<{
		id: number;
		num: number;
	}>;
	containEquipment: boolean;
	keepDays: number;
	start_Lv?: number;
	end_Lv?: number;
	startTime?: string;
	endTime?: string;
	addresserPath?: string;
	questId?: number;
	eventType?: string;
	nameBtn?: string;
}>