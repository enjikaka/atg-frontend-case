export interface GamesResponse {
	"@type": string;
	id: string;
	status: string;
	pools: Pools;
	races: Race[];
	currentVersion: number;
	newBettingSystem: boolean;
	type: string;
}

export interface Pools {
	V75: V75;
}

export interface V75 {
	"@type": string;
	id: string;
	status: string;
	timestamp: string;
	turnover: number;
	addOns: string[];
	result: Result;
	betType: string;
	harry: boolean;
	systemCount: number;
	payouts: Payouts2;
	jackpotAmount: number;
	potentialPayoutRaceId: string;
}

export interface Result {
	"@type": string;
	payouts: Payouts;
	boostInfo: BoostInfo;
}

export interface Payouts {
	"5": N5;
	"6": N6;
	"7": N7;
}

export interface N5 {
	systems: number;
	jackpot: boolean;
}

export interface N6 {
	systems: number;
	payout: number;
}

export interface N7 {
	systems: number;
	payout: number;
}

export interface BoostInfo {
	boostCode: string;
	boostPayouts: BoostPayout[];
	resultComplete: boolean;
}

export interface BoostPayout {
	correct: number;
	amount: number;
	multiplier: number;
}

export interface Payouts2 {
	"5": number;
	"6": number;
	"7": number;
}

export interface Race {
	id: string;
	name: string;
	date: string;
	number: number;
	distance: number;
	startMethod: string;
	startTime: string;
	scheduledStartTime: string;
	prize: string;
	terms: string[];
	sport: string;
	track: Track;
	result: Result2;
	status: string;
	mediaId: string;
	pools: Pools2;
	starts: Start[];
	mergedPools: MergedPool[];
}

export interface Track {
	id: number;
	name: string;
	condition: string;
	countryCode: string;
}

export interface Result2 {
	victoryMargin: string;
	scratchings?: number[];
}

export interface Pools2 {
	vinnare: Vinnare;
	plats: Plats;
	tvilling: Tvilling;
	komb: Komb;
	trio: Trio;
	V75: V752;
}

export interface Vinnare {
	"@type": string;
	id: string;
	status: string;
	timestamp: string;
	turnover: number;
	result: Result3;
	betType: string;
}

export interface Result3 {
	"@type": string;
	winners: Winner[];
}

export interface Winner {
	number: number;
	odds: number;
}

export interface Plats {
	"@type": string;
	id: string;
	status: string;
	timestamp: string;
	turnover: number;
	result: Result4;
	betType: string;
}

export interface Result4 {
	"@type": string;
	winners: Winners;
}

export interface Winners {
	first: First[];
	second: Second[];
	third: Third[];
}

export interface First {
	number: number;
	odds: number;
}

export interface Second {
	number: number;
	odds: number;
}

export interface Third {
	number: number;
	odds: number;
}

export interface Tvilling {
	"@type": string;
	id: string;
	status: string;
	timestamp: string;
	turnover: number;
	result: Result5;
	betType: string;
}

export interface Result5 {
	"@type": string;
	winners: Winner2[];
}

export interface Winner2 {
	combination: number[];
	odds: number;
}

export interface Komb {
	"@type": string;
	id: string;
	status: string;
	timestamp: string;
	turnover: number;
	result: Result6;
	betType: string;
}

export interface Result6 {
	"@type": string;
	winners: Winner3[];
}

export interface Winner3 {
	combination: number[];
	odds: number;
}

export interface Trio {
	"@type": string;
	id: string;
	status: string;
	timestamp: string;
	turnover: number;
	result: Result7;
	betType: string;
}

export interface Result7 {
	"@type": string;
	winners: Winner4[];
}

export interface Winner4 {
	combination: number[];
	odds: number;
}

export interface V752 {
	"@type": string;
	result: Result8;
}

export interface Result8 {
	"@type": string;
	systems: string;
	value: Value;
	winners: number[];
	reserveOrder: number[];
}

export interface Value {
	amount: number;
}

export interface Start {
	id: string;
	number: number;
	postPosition: number;
	distance: number;
	horse: Horse;
	driver: Driver;
	result: Result9;
	pools: Pools3;
	videos?: Video[];
	out?: boolean;
	scratched?: boolean;
}

export interface Horse {
	id: number;
	name: string;
	age: number;
	sex: string;
	record: Record;
	trainer: Trainer;
	shoes: Shoes;
	sulky: Sulky;
	money: number;
	color: string;
	homeTrack?: HomeTrack2;
	owner: Owner;
	breeder: Breeder;
	statistics: Statistics2;
	pedigree: Pedigree;
	nationality?: string;
	foreignOwned?: boolean;
}

export interface Record {
	code: string;
	startMethod: string;
	distance: string;
	time: Time;
}

export interface Time {
	minutes: number;
	seconds: number;
	tenths: number;
}

export interface Trainer {
	id: number;
	firstName: string;
	lastName: string;
	shortName: string;
	location: string;
	birth?: number;
	homeTrack?: HomeTrack;
	license: string;
	silks?: string;
	statistics?: Statistics;
}

