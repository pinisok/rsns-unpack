export type ParagraphFactory = Array<{
	id: number;
	idCN: string;
	mod: string;
	isInformalData: boolean;
	outline?: string;
	isBanSkip?: boolean;
	isGoBack?: boolean;
	isUploadingServe?: boolean;
	nextParagraph?: number;
	hideEnvCamera?: boolean;
	path?: string;
	pattern?: string;
	girlPath?: string;
	girlPattern?: string;
	completeQuest: number;
	isAuto?: boolean;
	showBtnList?: boolean;
	triggerQuest?: number;
	plotList?: Array<{
		plotID: number;
	}>;
	plotListGril?: Array<{
		plotID: number;
	}>;
	DescList?: Array<{
		id: number;
	}>;
}>