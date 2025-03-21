export type HomeChatBubbleFactory = Array<{
	id: number;
	idCN: string;
	mod: string;
	chatList: Array<{
		id: number;
		origin: number;
	}>;
	isInformalData?: boolean;
	chatNumber?: number;
	chatSpecifyList?: Array<{
		id: number;
		origin: number;
	}>;
}>