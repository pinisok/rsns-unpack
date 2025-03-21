export type BookFactory = Array<{
	id: number;
	idCN: string;
	mod: string;
	isInformalData?: boolean;
	unitList?: Array<{
		id: number;
		serialNum: string;
	}>;
	musicList?: Array<{
		id: number;
	}>;
	pictureList?: Array<{
		id: number;
	}>;
	postcardList?: Array<{
		id: number;
	}>;
	videoList?: Array<{
		id: number;
	}>;
	soundList?: Array<{
		id: number;
	}>;
	profilePhotoList?: Array<{
		id: number;
	}>;
}>