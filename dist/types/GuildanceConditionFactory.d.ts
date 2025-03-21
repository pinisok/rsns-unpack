export type GuildanceConditionFactory = Array<{
	id: number;
	idCN: string;
	mod: string;
	isInformalData?: boolean;
	frame?: number;
	cantPause?: boolean;
	hpPercent?: number;
	position_x?: number;
	position_y?: number;
	half_height?: number;
	half_width?: number;
	groundAreaPosition_x?: number;
	scale_x?: number;
	cardList?: Array<{
		cardID: number;
	}>;
	isNot?: boolean;
	cardID?: number;
}>