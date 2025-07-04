export type BulletFactory = Array<{
	id: number;
	idCN: string;
	mod: string;
	bulletViewId?: number;
	speedX_SN?: number;
	disappearEffectList?: Array<{
		effectId: number;
	}>;
	effectID?: number;
	hitSoundId?: number;
	isInformalData?: boolean;
	appearEffectList?: Array<{
		effectId: number;
	}>;
	scaleTag?: string;
	ySpeedStart_SN?: number;
	ySpeedOffSet_SN?: number;
	isAddSpeedZ?: boolean;
	durationMin?: number;
	damageRadius_SN?: number;
	isFixedPosition?: boolean;
	xOffSetStart_SN?: number;
	xOffSet_SN?: number;
	yOffSetStart_SN?: number;
	yOffSet_SN?: number;
	zOffSetStart_SN?: number;
	zOffSet_SN?: number;
	groundEffectList?: Array<{
		effectId: number;
	}>;
	isGroundEffectUseHitTimes?: boolean;
	groundSoundId?: number;
	isGroundSoundUseHitTimes?: boolean;
	envBuffId?: number;
	hitTimes?: number;
	hitTimesCustomTag?: string;
	intervalFrame?: number;
	isDoBuffOnly?: boolean;
	isHitTargetOnly?: boolean;
	durationFrame?: number;
	xlSN?: number;
	xrSN?: number;
	bRepeated?: boolean;
	hitEffect?: number;
	totalFrame?: number;
	dontBindOwner?: boolean;
	hitFrameList?: Array<{
		hitFrame?: number;
	}>;
	reentrantCount?: number;
	rangeSpeedY_SN?: number;
	rangeShakeFrame?: number;
	frame_SN?: number;
	speedY_SN?: number;
	suspendView?: number;
	frameEvent?: number;
	isForever?: boolean;
	isActive?: boolean;
	showSoundId?: number;
	controllerIndex?: number;
	minAngle?: number;
	maxAngle?: number;
	frameRotation_SN?: number;
	incrementRotation_SN?: number;
	speedVector_SN?: number;
	duration?: number;
	adjustScreenResolution?: boolean;
	useSpecifiedPos?: boolean;
	specifiedPosX_SN?: number;
	specifiedPosY_SN?: number;
	xSpeedSetStart_SN?: number;
	xSpeedOffset_SN?: number;
	startScale?: number;
	finalScale?: number;
	disappearFrame?: number;
	delayFrame?: number;
	useRandomSN?: boolean;
	useRangeRandomSN?: boolean;
}>