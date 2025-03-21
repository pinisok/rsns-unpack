export type ConfigFactory = Array<{
	id: number;
	idCN: string;
	mod: string;
	isInformalData?: boolean;
	nameEN: string;
	clickEffectId?: number;
	mainBG?: string;
	pickGenderIntro?: string;
	pickGenderBG?: string;
	pickGenderSpineBG?: string;
	pickGenderSpine?: string;
	guidanceCirclePath?: string;
	guidanceSquarePath?: string;
	goldItemId?: number;
	bmRockItemId?: number;
	energyItemId?: number;
	resonanceSourceMaterialList?: any[];
	roleLevelMax?: number;
	mainChapter?: any[];
	scoreRankComparison?: Array<{
		rank: string;
		score: number;
	}>;
	collegeChapter?: any[];
	Squad?: Array<{
		defaultSquadName: string;
		unlockLevelId?: number;
	}>;
	soundList?: Array<{
		audioMixerPath: string;
		param: string;
	}>;
	bgmList?: Array<{
		audioMixerPath: string;
		maxVolume: number;
		param: string;
	}>;
	roleVolumeList?: Array<{
		audioMixerPath: string;
		maxVolume: number;
		param: string;
	}>;
	minCameraRot?: number;
	maxCameraRot?: number;
	heightCamera?: number;
	privtCamera?: number;
	offsetZCamera?: number;
	heightScale?: number;
	offsetScale?: number;
	offsetZSpeed?: number;
	rotSpeed?: number;
	FieldOfView?: number;
	MinFieldOfView?: number;
	MaxFieldOfView?: number;
	dayOpenLightTime?: number;
	nightOpenLightTime?: number;
	cam_yaw?: number;
	cam_pitch?: number;
	cam_ViewDistance?: number;
	cam_ViewMasterDistance?: number;
	bestTrainCamera?: number;
	changeSceneEffectTime?: number;
	defaultGender?: number;
	dailyRefreshTime?: string;
	resonanceUnlockLevel?: number;
	activityItem?: number;
	wActivityItem?: number;
	equipmentBag?: number;
	itemBag?: number;
	materialBag?: number;
	furnitureBag?: number;
	playerHeadList?: Array<{
		playerHeadPath: string;
	}>;
	playerSpineList?: Array<{
		id: number;
	}>;
	profilePhotoM?: number;
	profilePhotoW?: number;
	ratioExp?: number;
	levelMax?: number;
	renameCost?: Array<{
		id: number;
		num: number;
	}>;
	gachaRecord?: number;
	equipTagList?: any[];
	stime01?: number;
	slive01?: number;
	slive02?: number;
	sdiff01?: number;
	sdiff02?: number;
	nextTime?: number;
	storeMainList?: Array<{
		id: number;
	}>;
	diamondStoreList?: Array<{
		id: number;
	}>;
	moonStoreList?: Array<{
		id: number;
	}>;
	mainStoreList?: Array<{
		id: number;
		name: string;
		pngNotSelect: string;
		pngSelect: string;
	}>;
	homeStoreList?: any[];
	energyItemList?: Array<{
		id: number;
	}>;
	energyStatementList?: Array<{
		bg: string;
		display: string;
		ratioMax: number;
		ratioMin: number;
		scroll: number;
	}>;
	energyAddNum?: number;
	energyMoneyCost?: Array<{
		id: number;
		num: number;
	}>;
	energyAddMax?: number;
	startAlpha?: number;
	endAlpha?: number;
	alphaTime?: number;
	friendsListMax?: number;
	blacklistMax?: number;
	requestListMax?: number;
	dailyRequestMax?: number;
	searchCD?: number;
	messageBoardMax?: number;
	messageWordMax?: number;
	requestWordMax?: number;
	expSourceMaterialList?: Array<{
		id: number;
	}>;
	storyQuestChapterList?: Array<{
		id: number;
	}>;
	resourceChapterList?: any[];
	testLevelId?: number;
	challengeLevelList?: Array<{
		levelId: number;
		unitId: number;
	}>;
	LoadingTextList?: Array<{
		textId: number;
	}>;
	DropSortList?: Array<{
		id: number;
	}>;
	skinState2Condition?: string;
	skinState2Num?: number;
	coreList?: Array<{
		id: number;
	}>;
	NoticeAdress?: string;
	limitTimes?: number;
	maxTimes?: number;
	BlockTime?: number;
	scaleCoefficient?: number;
	maleSwitchVoice?: number;
	femaleSwitchVoice?: number;
	extractTabX?: number;
	btnConfirmId?: number;
	btnCancelId?: number;
	tipOpenId?: number;
	mainPanelOpenId?: number;
	mainPanelCloseId?: number;
	subPanelOpenId?: number;
	subPanelCloseId?: number;
	warningId?: number;
	swipeId?: number;
	lootId?: number;
	uiBgmList?: Array<{
		PrefabUrl: string;
		soundId: number;
	}>;
	gaizhang?: number;
	huoche?: number;
	choukaN?: number;
	choukaR?: number;
	choukaSR?: number;
	choukaSSR?: number;
	jiesuanN?: number;
	jiesuanR?: number;
	jiesuanSR?: number;
	jiesuanSSR?: number;
	tradeBarginSuccessList?: Array<{
		id: number;
	}>;
	tradeRaiseSuccessList?: Array<{
		id: number;
	}>;
	tradeBargainFailureList?: Array<{
		id: number;
	}>;
	tradeSettlementBuyList?: Array<{
		id: number;
	}>;
	tradeSettlementSell?: number;
	needProfit2?: number;
	tradeSettlementSell30W?: number;
	needProfit3?: number;
	tradeSettlementSell100W?: number;
	electricUp?: number;
	electricBuy?: number;
	gradeUp?: number;
	repLevelUp?: number;
	TradeLevelUp?: number;
	PlotTextChange?: number;
	coreSelect?: number;
	coreRotate?: number;
	expList?: Array<{
		levelUpExp?: number;
		EnergyMax?: number;
		homeEnergyMax?: number;
		levelUpEnergy?: number;
		reduceHomeEnergy?: number;
		bargainRange?: number;
		bargainSuccessRate?: number;
		needExp?: number;
		riseRange?: number;
		riseSuccessRate?: number;
		unlockQuest?: number;
	}>;
	noticeId?: number;
	limitActiveList?: Array<{
		isImportance: boolean;
		isUpdate: boolean;
		lmtID: number;
	}>;
	activeNoticeList?: Array<{
		isImportance: boolean;
		isUpdate: boolean;
		lmtID: number;
	}>;
	systemNoticeList?: Array<{
		isImportance: boolean;
		isUpdate: boolean;
		lmtID: number;
	}>;
	announcementNoticeList?: any[];
	version?: string;
	dailySigninList?: any[];
	activeSigninList?: any[];
	initGold?: number;
	energyMax?: number;
	energyExtraMax?: number;
	nowEnergyMax?: number;
	energyAddCD?: number;
	energyAdd?: number;
	powerStoneCost?: number;
	receptionistId?: number;
	guardId?: number;
	initProfilePhotoList?: any[];
	defaultSkins?: Array<{
		id: number;
		wear: boolean;
	}>;
	roleList?: Array<{
		roleId: number;
	}>;
	teamList?: Array<{
		id?: number;
	}>;
	initQuestList?: Array<{
		id: number;
	}>;
	BattlePassId?: number;
	BattlePassIdList?: Array<{
		id: number;
	}>;
	initFurnitureList?: any[];
	initCoachList?: Array<{
		default: number;
		id: number;
		weapon: number;
	}>;
	trainSpeedInit?: number;
	trainSpeedMinimum?: number;
	trainRushSpeedAdd?: number;
	trainRushTime?: number;
	trainRushInit?: number;
	trainRushLimit?: number;
	trainRushBuyList?: Array<{
		id: number;
		num: number;
	}>;
	goodsSlowDown?: number;
	passengerSlowDown?: number;
	protectCountList?: Array<{
		id: number;
		num: number;
	}>;
	bossProgMutiple?: number;
	maxRandomWaveCount?: number;
	defaultBossHPTemp?: number;
	enemyLvMax?: number;
	battleTagCA?: number;
	battleTagCD?: number;
	battleTagClearCD?: number;
	growthAttributeMultiId?: number;
	victoryDelay?: number;
	knockUpTurnRound?: number;
	frictionSN?: number;
	gravitySN?: number;
	hangTime?: number;
	targetInvisibleDelayFrame?: number;
	sysUnit?: number;
	blockEffectId?: number;
	roleShakeEffectId?: number;
	battleInfoAllyNAId?: number;
	battleInfoAllySAId?: number;
	battleInfoAllyRAId?: number;
	battleInfoAllyHAId?: number;
	battleInfoAllyImmuneId?: number;
	battleInfoAllyAbsorbId?: number;
	battleInfoAllyBAList?: Array<{
		battleInfoId: number;
		rangeSN: number;
	}>;
	battleInfoEnemyNAId?: number;
	battleInfoEnemySAId?: number;
	battleInfoEnemyRAId?: number;
	battleInfoEnemyHAId?: number;
	battleInfoEnemyImmuneId?: number;
	battleInfoEnemyAbsorbId?: number;
	battleInfoEnemyBAList?: Array<{
		battleInfoId: number;
		rangeSN: number;
	}>;
	hpBarPrefab?: string;
	discardAllEffectId?: number;
	cardActiveEffectId?: number;
	attackSignDiagonalId?: number;
	attackSignDirectionId?: number;
	selectRoleAllyId?: number;
	cardChosenEffectId?: number;
	cardChargeEffectId?: number;
	cardChangeEffectId?: number;
	cardDestroyEffectId?: number;
	cardBuffSustainEffectId?: number;
	cardOwnerDeadAppearEffectId?: number;
	cardOwnerDeadEffectId?: number;
	cardOwnerDeadDisappearEffectId?: number;
	cardUseEffectId?: number;
	cardDragEffectId?: number;
	cardAddCostEffectId?: number;
	cardSubCostEffectId?: number;
	arrowUnitEffectId?: number;
	effectArrowTopId?: number;
	handCardStartNum?: number;
	handCardNumMax?: number;
	handCardNumMaxFinal?: number;
	drawCardNumAfterBattle?: number;
	discardBtnDrawCardNum?: number;
	discardBtnCooldownFrame?: number;
	autoDrawCardInterval?: number;
	startCost?: number;
	maxCost?: number;
	costRestorePerFrame_SN?: number;
	leaderCardOffsetYMax?: number;
	leaderCardReadyEffectId?: number;
	leaderCardEnableEffectId?: number;
	leaderCardDisappearEffectId?: number;
	discardBtnAppearEffectId?: number;
	discardBtnEnableEffectId?: number;
	discardBtnDisappearEffectId?: number;
	tagUseOnceId?: number;
	playerBuffRedID?: number;
	playerBuffBlueID?: number;
	playerBuffYellowID?: number;
	playerBuffGreenID?: number;
	playerBuffPurpleID?: number;
	playerBuffEffectRedID?: number;
	playerBuffEffectBlueID?: number;
	playerBuffEffectYellowID?: number;
	playerBuffEffectGreenID?: number;
	playerBuffEffectPurpleID?: number;
	bossWarningId?: number;
	energyFullUnitEffectId?: number;
	energyFullUnitEffect2Id?: number;
	energyFullBarEffectLoopId?: number;
	energyFullEffectShowId?: number;
	energyFullEffectLoopId?: number;
	cardCostNormalID?: number;
	cardCostBuffID?: number;
	cardCostDebuffID?: number;
	cardTypeRedPath?: string;
	cardTypeYellowPath?: string;
	cardTypeGreenPath?: string;
	cardTypeBluePath?: string;
	cardTypePurplePath?: string;
	cardTypeBlackPath?: string;
	cardBackRedPath?: string;
	cardBackYellowPath?: string;
	cardBackGreenPath?: string;
	cardBackBluePath?: string;
	cardBackPurplePath?: string;
	cardBackBlackPath?: string;
	teamCardPath?: string;
	leaderCardBaseCDFrame?: number;
	perCharSpeed?: number;
	upArrow?: string;
	damageDownArrow?: string;
	healDownArrow?: string;
	damageUpBg?: string;
	damageDownBg?: string;
	healUpBg?: string;
	healDownBg?: string;
	specialIcon01?: string;
	specialIcon02?: string;
	specialIcon03?: string;
	specialIcon04?: string;
	adaptResonanceList?: Array<{
		level: number;
		resonance: number;
	}>;
	cardChoosenSoundList?: Array<{
		delayFrame: number;
		soundId: number;
	}>;
	cardUseStartSoundList?: Array<{
		delayFrame: number;
		soundId: number;
	}>;
	cardUseEndSoundList?: Array<{
		delayFrame: number;
		soundId: number;
	}>;
	cardGetStartSoundList?: Array<{
		delayFrame: number;
		soundId: number;
	}>;
	cardGetEndSoundList?: Array<{
		delayFrame: number;
		soundId: number;
	}>;
	cardDropButtonSoundList?: Array<{
		delayFrame: number;
		soundId: number;
	}>;
	cardRefreshSoundList?: Array<{
		delayFrame: number;
		soundId: number;
	}>;
	buffCountDuration?: number;
	buffCountYInterval?: number;
	buffCountList?: Array<{
		buffId: number;
		tagId: number;
	}>;
	damageCountDurarion?: number;
	cutInEffectId?: number;
	cutInInterval?: number;
	combinedWeatherIconPath?: string;
	playerCardAICoreId?: number;
	defaultUseCardActionId?: number;
	CardAILevelId?: number;
	specialIcon05?: string;
	passAnyLevel?: Array<{
		id: number;
	}>;
	passAnyMainLevel?: any[];
	passAnySafeLevel?: Array<{
		id: number;
	}>;
	passAnyDangerLevel?: Array<{
		id: number;
	}>;
	passBylevelId?: Array<{
		id: number;
	}>;
	passByChapterId?: any[];
	passBylevelIdAndGrade?: any[];
	passAnyLevelByGrade?: any[];
	passMainLevelByGrade?: any[];
	passSafeLevelLimitCity?: Array<{
		id: number;
	}>;
	passSafeSideLevelLimitPool?: Array<{
		id: number;
	}>;
	enterCity?: Array<{
		id: number;
	}>;
	upOperation?: any[];
	itemCost?: Array<{
		id: number;
	}>;
	dayLog?: Array<{
		id: number;
	}>;
	passAnyResLevel?: any[];
	energyCost?: any[];
	useShield?: any[];
	dizziness?: any[];
	cure?: any[];
	cardColor?: any[];
	beatAnyEnemy?: Array<{
		id: number;
	}>;
	beatAppointBoss?: Array<{
		id: number;
	}>;
	discard?: any[];
	passAnyHighLevel?: any[];
	skillUp?: any[];
	onceProfit?: Array<{
		id: number;
	}>;
	addProfit?: Array<{
		id: number;
	}>;
	addWeight?: Array<{
		id: number;
	}>;
	addPeople?: Array<{
		id: number;
	}>;
	addDrinkNum?: Array<{
		id: number;
	}>;
	invest?: Array<{
		id: number;
	}>;
	travel?: Array<{
		id: number;
	}>;
	finishOrder?: Array<{
		id: number;
	}>;
	solicitCustomer?: Array<{
		id: number;
	}>;
	priceDownWin?: Array<{
		id: number;
	}>;
	priceUpWin?: Array<{
		id: number;
	}>;
	gainFans?: Array<{
		id: number;
	}>;
	trade?: Array<{
		id: number;
	}>;
	gacha?: any[];
	getAnyCharacter?: Array<{
		id: number;
	}>;
	roleGrade?: Array<{
		id: number;
	}>;
	resonance?: Array<{
		id: number;
	}>;
	awake?: Array<{
		id: number;
	}>;
	eatBento?: Array<{
		id: number;
	}>;
	entertain?: Array<{
		id: number;
	}>;
	trainWash?: Array<{
		id: number;
	}>;
	trainMaintain?: Array<{
		id: number;
	}>;
	trainRepair?: Array<{
		id: number;
	}>;
	trainRemould?: Array<{
		id: number;
	}>;
	carriageBuild?: Array<{
		id: number;
	}>;
	petFeed?: Array<{
		id: number;
	}>;
	aquariumFeed?: Array<{
		id: number;
	}>;
	botanyPlant?: Array<{
		id: number;
	}>;
	buyItem?: Array<{
		id: number;
	}>;
	elecLevelUp?: Array<{
		id: number;
	}>;
	trainLength?: Array<{
		id: number;
	}>;
	receiveOrder?: Array<{
		id: number;
	}>;
	sellItem?: Array<{
		id: number;
	}>;
	sellItemServer?: Array<{
		id: number;
	}>;
	sellItemProfit?: Array<{
		id: number;
	}>;
	shopCostItem?: any[];
	questNum?: number;
	dailyQuestList?: any[];
	apRewardList?: any[];
	getCost?: any[];
	weeklyQuestList?: any[];
	wApRewardList?: any[];
	isOpen?: boolean;
	firstNameList?: Array<{
		firstName: string;
	}>;
	secondNameList?: Array<{
		secondName: string;
	}>;
	notes?: string;
	holidayList?: Array<{
		day: string;
	}>;
	ViewAngle?: number;
	CellX?: number;
	CellZ?: number;
	CellY?: number;
	tileAngleX?: number;
	CoachX?: number;
	CoachZ?: number;
	CoachY?: number;
	passagewayList?: Array<{
		z: number;
	}>;
	CameraY?: number;
	CameraSize?: number;
	CameraZ?: number;
	CameraX?: number;
	HomeCameraY?: number;
	HomeCameraSize?: number;
	HomeCameraZ?: number;
	HomeCameraX?: number;
	HomeDesginCameraY?: number;
	HomeDesginCameraSize?: number;
	HomeDesignCameraZ?: number;
	HomeDesignCameraX?: number;
	HomeDesignFloorCameraY?: number;
	HomeDesignFloorCameraSize?: number;
	HomeDesignFloorCameraZ?: number;
	HomeDesignFloorCameraX?: number;
	HomeCameraSwitchTime?: number;
	CabinConnectWidthCell?: number;
	receiveTimeMin?: number;
	yChangeZ?: number;
	yChangeZFurniture?: number;
	farClipPlane?: number;
	ResponseTime?: number;
	floorTileOffset?: number;
	wallTileOffset?: number;
	focusCameraOffsetZ?: number;
	isOpenGyro?: boolean;
	gyroSpeedRatio?: number;
	gyroBeginRotateLimitY?: number;
	gyroRotateBoundLimitY?: number;
	gyroBeginRotateLimitZ?: number;
	gyroRotateBoundLimitZ?: number;
	fishTankRespondRadius?: number;
	homeCharacterDefaultXAngle?: number;
	cameraDefaultPath?: string;
	cameraEffectPathList?: Array<{
		path: string;
		time: string;
	}>;
	speedRatio?: number;
	furPlaceCamMoveTime?: number;
	characterDefaultHeight?: number;
	CameraMoveSpeed?: number;
	characterScale?: number;
	disRatio?: number;
	timeRatio?: number;
	energyOver?: number;
	disEnergyStart?: number;
	energyStart?: number;
	disEnergyPer?: number;
	energyPer?: number;
	disExpPer?: number;
	expPer?: number;
	goodsOver?: number;
	goodsReduceSpeed?: number;
	dayScale?: number;
	defaultName?: string;
	furnitureCoin?: number;
	tradeCoin?: number;
	conductorM?: number;
	conductorW?: number;
	box?: number;
	yao?: number;
	businessman?: number;
	coachDefaultBgmId?: number;
	levelList?: Array<{
		coachMax: number;
		developmentDegree: number;
	}>;
	creatureBag?: number;
	buildList?: Array<{
		id: number;
	}>;
	coachTypeList?: Array<{
		id: number;
	}>;
	defaultFloor?: number;
	defaultWallpaper?: number;
	CustomTemplateNum?: number;
	themeList?: Array<{
		id: number;
	}>;
	floorTypeList?: Array<{
		id: number;
	}>;
	wallTypeList?: any[];
	furnitureAttrList?: Array<{
		attrName: string;
		field: string;
		iconPath: string;
	}>;
	maxAttractionTipNum?: number;
	attractionTipOffsetX?: number;
	attractionTipOffsetY?: number;
	attractionTipSpacing?: number;
	isTipRepeat?: boolean;
	defaultStation?: number;
	stationList?: Array<{
		id: number;
	}>;
	lineList?: Array<{
		id: number;
	}>;
	cocQuestMax?: number;
	cocAddQuestItemList?: Array<{
		id: number;
		num: number;
	}>;
	cocItemAddQuestNum?: number;
	homeEnergyItemId?: number;
	homeEnergyAddCD?: number;
	homeEnergyAdd?: number;
	upgradeOrderTimes?: number;
	upgradeOrderValue?: number;
	orderCost?: Array<{
		id: number;
		num: number;
	}>;
	homeEnergyItemList?: Array<{
		id: number;
	}>;
	homeEnergyStatementList?: Array<{
		arrow: string;
		bg: string;
		face: string;
		faceSpine: string;
		lightIcon: string;
		ratioMax: number;
		ratioMin: number;
		stateText: number;
		tipImg?: string;
		tipText?: number;
	}>;
	freeOrderTimes?: number;
	orderTimeList?: Array<{
		id: number;
		time: string;
	}>;
	normalOrder?: number;
	foodBag?: number;
	loveBentoLevel?: number;
	loveBentoPr?: number;
	loveBentoMax?: number;
	loveBentoPrMax?: number;
	loveBentoPrMin?: number;
	rateBento?: Array<{
		id: number;
		num: number;
	}>;
	eatPrefab?: string;
	eatEffect?: string;
	playerEatAni?: Array<{
		animation: string;
	}>;
	memberEatAni?: string;
	memberTrustAddtion?: number;
	dressTypeOrder?: Array<{
		id: number;
	}>;
	defaultDressType?: number;
	stickerCost?: Array<{
		id: number;
		num: number;
	}>;
	HBPStoreList?: Array<{
		id: number;
	}>;
	costNum?: Array<{
		id: number;
		num: number;
	}>;
	headWeaponNum?: number;
	bodyWeaponNum?: number;
	weaponBag?: number;
	initGrade?: number;
	gradelist?: Array<{
	}>;
	costItemList?: any[];
	selectNum?: number;
	overflowtime?: number;
	ReduceCleanliness?: number;
	stackingquantity?: number;
	CompressNum?: number;
	CompressTime?: number;
	autoModeLevel?: number;
	secondOpenLevel?: number;
	thirdOpenLevel?: number;
	openLevelList?: Array<{
		Level: number;
		Num: number;
	}>;
	passengerMinimum?: number;
	trainlong?: number;
	trainlength?: number;
	distanceone?: number;
	distancetwo?: number;
	distancethree?: number;
	presetquantity?: number;
	coefficientone?: number;
	coefficienttwo?: number;
	coefficientthree?: number;
	repairpriceList?: Array<{
		id: number;
		num: number;
	}>;
	autorepair?: number;
	maintaindistance?: number;
	maintainpriceList?: Array<{
		id: number;
		num: number;
	}>;
	slowdown?: number;
	cleannum?: number;
	Unitdistance?: number;
	Reduceclean?: number;
	cleancoefficientone?: number;
	cleancoefficienttwoList?: Array<{
		id: number;
		num: number;
	}>;
	cleanone?: number;
	cleantwo?: number;
	electricLevelList?: Array<{
		lv: number;
	}>;
	buildSaleList?: Array<{
		discountRange: number;
	}>;
	TrainFactoryScenes?: string;
	OilLevelList?: Array<{
		OilLevel: number;
		OilNum: number;
		id: number;
		speedup: number;
		speeduptime: number;
	}>;
	speedUpList?: Array<{
		Level: number;
		Num: number;
		id: number;
	}>;
	slowDownList?: Array<{
		Level: number;
		Num: number;
		id: number;
	}>;
	normalCarriageList?: Array<{
		id: number;
	}>;
	accessoryList?: Array<{
		id: number;
	}>;
	banCarriageList?: Array<{
		id: number;
	}>;
	successNum?: number;
	timeInterval?: Array<{
		max: number;
		min: number;
	}>;
	eventList?: any[];
	coachCosttwoList?: Array<{
		id: number;
		num: number;
	}>;
	coachCostthreeList?: Array<{
		id: number;
		num: number;
	}>;
	timePermit?: number;
	awardCoefficient?: number;
	onhookAward?: Array<{
		id: number;
		num: number;
	}>;
	typeList?: Array<{
		purifyTime: number;
	}>;
	capsuleList?: Array<{
		id: number;
	}>;
	storeList?: Array<{
		adress?: string;
		name?: string;
	}>;
	expelNum?: number;
	areaList?: Array<{
		id: number;
	}>;
	levelRefreshTime?: string;
	moneyList?: Array<{
		id: number;
		num: number;
	}>;
	offerQuestMax?: number;
	investMoneyList?: Array<{
		id: number;
		num: number;
	}>;
	drinkRefreshType?: string;
	firstDrinkBuff?: number;
	energyEnd?: number;
	shareEnergyEnd?: number;
	returnCoefficient?: number;
	overtime?: number;
	trainHelpCost?: number;
	trainHelpSpeed?: number;
	trainHelpSpeedAdd?: number;
	trainHelpSpeedDec?: number;
	trainHelpDec?: number;
	trainHelpLook?: number;
	weaponCreate?: number;
	difficultyTransMutiple?: number;
	meetCoefficient?: number;
	buyGoldInit?: number;
	balloonItem?: number;
	saleConvertConstruct?: number;
	isPark?: Array<{
		id: number;
	}>;
	highNumMin?: number;
	highNumMax?: number;
	highCoefficient?: number;
	MinShowNum?: number;
	MaxShowNum?: number;
	helpBook?: Array<{
		pic: string;
	}>;
	enumSideList?: Array<{
		tagId: number;
	}>;
	enumJobList?: Array<{
		tagId: number;
	}>;
	enumEquipTypeList?: Array<{
		equipType: number;
	}>;
	commonRareList?: Array<{
		id: number;
	}>;
	trainWeaponTypeList?: Array<{
		id: number;
	}>;
	SkinGetWay?: Array<{
		id: string;
	}>;
	noRarityItem?: Array<{
		Factory: string;
	}>;
	enemyCampEnumList?: Array<{
		id: number;
	}>;
	enemyEnumSideList?: Array<{
		id: number;
	}>;
	enemyStrengthEnumList?: Array<{
		id: number;
	}>;
	bookCharacterSideEnumList?: Array<{
		id: number;
	}>;
	factoryDataList?: Array<{
		factoryName: string;
		propertyName: string;
	}>;
	textReplaceList?: Array<{
		key: string;
		value: string;
	}>;
	electricList?: Array<{
		electric: number;
		id: number;
		slotNum: number;
		speed: number;
	}>;
	buyElectricList?: Array<{
		addSpeed: number;
		electric: number;
		id: number;
	}>;
	constantList?: Array<{
		constantSN: number;
	}>;
	advSkilCardList?: Array<{
		id: number;
	}>;
	advCameraHeigh?: number;
	advCamShakeLevel?: number;
	advCamSkakeTime?: number;
	advCamSkakeFps?: number;
	advOffset?: number;
	advFollow?: number;
	advPointOfView?: number;
	petScoresConfig?: Array<{
		Favorability: number;
		level: number;
		scores: number;
	}>;
	feederLoveUp?: number;
	TouchTimes?: number;
	FavorabilityInt?: Array<{
		Max: number;
		Minimum: number;
	}>;
	DailyFavorability?: number;
	feedCount?: number;
	feedAddition?: number;
	FavorabilityLimit?: number;
	petStateConfig?: Array<{
		petStateBuff: number;
		petStateMax: number;
		petStateMin: number;
		stateName: string;
	}>;
	petPersonalityList?: Array<{
		id: number;
	}>;
	petVarityList?: Array<{
		id: number;
	}>;
	foodItemList?: Array<{
		id: number;
	}>;
	favorItemList?: Array<{
		id: number;
	}>;
	list?: Array<{
		languageDetail: string;
		languageType: string;
		translateResListId: number;
	}>;
	equipMaxLv?: number;
	ChangeNum?: number;
	LevelNum?: number;
	EquipPresetsNum?: number;
	Orange?: number;
	Golden?: number;
	Purple?: number;
	Blue?: number;
	White?: number;
	jewelryEx?: number;
	Coefficient?: number;
	UseNum?: number;
	Weapon?: number;
	Armor?: number;
	Ornaments?: number;
	EquipTypeList?: Array<{
		id: number;
		num: number;
	}>;
	EquipParameterList?: Array<{
		num: number;
	}>;
	skipGuide?: boolean;
	guideList?: Array<{
		guideId: number;
		guideNO?: number;
		id?: number;
		ui?: string;
		unlockQuest?: number;
	}>;
	enterMainUIList?: Array<{
		imagePath: string;
	}>;
	enterHomeUIList?: Array<{
		imagePath: string;
	}>;
	tipsList?: Array<{
		tips: string;
	}>;
	bigWorldTipsList?: Array<{
		tips: string;
	}>;
	disArrive?: number;
	speedReduce?: number;
	speedAdd?: number;
	disReverse?: number;
	speedReverse?: number;
	trainScale?: number;
	trainGap?: number;
	trainTolerance?: number;
	trainShakeTime?: number;
	trainShakeTimeMin?: number;
	trainShakeTimeMax?: number;
	trainShakeStrength?: number;
	offset?: number;
	offsetY?: number;
	strikeTipCd?: number;
	rushDelay?: number;
	isOpenRush?: boolean;
	isOpenChromatism?: boolean;
	chromatismInit?: number;
	chromatismIntensity?: number;
	chromatismTime?: number;
	isOpenLens?: boolean;
	lensIntensity1?: number;
	chromatismTime1?: number;
	lensIntensity2?: number;
	chromatismTime2?: number;
	isOpenViewField?: boolean;
	viewField1?: number;
	viewFieldTime1?: number;
	viewField2?: number;
	viewFieldTime2?: number;
	pullOutTime?: number;
	delayTime?: number;
	pullOutASpeed?: number;
	pullOutSpeedMax?: number;
	accelerationRatio?: number;
	whistleSoundId?: number;
	trainSoundId?: number;
	soundDrive?: number;
	soundBrake?: number;
	soundStop?: number;
	voiceDeparture?: Array<{
		id: number;
		type: string;
	}>;
	voiceDeparturePassenger?: Array<{
		id: number;
		type: string;
	}>;
	voiceWillArrive?: Array<{
		id: number;
		type: string;
	}>;
	voiceWillArrivePassenger?: Array<{
		id: number;
		type: string;
	}>;
	voiceArrive?: Array<{
		id: number;
		type: string;
	}>;
	voiceArrivePassenger?: Array<{
		id: number;
		type: string;
	}>;
	voiceGetIn?: any[];
	voiceGetInPassenger?: any[];
	reversalProbabilityList?: Array<{
		probability: number;
		quotation: number;
	}>;
	activityReversalProbabilityList?: Array<{
		probability: number;
		quotation: number;
	}>;
	trustExpList?: Array<{
		exp: number;
	}>;
	levelTrustExpList?: Array<{
		exp: number;
	}>;
	leaderExtra?: number;
	awakeTrustExpList?: Array<{
		exp: number;
	}>;
	resonanceTrustExpList?: Array<{
		exp: number;
	}>;
	trustExpInterval?: number;
	clientGetExpInterval?: number;
	talkIntervalMin?: number;
	talkIntervalRandom?: number;
	achievePointList?: Array<{
		id: number;
		name: string;
		pngNotSelect: string;
		pngSelect: string;
	}>;
	achieveList?: Array<{
		id: number;
		name: string;
		pngGet: string;
		pngLittle: string;
		pngNotSelect: string;
		pngSelect: string;
		showMax: number;
	}>;
	funcbtnlist?: Array<{
		funcId: number;
		icon: string;
		name: string;
		param: string;
		prefab: string;
	}>;
	mileageMax?: number;
	dashboardList?: Array<{
		changeSpeed: number;
		dashboardPath: string;
		maxSpeed: number;
	}>;
	bgList?: Array<{
		bgPath: string;
		changeTime: string;
	}>;
	Initialquantity?: number;
	CarriagehouseList?: Array<{
		id: number;
		no: number;
		num: number;
	}>;
	PlotReviewList?: Array<{
		ChapterList: number;
	}>;
	funcList?: Array<{
		funcId: number;
		guideId: number;
		iconPath?: string;
		isShow: boolean;
		name: string;
		quest?: number;
		tips?: number;
		playerLevel?: number;
	}>;
	stationPlaceCamX?: number;
	stationPlaceCamY?: number;
	stationPlaceCamZ?: number;
	stationPlaceFieldOfView?: number;
	stationPlaceCamRot?: number;
	specialCamX?: number;
	specialCamY?: number;
	specialCamZ?: number;
	specialCamRot?: number;
	specialFieldOfView?: number;
	camLeft?: number;
	camRight?: number;
	Playerranklist?: Array<{
		id: number;
		level: number;
	}>;
	randomTrainPre?: number;
	showTrainPlayerMin?: number;
	showTrainPlayerMax?: number;
	randomTrainDisBirth?: number;
	randomTrainDisDestroy?: number;
	trainList?: Array<{
		speedAdd: number;
		speedDec: number;
		speedMax: number;
		speedMin: number;
		trainId: number;
		weight: number;
	}>;
	environmentList?: Array<{
		id: number;
	}>;
	trainCameraList?: Array<{
		fieldView?: number;
		isCanMove?: boolean;
		isRushView?: boolean;
		mainPosY: number;
		mainPosZ: number;
		name: string;
		nodePath?: string;
		posX: number;
		posY: number;
		posZ: number;
		rotX: number;
		rotY: number;
	}>;
	lookSpeed?: number;
	linePlyerLv?: number;
	pollutePlyerLv?: number;
	polluteQuestId?: number;
	polluteMin?: number;
	polluteMax?: number;
	pollutePlayerNum?: number;
	polluteAreaList?: Array<{
		id: number;
		weight: number;
	}>;
	isClickPollute?: boolean;
	clickPolluteWeek?: number;
	isClickDungeon?: boolean;
	clickDungeonWeek?: number;
	polluteRegularList?: Array<{
		endTime: string;
		id: number;
		startTime: string;
	}>;
	polluteIconPath?: Array<{
		path: string;
	}>;
	resolutionList?: Array<{
		height: number;
		optionName: string;
	}>;
	driveHorizonList?: Array<{
		horizon: number;
		optionName: string;
	}>;
	textureQualityList?: Array<{
		num: number;
		optionName: string;
	}>;
	everyAndroidDefaultSetList?: Array<{
		defaultBloom: number;
		defaultDriveHorizon: number;
		defaultQuality: number;
		defaultShadow: number;
		defaultTextureQuality: number;
		greyDriveHorizonMin: number;
		greyQualityMin: number;
		greyTextureQualityMin: number;
		isGrey: boolean;
		memory: number;
	}>;
	everyIosDefaultSetList?: Array<{
		defaultBloom: number;
		defaultDriveHorizon: number;
		defaultQuality: number;
		defaultShadow: number;
		defaultTextureQuality: number;
		greyDriveHorizonMin: number;
		greyQualityMin: number;
		greyTextureQualityMin: number;
		isGrey: boolean;
		memory: number;
	}>;
	CVList?: Array<{
		replacePath: string;
	}>;
	LevelLimit?: number;
	FestivalRewardList?: Array<{
		EndDate: string;
		Festival: string;
		FestivalReward: number;
		StartDate: string;
	}>;
	tradeNoteList1?: Array<{
		level: number;
		path: string;
	}>;
	tradeNoteList2?: Array<{
		level: number;
		path: string;
	}>;
	tradeNoteList3?: Array<{
		level: number;
		path: string;
	}>;
	tradeNoteList4?: Array<{
		level: number;
		path: string;
	}>;
	balloonItemList?: Array<{
		id: number;
		isReward: boolean;
	}>;
	polluteBalloonList?: Array<{
		id: number;
	}>;
	typeConstantList?: Array<{
		id: number;
		num: number;
	}>;
	pendantElectricList?: Array<{
		id: number;
	}>;
	strengthList?: Array<{
		gold: number;
		item: number;
		level: number;
	}>;
	coretypeList?: Array<{
		id: number;
	}>;
	monsterList?: Array<{
		id: number;
	}>;
	createTypeList?: Array<{
		id: number;
	}>;
	collisionAngleList?: Array<{
		id: number;
	}>;
	PendantList?: Array<{
		id: number;
	}>;
	solicitOpen?: number;
	solicitQuestOpen?: number;
	passageOpen?: number;
	advertiseOpen?: number;
	advertiseQuestOpen?: number;
	magazineOpen?: number;
	magazineFameOpen?: number;
	channelOpen?: number;
	channelFameOpen?: number;
	standing?: number;
	hardSeat?: Array<{
		price: number;
	}>;
	bunkBed?: Array<{
		price: number;
	}>;
	sleepingBerth?: Array<{
		price: number;
	}>;
	doubleQueenBed?: Array<{
		price: number;
	}>;
	workdayNum?: number;
	OffdayNum?: number;
	leafletAddMax?: number;
	leafletAddPay?: Array<{
		id: number;
		num: number;
	}>;
	uiLadflet?: string;
	leafletMax?: number;
	setTypeNum?: number;
	leafletNum?: number;
	leafletDozen?: number;
	leafletIncome?: Array<{
		adPassageMax: number;
		adPassageMin: number;
		distance: number;
		earning: number;
	}>;
	demandBasics?: number;
	demandOut?: number;
	tickerDistance?: number;
	animatorTime?: number;
	passengeWaste?: number;
	lineWaste?: number;
	runDistance?: number;
	comfort?: string;
	plantScores?: string;
	fishScores?: string;
	petScores?: string;
	foodScores?: string;
	playScores?: string;
	medicalScores?: string;
	arm?: string;
	clean?: string;
	magazineTime?: number;
	tvTime?: number;
	magazineShowNum?: number;
	tvShowNum?: number;
	magazineId?: number;
	tvId?: number;
	leafletEnd?: Array<{
		bubbleIcon: string;
		bubbleId: number;
		endEnId: number;
		endId: number;
		icon: string;
	}>;
	MagazineEnd?: Array<{
		bubbleIcon: string;
		bubbleId: number;
		endEnId: number;
		endId: number;
		icon: string;
	}>;
	tvEnd?: Array<{
		bubbleIcon: string;
		bubbleId: number;
		endEnId: number;
		endId: number;
		icon: string;
	}>;
	stationNum?: number;
	bargainCost?: number;
	bargainMax?: number;
	bargainSuccessRateList?: Array<{
		rate: number;
	}>;
	riseMax?: number;
	riseSuccessRateList?: Array<{
		rate: number;
	}>;
	initBargainSuccessNum?: number;
	initRiseSuccessNum?: number;
	taxConvertRep?: number;
	profitConvertRep?: number;
	tradeConvertDev?: number;
	settlementDays?: number;
	refreshGoods?: Array<{
		id: number;
		num: number;
	}>;
	refreshBargain?: Array<{
		id: number;
		num: number;
	}>;
	buyItemList?: Array<{
		func: string;
		id: number;
		textId?: number;
		isOneOfUs?: boolean;
	}>;
	sellItemList?: Array<{
		func: string;
		id: number;
		textId?: number;
		isOneOfUs?: boolean;
	}>;
	extraQuotation?: number;
	quotationThresholdList?: Array<{
		id: number;
	}>;
	fastQuotationStart?: string;
	fastQuotationEnd?: string;
	rareGoodsInitQMin?: number;
	rareGoodsInitQMax?: number;
	rareGoodsQuotationMin?: number;
	rareGoodsQuotationMax?: number;
	resetQuotationMin?: number;
	resetQuotationMax?: number;
	suddenQuotationList?: Array<{
		num: number;
		sTime: string;
	}>;
	riseQuotationInitMin?: number;
	riseQuotationInitMax?: number;
	dropQuotationInitMin?: number;
	dropQuotationInitMax?: number;
	suddenQuotationMin?: number;
	suddenQuotationMax?: number;
	suddenQMax?: number;
	buyPollutionRatio?: number;
	sellPollutionRatio?: number;
	questQuotationList?: Array<{
		questId: number;
		quotationId: number;
		quotationType: string;
		quotationVal: number;
		stationId: number;
	}>;
	trailerUnlock?: number;
	trailerMaxLv?: number;
	trailerList?: Array<{
		speedAdd: number;
		speedDec: number;
		speedMax: number;
		speedMin: number;
		speedRush: number;
		trailerExtra: number;
		trainId: number;
		weight: number;
	}>;
	trailerUpgradeCost?: Array<{
		id: number;
	}>;
	trailerMax?: number;
	trailerCost?: Array<{
		dis: number;
		mileage: number;
		price: number;
	}>;
	trailerStartTime?: string;
	trailerEndTime?: string;
	trailerFreeCost?: Array<{
		dis: number;
		price: number;
	}>;
	trailerMonthCardMax?: number;
	trailerMonthCardCost?: Array<{
	}>;
	productionFurnitureList?: Array<{
		GetWay: string;
		UIName: string;
		bgPath: string;
		cName: string;
		engName: string;
		id: number;
	}>;
	activeList?: Array<{
		endTime: string;
		id: number;
		isCompleteBottom: boolean;
		name: number;
		png: string;
		sort: number;
		startTime: string;
		tag: number;
		showUI?: string;
	}>;
	questList?: Array<{
		id: number;
	}>;
	qqList?: Array<{
		Adress: string;
		isShow: boolean;
		name: string;
	}>;
	autoBuyRoadLv?: number;
	autoBuyRoadPath?: string;
	autoBuyRoadUnLock?: Array<{
		id: number;
		num: number;
	}>;
	autoRushLv?: number;
	autoRushPath?: string;
	autoRushUnLock?: Array<{
		id: number;
		num: number;
	}>;
	autoStrikeLv?: number;
	autoStrikePath?: string;
	aautoStrikeUnLock?: Array<{
		id: number;
		num: number;
	}>;
	autoFightLv?: number;
	autoFightPath?: string;
	autoFightUnLock?: Array<{
		id: number;
		num: number;
	}>;
	cardPackList?: Array<{
		id: number;
		startTime: string;
	}>;
	activityUiCommon?: Array<{
		id: number;
		passengerIcon: string;
		recycleId: string;
	}>;
}>