export type LogicFactory = Array<{
	id: number;
	idCN: string;
	mod: string;
	isInformalData: boolean;
	debug: boolean;
	memo: string;
	paramHelp?: string;
	returnType: string;
	pattern?: string;
	logics?: Array<{
		label: string;
		logic: number;
		param0?: string;
		param1?: string;
		param2?: string;
		returnTo: string;
	}>;
	callee?: string;
	pattern2?: string;
	parameters?: any[];
	pattern3?: string;
	scriptPath?: string;
	scriptLabel?: string;
	script?: string;
}>