export interface HomeTrack {
	id: number;
	name: string;
}

export interface Statistics {
	years: Years;
}

export interface Years {
	"2024": N2024;
	"2025": N2025;
}

export interface N2024 {
	starts: number;
	earnings: number;
	placement: Placement;
	winPercentage: number;
}

export interface Placement {
	"3": number;
	"2": number;
	"1": number;
}

export interface N2025 {
	starts: number;
	earnings: number;
	placement: Placement2;
	winPercentage: number;
}

export interface Placement2 {
	"3": number;
	"2": number;
	"1": number;
}

export interface Shoes {
	reported: boolean;
	front?: Front;
	back?: Back;
}

export interface Front {
	hasShoe: boolean;
	changed?: boolean;
}

export interface Back {
	hasShoe: boolean;
	changed?: boolean;
}

export interface Sulky {
	reported: boolean;
	type?: Type;
	colour: Colour;
}

export interface Type {
	code: string;
	text: string;
	engText: string;
	changed: boolean;
}

export interface Colour {
	code: string;
	text: string;
	engText: string;
	changed: boolean;
}

export interface HomeTrack2 {
	id: number;
	name: string;
}

export interface Owner {
	id: number;
	name: string;
	location?: string;
}

export interface Breeder {
	id: number;
	name: string;
	location?: string;
}

export interface Statistics2 {
	years: Years2;
	life: Life;
	lastFiveStarts: LastFiveStarts;
}

export interface Years2 {
	"2024": N20242;
	"2025": N20252;
}

export interface N20242 {
	starts: number;
	earnings: number;
	placement: Placement3;
	records: Record2[];
}

export interface Placement3 {
	"3": number;
	"2": number;
	"1": number;
}

export interface Record2 {
	code: string;
	startMethod: string;
	distance: string;
	time: Time2;
	place: number;
}

export interface Time2 {
	minutes: number;
	seconds: number;
	tenths: number;
}

export interface N20252 {
	starts: number;
	earnings: number;
	placement: Placement4;
	records: Record3[];
}

export interface Placement4 {
	"3": number;
	"2": number;
	"1": number;
}

export interface Record3 {
	code: string;
	startMethod: string;
	distance: string;
	time: Time3;
	place: number;
}

export interface Time3 {
	minutes: number;
	seconds: number;
	tenths: number;
}

export interface Life {
	starts: number;
	earnings: number;
	placement: Placement5;
	records: Record4[];
	winPercentage: number;
	placePercentage: number;
	earningsPerStart: number;
	startPoints: number;
}

export interface Placement5 {
	"3": number;
	"2": number;
	"1": number;
}

export interface Record4 {
	code: string;
	startMethod: string;
	distance: string;
	time: Time4;
	place: number;
	year: string;
}

export interface Time4 {
	minutes: number;
	seconds: number;
	tenths: number;
}

export interface LastFiveStarts {
	averageOdds: number;
}

export interface Pedigree {
	father: Father;
	mother: Mother;
	grandfather: Grandfather;
}

export interface Father {
	id: number;
	name: string;
	nationality?: string;
}

export interface Mother {
	id: number;
	name: string;
	nationality?: string;
}

export interface Grandfather {
	id: number;
	name: string;
	nationality?: string;
}

export interface Driver {
	id: number;
	firstName: string;
	lastName: string;
	shortName: string;
	location: string;
	birth: number;
	homeTrack?: HomeTrack3;
	license: string;
	silks: string;
	statistics?: Statistics3;
}

export interface HomeTrack3 {
	id: number;
	name: string;
}

export interface Statistics3 {
	years: Years3;
}

export interface Years3 {
	"2024": N20243;
	"2025": N20253;
}

export interface N20243 {
	starts: number;
	earnings: number;
	placement: Placement6;
	winPercentage: number;
}

export interface Placement6 {
	"3": number;
	"2": number;
	"1": number;
}

export interface N20253 {
	starts: number;
	earnings: number;
	placement: Placement7;
	winPercentage: number;
}

export interface Placement7 {
	"3": number;
	"2": number;
	"1": number;
}

export interface Result9 {
	place?: number;
	finishOrder: number;
	kmTime?: KmTime;
	prizeMoney?: number;
	finalOdds: number;
	startNumber: number;
	galloped?: boolean;
	disqualified?: boolean;
}

export interface KmTime {
	minutes?: number;
	seconds?: number;
	tenths?: number;
	code?: string;
}

export interface Pools3 {
	vinnare: Vinnare2;
	plats: Plats2;
	V75: V753;
}

export interface Vinnare2 {
	"@type": string;
	odds: number;
	finalOdds?: number;
}

export interface Plats2 {
	"@type": string;
	minOdds: number;
	maxOdds: number;
	odds?: number;
}

export interface V753 {
	"@type": string;
	betDistribution: number;
	potentialPayout?: PotentialPayout;
}

export interface PotentialPayout {
	value?: number;
	jackpot?: boolean;
}

export interface Video {
	mediaId: string;
	timestamp: string;
}

export interface MergedPool {
	name: string;
	betTypes: string[];
}
