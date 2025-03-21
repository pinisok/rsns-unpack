export type LeaderCardConditionFactory = Array<{
	id: number;
	idCN: string;
	mod: string;
	isInformalData?: boolean;
	progressMax: number;
	cardId?: number;
	condition?: string;
	cost_SN?: number;
	isContinuous?: boolean;
	tagList?: Array<{
		tagId: number;
	}>;
	tagType?: string;
	isContinue?: boolean;
	reverseTagList?: Array<{
		tagId: number;
	}>;
	reverseTagType?: string;
	isTimeProg?: boolean;
	progAddNum?: number;
	buffOwnerId?: number;
	OnlyEnemy?: boolean;
	targetType?: string;
	isIncludeDeck?: boolean;
	isIncludeHand?: boolean;
	isIncludeGrave?: boolean;
	judgeType?: string;
	cardNum?: number;
	isOnlyDeck?: boolean;
	buffFO?: number;
	isPositive?: boolean;
	isNegative?: boolean;
}>