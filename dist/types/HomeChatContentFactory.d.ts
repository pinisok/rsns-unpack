export type HomeChatContentFactory = Array<{
	id: number;
	idCN: string;
	mod: string;
	words: string;
	chatTime: number;
	faceName: string;
	faceTime: number;
	waitTime: number;
	isInformalData?: boolean;
	emojiName?: string;
	emojiTime?: number;
	actionName?: string;
	actionTime?: number;
}>