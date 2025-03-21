export type BattlePassFactory = Array<{
	id: number;
	idCN: string;
	mod: string;
	isInformalData: boolean;
	topicName: string;
	topicIcon: string;
	topicIconX: number;
	topicIconY: number;
	topicNameEN: string;
	skinIcon: string;
	skinNameIcon: string;
	skinNameIconX: number;
	skinNameIconY: number;
	recommendStoreTabImg: string;
	recommendStoreImg: string;
	PassStartTime: string;
	PassEndTime: string;
	LevelLimit: number;
	bpPrice: Array<{
		bpName: string;
		id: number;
		price: number;
	}>;
	price2: number;
	rewardShow: Array<{
		id: number;
		num: number;
	}>;
	LowextraReward: Array<{
		id: number;
		num: number;
	}>;
	extraReward: Array<{
		id: number;
		num: number;
	}>;
	skinThisSeason: number;
	SpineScale: number;
	SpineX: number;
	SpineY: number;
	SpineBackground: string;
	SpineBGX: number;
	SpineBGY: number;
	SpineBGScale: number;
	PlayerSkinM: string;
	PlayerSkinF: string;
	background: string;
	purchaseBPLevel: Array<{
		id: number;
		num: number;
	}>;
	DailyQuest: Array<{
		BPDailyQuest: number;
		QuestSort: number;
	}>;
	weekQuest: Array<{
		BPWeeklyQuest: number;
		QuestSort: number;
	}>;
	weekQuestList: any[];
	PassRewardList: Array<{
		PassLevel: number;
		freeID: number;
		freeNum: number;
		upgradeID: number;
		upgradeNum: number;
	}>;
	RewardPreview: Array<{
		PreviewLevels?: number;
	}>;
	Points: number;
	GapPassRewardList: any[];
}>