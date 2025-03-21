export type PetFactory = Array<{
	id: number;
	idCN: string;
	mod: string;
	isInformalData: boolean;
	petName: string;
	petIconPath: string;
	petVarity: number;
	petSpecies: number;
	petFoodInt: number;
	wasteoutput: number;
	petBaseScore: number;
	petState: number;
	ties: Array<{
		tiesId: number;
	}>;
	unlockedItem: any[];
	homeCharacter: number;
	des: string;
}>