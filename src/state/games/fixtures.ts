import type { Race } from "./types";

export const mockedGame: Race = {
	id: "2025-05-03_6_5",
	name: "Drottning Silvias Pokal (Gr I Int)",
	date: "2025-05-03",
	number: 5,
	distance: 2140,
	startMethod: "auto",
	startTime: "2025-05-03T16:23:14",
	scheduledStartTime: "2025-05-03T16:20:00",
	prize:
		"Pris: 1.000.000-500.000-250.000-120.000-80.000-50.000 kr (6 prisplacerade). Lägst 1.500 kr till alla tävlande. Prispengar max total: 2.009.000 kr.",
	terms: [
		"4-åriga ston som kvarstår efter sista insatsen. Körsvenskrav kat. 1. Körsvenner födda 070503 eller tidigare.",
		"Åby Travsällskaps hederspris till segrande hästs ägare, tränare, körsven, uppfödare och hästskötare. Hederstäcke och lagerkrans till segrande häst.",
		"2140 m. Autostart. 12 startande. ",
	],
	sport: "trot",
	track: {
		id: 6,
		name: "Åby",
		condition: "light",
		countryCode: "SE",
	},
	result: {
		victoryMargin: "1 längd",
		scratchings: [4],
	},
	status: "results",
	mediaId: "2148097605339",
	pools: {
		vinnare: {
			"@type": ".VinnarePool",
			id: "vinnare_2025-05-03_6_5",
			status: "results",
			timestamp: "2025-05-03 16:28:33",
			turnover: 152396500,
			result: {
				"@type": ".VinnarePoolRaceResult",
				winners: [
					{
						number: 8,
						odds: 2108,
					},
				],
			},
			betType: "vinnare",
		},
		plats: {
			"@type": ".PlatsPool",
			id: "plats_2025-05-03_6_5",
			status: "results",
			timestamp: "2025-05-03 16:28:33",
			turnover: 152396500,
			result: {
				"@type": ".PlatsPoolRaceResult",
				winners: {
					first: [
						{
							number: 8,
							odds: 382,
						},
					],
					second: [
						{
							number: 2,
							odds: 127,
						},
					],
					third: [
						{
							number: 11,
							odds: 1354,
						},
					],
				},
			},
			betType: "plats",
		},
		tvilling: {
			"@type": ".TvillingPool",
			id: "tvilling_2025-05-03_6_5",
			status: "results",
			timestamp: "2025-05-03 16:31:10",
			turnover: 152396500,
			result: {
				"@type": ".TvillingPoolRaceResult",
				winners: [
					{
						combination: [2, 8],
						odds: 2551,
					},
				],
			},
			betType: "tvilling",
		},
		komb: {
			"@type": ".KombPool",
			id: "komb_2025-05-03_6_5",
			status: "results",
			timestamp: "2025-05-03 16:31:10",
			turnover: 152396500,
			result: {
				"@type": ".KombPoolRaceResult",
				winners: [
					{
						combination: [8, 2],
						odds: 9865,
					},
				],
			},
			betType: "komb",
		},
		trio: {
			"@type": ".TrioPool",
			id: "trio_2025-05-03_6_5",
			status: "results",
			timestamp: "2025-05-03 16:31:11",
			turnover: 152396500,
			result: {
				"@type": ".TrioPoolRaceResult",
				winners: [
					{
						combination: [8, 2, 11],
						odds: 287179,
					},
				],
			},
			betType: "trio",
		},
		V75: {
			"@type": ".Pool",
			result: {
				"@type": ".MarkingBetRacePoolResult",
				systems: "112675",
				value: {
					amount: 43500,
				},
				winners: [8],
				reserveOrder: [2, 3, 1, 8, 10, 5, 4, 9, 7, 6, 12, 11],
			},
		},
	},
	starts: [
		{
			id: "2025-05-03_6_5_1",
			number: 1,
			postPosition: 1,
			distance: 2140,
			horse: {
				id: 785149,
				name: "Scarfo Pellini",
				age: 4,
				sex: "mare",
				record: {
					code: "aK",
					startMethod: "auto",
					distance: "short",
					time: {
						minutes: 1,
						seconds: 12,
						tenths: 1,
					},
				},
				trainer: {
					id: 161607,
					firstName: "Björn",
					lastName: "Goop",
					shortName: "Goo Bj",
					location: "Karlstad",
					birth: 1976,
					homeTrack: {
						id: 15,
						name: "Färjestad",
					},
					license: "A-tränare: (Sv/utland): träna, köra",
					silks: "Mblå, guldf.midjeband, sömmar; guld",
					statistics: {
						years: {
							"2024": {
								starts: 913,
								earnings: 1814842800,
								placement: {
									"1": 132,
									"2": 125,
									"3": 120,
								},
								winPercentage: 1445,
							},
							"2025": {
								starts: 235,
								earnings: 580405200,
								placement: {
									"1": 49,
									"2": 47,
									"3": 17,
								},
								winPercentage: 2085,
							},
						},
					},
				},
				shoes: {
					reported: true,
					front: {
						hasShoe: false,
						changed: false,
					},
					back: {
						hasShoe: false,
						changed: false,
					},
				},
				sulky: {
					reported: true,
					type: {
						code: "VA",
						text: "Vanlig",
						engText: "Standard",
						changed: false,
					},
					colour: {
						code: "GU",
						text: "Gul",
						engText: "Yellow",
						changed: false,
					},
				},
				money: 849500,
				color: "mörkbrun",
				homeTrack: {
					id: 15,
					name: "Färjestad",
				},
				owner: {
					id: 824933,
					name: "Hjelte Restaurang AB",
				},
				breeder: {
					id: 535222,
					name: "Pellpac AB",
					location: "Torekov",
				},
				statistics: {
					years: {
						"2024": {
							starts: 10,
							earnings: 67800000,
							placement: {
								"1": 2,
								"2": 4,
								"3": 1,
							},
							records: [
								{
									code: "aK",
									startMethod: "auto",
									distance: "short",
									time: {
										minutes: 1,
										seconds: 12,
										tenths: 1,
									},
									place: 0,
								},
								{
									code: "M",
									startMethod: "volte",
									distance: "medium",
									time: {
										minutes: 1,
										seconds: 16,
										tenths: 1,
									},
									place: 1,
								},
							],
						},
						"2025": {
							starts: 3,
							earnings: 17150000,
							placement: {
								"1": 1,
								"2": 0,
								"3": 0,
							},
							records: [
								{
									code: "aM",
									startMethod: "auto",
									distance: "medium",
									time: {
										minutes: 1,
										seconds: 13,
										tenths: 1,
									},
									place: 4,
								},
							],
						},
					},
					life: {
						starts: 13,
						earnings: 84950000,
						placement: {
							"1": 3,
							"2": 4,
							"3": 1,
						},
						records: [
							{
								code: "aK",
								startMethod: "auto",
								distance: "short",
								time: {
									minutes: 1,
									seconds: 12,
									tenths: 1,
								},
								place: 0,
								year: "2024",
							},
							{
								code: "aM",
								startMethod: "auto",
								distance: "medium",
								time: {
									minutes: 1,
									seconds: 13,
									tenths: 1,
								},
								place: 2,
								year: "2024",
							},
							{
								code: "M",
								startMethod: "volte",
								distance: "medium",
								time: {
									minutes: 1,
									seconds: 16,
									tenths: 1,
								},
								place: 1,
								year: "2024",
							},
						],
						winPercentage: 2307,
						placePercentage: 6153,
						earningsPerStart: 6534615,
						startPoints: 3380,
					},
					lastFiveStarts: {
						averageOdds: 2240,
					},
				},
				pedigree: {
					father: {
						id: 762068,
						name: "Walner",
						nationality: "CA",
					},
					mother: {
						id: 613437,
						name: "Jullan",
					},
					grandfather: {
						id: 484292,
						name: "Juliano Star",
						nationality: "FR",
					},
				},
			},
			driver: {
				id: 161607,
				firstName: "Björn",
				lastName: "Goop",
				shortName: "Goo Bj",
				location: "Karlstad",
				birth: 1976,
				homeTrack: {
					id: 15,
					name: "Färjestad",
				},
				license: "A-tränare: (Sv/utland): träna, köra",
				silks: "Mblå, guldf.midjeband, sömmar; guld",
				statistics: {
					years: {
						"2024": {
							starts: 1211,
							earnings: 3594207000,
							placement: {
								"1": 175,
								"2": 150,
								"3": 155,
							},
							winPercentage: 1445,
						},
						"2025": {
							starts: 330,
							earnings: 837698200,
							placement: {
								"1": 54,
								"2": 62,
								"3": 30,
							},
							winPercentage: 1636,
						},
					},
				},
			},
			result: {
				place: 5,
				finishOrder: 5,
				kmTime: {
					minutes: 1,
					seconds: 12,
					tenths: 4,
				},
				prizeMoney: 80000,
				finalOdds: 7.61,
				startNumber: 1,
			},
			pools: {
				vinnare: {
					"@type": ".VinnareStartPool",
					odds: 761,
				},
				plats: {
					"@type": ".PlatsStartPool",
					minOdds: 185,
					maxOdds: 185,
				},
				V75: {
					"@type": ".MarkingBetStartPool",
					betDistribution: 1263,
				},
			},
			videos: [
				{
					mediaId: "2148075589008",
					timestamp: "2025-05-03T14:56:16",
				},
				{
					mediaId: "2148077637053",
					timestamp: "2025-05-03T15:05:59",
				},
			],
		},
		{
			id: "2025-05-03_6_5_2",
			number: 2,
			postPosition: 2,
			distance: 2140,
			horse: {
				id: 787906,
				name: "Vivillion",
				age: 4,
				sex: "mare",
				record: {
					code: "aM",
					startMethod: "auto",
					distance: "medium",
					time: {
						minutes: 1,
						seconds: 11,
						tenths: 7,
					},
				},
				trainer: {
					id: 189679,
					firstName: "Daniel",
					lastName: "Wäjersten",
					shortName: "Wäj Da",
					location: "Kovland",
					birth: 1990,
					homeTrack: {
						id: 9,
						name: "Bergsåker",
					},
					license: "A-tränare: träna, köra",
					silks: "Blå, vitt axelparti och silver vinkel; blå",
					statistics: {
						years: {
							"2024": {
								starts: 769,
								earnings: 4544982800,
								placement: {
									"1": 205,
									"2": 116,
									"3": 95,
								},
								winPercentage: 2665,
							},
							"2025": {
								starts: 213,
								earnings: 728303900,
								placement: {
									"1": 58,
									"2": 36,
									"3": 26,
								},
								winPercentage: 2723,
							},
						},
					},
				},
				shoes: {
					reported: true,
					front: {
						hasShoe: false,
						changed: false,
					},
					back: {
						hasShoe: false,
						changed: false,
					},
				},
				sulky: {
					reported: true,
					type: {
						code: "AM",
						text: "Amerikansk",
						engText: "American",
						changed: false,
					},
					colour: {
						code: "BL",
						text: "Blå",
						engText: "Blue",
						changed: false,
					},
				},
				money: 3833500,
				color: "mörkbrun",
				homeTrack: {
					id: 9,
					name: "Bergsåker",
				},
				owner: {
					id: 734329,
					name: "Ravitalli H Laakkonen Oy &ML Stable Oy",
				},
				breeder: {
					id: 734329,
					name: "Ravitalli H Laakkonen Oy &ML Stable Oy",
				},
				statistics: {
					years: {
						"2024": {
							starts: 12,
							earnings: 370150000,
							placement: {
								"1": 4,
								"2": 3,
								"3": 0,
							},
							records: [
								{
									code: "aM",
									startMethod: "auto",
									distance: "medium",
									time: {
										minutes: 1,
										seconds: 11,
										tenths: 7,
									},
									place: 1,
								},
								{
									code: "M",
									startMethod: "volte",
									distance: "medium",
									time: {
										minutes: 1,
										seconds: 14,
										tenths: 7,
									},
									place: 1,
								},
							],
						},
						"2025": {
							starts: 2,
							earnings: 13200000,
							placement: {
								"1": 1,
								"2": 0,
								"3": 0,
							},
							records: [
								{
									code: "aM",
									startMethod: "auto",
									distance: "medium",
									time: {
										minutes: 1,
										seconds: 13,
										tenths: 7,
									},
									place: 1,
								},
							],
						},
					},
					life: {
						starts: 14,
						earnings: 383350000,
						placement: {
							"1": 5,
							"2": 3,
							"3": 0,
						},
						records: [
							{
								code: "aM",
								startMethod: "auto",
								distance: "medium",
								time: {
									minutes: 1,
									seconds: 11,
									tenths: 7,
								},
								place: 1,
								year: "2024",
							},
							{
								code: "M",
								startMethod: "volte",
								distance: "medium",
								time: {
									minutes: 1,
									seconds: 14,
									tenths: 7,
								},
								place: 1,
								year: "2024",
							},
						],
						winPercentage: 3571,
						placePercentage: 5714,
						earningsPerStart: 27382142,
						startPoints: 35290,
					},
					lastFiveStarts: {
						averageOdds: 637,
					},
				},
				pedigree: {
					father: {
						id: 745530,
						name: "Propulsion",
						nationality: "US",
					},
					mother: {
						id: 753203,
						name: "Voxy",
						nationality: "US",
					},
					grandfather: {
						id: 702857,
						name: "Explosive Matter",
						nationality: "US",
					},
				},
			},
			driver: {
				id: 189679,
				firstName: "Daniel",
				lastName: "Wäjersten",
				shortName: "Wäj Da",
				location: "Kovland",
				birth: 1990,
				homeTrack: {
					id: 9,
					name: "Bergsåker",
				},
				license: "A-tränare: träna, köra",
				silks: "Blå, vitt axelparti och silver vinkel; blå",
				statistics: {
					years: {
						"2024": {
							starts: 688,
							earnings: 3774642700,
							placement: {
								"1": 156,
								"2": 96,
								"3": 83,
							},
							winPercentage: 2267,
						},
						"2025": {
							starts: 207,
							earnings: 656696500,
							placement: {
								"1": 49,
								"2": 29,
								"3": 27,
							},
							winPercentage: 2367,
						},
					},
				},
			},
			result: {
				place: 2,
				finishOrder: 2,
				kmTime: {
					minutes: 1,
					seconds: 12,
					tenths: 1,
				},
				prizeMoney: 500000,
				finalOdds: 2.34,
				startNumber: 2,
			},
			pools: {
				vinnare: {
					"@type": ".VinnareStartPool",
					odds: 234,
				},
				plats: {
					"@type": ".PlatsStartPool",
					minOdds: 127,
					maxOdds: 127,
					odds: 127,
				},
				V75: {
					"@type": ".MarkingBetStartPool",
					betDistribution: 4121,
				},
			},
			videos: [
				{
					mediaId: "2148080709097",
					timestamp: "2025-05-03T15:13:34",
				},
			],
		},
		{
			id: "2025-05-03_6_5_3",
			number: 3,
			postPosition: 3,
			distance: 2140,
			horse: {
				id: 787053,
				name: "S.G.Empress",
				age: 4,
				sex: "mare",
				record: {
					code: "aK",
					startMethod: "auto",
					distance: "short",
					time: {
						minutes: 1,
						seconds: 11,
						tenths: 5,
					},
				},
				trainer: {
					id: 98798,
					firstName: "Roger",
					lastName: "Walmann",
					shortName: "Wal Ro",
					location: "Stallarholmen",
					birth: 1953,
					homeTrack: {
						id: 5,
						name: "Solvalla",
					},
					license: "A-tränare kat2: träna, köra",
					silks: "Röd, gul ring och ärmar; röd",
					statistics: {
						years: {
							"2024": {
								starts: 278,
								earnings: 1292360000,
								placement: {
									"1": 32,
									"2": 44,
									"3": 34,
								},
								winPercentage: 1151,
							},
							"2025": {
								starts: 71,
								earnings: 200440000,
								placement: {
									"1": 9,
									"2": 11,
									"3": 8,
								},
								winPercentage: 1267,
							},
						},
					},
				},
				shoes: {
					reported: true,
					front: {
						hasShoe: false,
						changed: true,
					},
					back: {
						hasShoe: false,
						changed: true,
					},
				},
				sulky: {
					reported: true,
					type: {
						code: "VA",
						text: "Vanlig",
						engText: "Standard",
						changed: false,
					},
					colour: {
						code: "GU",
						text: "Gul",
						engText: "Yellow",
						changed: false,
					},
				},
				money: 3326000,
				color: "stickelhårig fux",
				homeTrack: {
					id: 5,
					name: "Solvalla",
				},
				owner: {
					id: 686502,
					name: "Skärgården Stuteri AB",
					location: "Väddö",
				},
				breeder: {
					id: 686502,
					name: "Skärgården Stuteri AB",
					location: "Väddö",
				},
				statistics: {
					years: {
						"2024": {
							starts: 13,
							earnings: 277600000,
							placement: {
								"1": 9,
								"2": 1,
								"3": 1,
							},
							records: [
								{
									code: "aK",
									startMethod: "auto",
									distance: "short",
									time: {
										minutes: 1,
										seconds: 11,
										tenths: 5,
									},
									place: 1,
								},
								{
									code: "M",
									startMethod: "volte",
									distance: "medium",
									time: {
										minutes: 1,
										seconds: 16,
										tenths: 8,
									},
									place: 1,
								},
							],
						},
						"2025": {
							starts: 3,
							earnings: 55000000,
							placement: {
								"1": 3,
								"2": 0,
								"3": 0,
							},
							records: [
								{
									code: "aM",
									startMethod: "auto",
									distance: "medium",
									time: {
										minutes: 1,
										seconds: 12,
										tenths: 8,
									},
									place: 1,
								},
							],
						},
					},
					life: {
						starts: 16,
						earnings: 332600000,
						placement: {
							"1": 12,
							"2": 1,
							"3": 1,
						},
						records: [
							{
								code: "aK",
								startMethod: "auto",
								distance: "short",
								time: {
									minutes: 1,
									seconds: 11,
									tenths: 5,
								},
								place: 1,
								year: "2024",
							},
							{
								code: "aM",
								startMethod: "auto",
								distance: "medium",
								time: {
									minutes: 1,
									seconds: 12,
									tenths: 7,
								},
								place: 1,
								year: "2024",
							},
							{
								code: "M",
								startMethod: "volte",
								distance: "medium",
								time: {
									minutes: 1,
									seconds: 16,
									tenths: 8,
								},
								place: 1,
								year: "2024",
							},
						],
						winPercentage: 7500,
						placePercentage: 8750,
						earningsPerStart: 20787500,
						startPoints: 13200,
					},
					lastFiveStarts: {
						averageOdds: 184,
					},
				},
				pedigree: {
					father: {
						id: 721257,
						name: "Readly Express",
					},
					mother: {
						id: 514201,
						name: "Riva del Sole",
					},
					grandfather: {
						id: 189874,
						name: "Gentle Star",
						nationality: "NO",
					},
				},
			},
			driver: {
				id: 67192,
				firstName: "Örjan",
				lastName: "Kihlström",
				shortName: "Kih Ör",
				location: "Bromma",
				birth: 1962,
				homeTrack: {
					id: 5,
					name: "Solvalla",
				},
				license: "A-tränare: träna, köra",
				silks: "Turkos, vitt axelparti, 2-del ärm; vit",
				statistics: {
					years: {
						"2024": {
							starts: 1013,
							earnings: 5127555100,
							placement: {
								"1": 179,
								"2": 135,
								"3": 112,
							},
							winPercentage: 1767,
						},
						"2025": {
							starts: 284,
							earnings: 781935000,
							placement: {
								"1": 53,
								"2": 36,
								"3": 24,
							},
							winPercentage: 1866,
						},
					},
				},
			},
			result: {
				place: 0,
				finishOrder: 9,
				kmTime: {
					code: "u",
				},
				galloped: true,
				prizeMoney: 1500,
				finalOdds: 2.47,
				startNumber: 3,
			},
			pools: {
				vinnare: {
					"@type": ".VinnareStartPool",
					odds: 247,
				},
				plats: {
					"@type": ".PlatsStartPool",
					minOdds: 126,
					maxOdds: 126,
				},
				V75: {
					"@type": ".MarkingBetStartPool",
					betDistribution: 3461,
				},
			},
			videos: [
				{
					mediaId: "2148028997283",
					timestamp: "2025-05-03T13:23:42",
				},
				{
					mediaId: "2148033605409",
					timestamp: "2025-05-03T13:33:21",
				},
				{
					mediaId: "2148075077175",
					timestamp: "2025-05-03T14:50:40",
				},
				{
					mediaId: "2148075589079",
					timestamp: "2025-05-03T15:00:26",
				},
				{
					mediaId: "2148093509305",
					timestamp: "2025-05-03T16:22:39",
				},
			],
			out: true,
		},
		{
			id: "2025-05-03_6_5_4",
			number: 4,
			scratched: true,
			postPosition: 4,
			distance: 2140,
			horse: {
				id: 787831,
				name: "Matchmadeinheaven",
				age: 4,
				sex: "mare",
				record: {
					code: "aK",
					startMethod: "auto",
					distance: "short",
					time: {
						minutes: 1,
						seconds: 11,
						tenths: 9,
					},
				},
				trainer: {
					id: 451710,
					firstName: "Fredrik",
					lastName: "Wallin",
					shortName: "Wal Fr",
					location: "Huddungeby",
					birth: 1980,
					homeTrack: {
						id: 16,
						name: "Gävle",
					},
					license: "A-tränare: träna, köra",
					silks: "Svart, vit lodr.fä och axlp,orange häng; s",
					statistics: {
						years: {
							"2024": {
								starts: 596,
								earnings: 1384217000,
								placement: {
									"1": 75,
									"2": 63,
									"3": 70,
								},
								winPercentage: 1258,
							},
							"2025": {
								starts: 181,
								earnings: 364069300,
								placement: {
									"1": 26,
									"2": 24,
									"3": 18,
								},
								winPercentage: 1436,
							},
						},
					},
				},
				shoes: {
					reported: false,
				},
				sulky: {
					reported: false,
					colour: {
						code: "GU",
						text: "Gul",
						engText: "Yellow",
						changed: false,
					},
				},
				money: 1695000,
				color: "brun",
				homeTrack: {
					id: 16,
					name: "Gävle",
				},
				owner: {
					id: 814789,
					name: "Stall Fredrik Wallin AB",
					location: ".",
				},
				breeder: {
					id: 791576,
					name: "Wallin Fredrik",
				},
				statistics: {
					years: {
						"2024": {
							starts: 8,
							earnings: 43400000,
							placement: {
								"1": 2,
								"2": 0,
								"3": 0,
							},
							records: [
								{
									code: "aK",
									startMethod: "auto",
									distance: "short",
									time: {
										minutes: 1,
										seconds: 11,
										tenths: 9,
									},
									place: 1,
								},
							],
						},
						"2025": {
							starts: 3,
							earnings: 29650000,
							placement: {
								"1": 1,
								"2": 1,
								"3": 1,
							},
							records: [
								{
									code: "aM",
									startMethod: "auto",
									distance: "medium",
									time: {
										minutes: 1,
										seconds: 12,
										tenths: 9,
									},
									place: 2,
								},
							],
						},
					},
					life: {
						starts: 20,
						earnings: 169500000,
						placement: {
							"1": 5,
							"2": 4,
							"3": 1,
						},
						records: [
							{
								code: "aK",
								startMethod: "auto",
								distance: "short",
								time: {
									minutes: 1,
									seconds: 11,
									tenths: 9,
								},
								place: 1,
								year: "2024",
							},
							{
								code: "aM",
								startMethod: "auto",
								distance: "medium",
								time: {
									minutes: 1,
									seconds: 12,
									tenths: 9,
								},
								place: 2,
								year: "2025",
							},
							{
								code: "aL",
								startMethod: "auto",
								distance: "long",
								time: {
									minutes: 1,
									seconds: 15,
									tenths: 6,
								},
								place: 3,
								year: "2025",
							},
							{
								code: "K",
								startMethod: "volte",
								distance: "short",
								time: {
									minutes: 1,
									seconds: 19,
									tenths: 6,
								},
								place: 4,
								year: "2023",
							},
							{
								code: "M",
								startMethod: "volte",
								distance: "medium",
								time: {
									minutes: 1,
									seconds: 18,
									tenths: 2,
								},
								place: 2,
								year: "2023",
							},
						],
						winPercentage: 2500,
						placePercentage: 5000,
						earningsPerStart: 8475000,
						startPoints: 3905,
					},
					lastFiveStarts: {
						averageOdds: 1662,
					},
				},
				pedigree: {
					father: {
						id: 553396,
						name: "S.J.'s Caviar",
						nationality: "US",
					},
					mother: {
						id: 732865,
						name: "Inga in Heaven",
					},
					grandfather: {
						id: 617124,
						name: "Orlando Vici",
						nationality: "FR",
					},
				},
			},
			driver: {
				id: 43521,
				firstName: "Carl Johan",
				lastName: "Jepson",
				shortName: "Jep CJ",
				location: "Karlstad",
				birth: 1977,
				homeTrack: {
					id: 15,
					name: "Färjestad",
				},
				license: "A-tränare: träna, köra",
				silks: "Mörkgrön, svart axelparti och ärm; svart",
				statistics: {
					years: {
						"2024": {
							starts: 1191,
							earnings: 2425254000,
							placement: {
								"1": 192,
								"2": 159,
								"3": 154,
							},
							winPercentage: 1612,
						},
						"2025": {
							starts: 538,
							earnings: 1322828100,
							placement: {
								"1": 121,
								"2": 76,
								"3": 82,
							},
							winPercentage: 2249,
						},
					},
				},
			},
			result: {
				finishOrder: 54,
				finalOdds: 0,
				startNumber: 4,
			},
			pools: {
				vinnare: {
					"@type": ".VinnareStartPool",
					odds: 0,
				},
				plats: {
					"@type": ".PlatsStartPool",
					minOdds: 0,
					maxOdds: 0,
				},
				V75: {
					"@type": ".MarkingBetStartPool",
					betDistribution: 106,
				},
			},
		},
		{
			id: "2025-05-03_6_5_5",
			number: 5,
			postPosition: 4,
			distance: 2140,
			horse: {
				id: 785904,
				name: "Mellby Maleficent",
				age: 4,
				sex: "mare",
				record: {
					code: "aM",
					startMethod: "auto",
					distance: "medium",
					time: {
						minutes: 1,
						seconds: 13,
						tenths: 4,
					},
				},
				trainer: {
					id: 185518,
					firstName: "Daniel",
					lastName: "Redén",
					shortName: "Red Da",
					location: "Örsundsbro",
					birth: 1979,
					homeTrack: {
						id: 5,
						name: "Solvalla",
					},
					license: "A-tränare: träna, köra",
					silks: "Brun, sv axelp och vita hängsl; svart",
					statistics: {
						years: {
							"2024": {
								starts: 710,
								earnings: 4655418300,
								placement: {
									"1": 181,
									"2": 109,
									"3": 87,
								},
								winPercentage: 2549,
							},
							"2025": {
								starts: 138,
								earnings: 565523000,
								placement: {
									"1": 38,
									"2": 24,
									"3": 11,
								},
								winPercentage: 2753,
							},
						},
					},
				},
				shoes: {
					reported: true,
					front: {
						hasShoe: false,
						changed: false,
					},
					back: {
						hasShoe: false,
						changed: false,
					},
				},
				sulky: {
					reported: true,
					type: {
						code: "VA",
						text: "Vanlig",
						engText: "Standard",
						changed: true,
					},
					colour: {
						code: "GU",
						text: "Gul",
						engText: "Yellow",
						changed: false,
					},
				},
				money: 269500,
				color: "stickelhårig svart",
				homeTrack: {
					id: 5,
					name: "Solvalla",
				},
				owner: {
					id: 212799,
					name: "Mellby Gård AB",
					location: "Malmö",
				},
				breeder: {
					id: 212799,
					name: "Mellby Gård AB",
					location: "Malmö",
				},
				statistics: {
					years: {
						"2024": {
							starts: 10,
							earnings: 17650000,
							placement: {
								"1": 1,
								"2": 1,
								"3": 3,
							},
							records: [
								{
									code: "aM",
									startMethod: "auto",
									distance: "medium",
									time: {
										minutes: 1,
										seconds: 13,
										tenths: 4,
									},
									place: 3,
								},
								{
									code: "M",
									startMethod: "volte",
									distance: "medium",
									time: {
										minutes: 1,
										seconds: 16,
										tenths: 2,
									},
									place: 1,
								},
							],
						},
						"2025": {
							starts: 3,
							earnings: 9300000,
							placement: {
								"1": 0,
								"2": 2,
								"3": 0,
							},
							records: [
								{
									code: "aM",
									startMethod: "auto",
									distance: "medium",
									time: {
										minutes: 1,
										seconds: 13,
										tenths: 4,
									},
									place: 2,
								},
								{
									code: "M",
									startMethod: "volte",
									distance: "medium",
									time: {
										minutes: 1,
										seconds: 15,
										tenths: 2,
									},
									place: 6,
								},
							],
						},
					},
					life: {
						starts: 13,
						earnings: 26950000,
						placement: {
							"1": 1,
							"2": 3,
							"3": 3,
						},
						records: [
							{
								code: "aK",
								startMethod: "auto",
								distance: "short",
								time: {
									minutes: 1,
									seconds: 14,
									tenths: 5,
								},
								place: 2,
								year: "2025",
							},
							{
								code: "aM",
								startMethod: "auto",
								distance: "medium",
								time: {
									minutes: 1,
									seconds: 13,
									tenths: 4,
								},
								place: 3,
								year: "2024",
							},
							{
								code: "M",
								startMethod: "volte",
								distance: "medium",
								time: {
									minutes: 1,
									seconds: 15,
									tenths: 2,
								},
								place: 6,
								year: "2025",
							},
						],
						winPercentage: 769,
						placePercentage: 5384,
						earningsPerStart: 2073076,
						startPoints: 1905,
					},
					lastFiveStarts: {
						averageOdds: 850,
					},
				},
				pedigree: {
					father: {
						id: 745530,
						name: "Propulsion",
						nationality: "US",
					},
					mother: {
						id: 742250,
						name: "New Sheriff'n Town",
						nationality: "US",
					},
					grandfather: {
						id: 501073,
						name: "Credit Winner",
						nationality: "US",
					},
				},
			},
			driver: {
				id: 600062,
				firstName: "Rikard N",
				lastName: "Skoglund",
				shortName: "Sko RN",
				location: "Sigtuna",
				birth: 1989,
				homeTrack: {
					id: 5,
					name: "Solvalla",
				},
				license: "A-tränare: träna, köra",
				silks: "Gul,blå/vit randig, blå ärmb; blå",
				statistics: {
					years: {
						"2024": {
							starts: 487,
							earnings: 566094500,
							placement: {
								"1": 54,
								"2": 47,
								"3": 54,
							},
							winPercentage: 1108,
						},
						"2025": {
							starts: 396,
							earnings: 530255000,
							placement: {
								"1": 46,
								"2": 41,
								"3": 42,
							},
							winPercentage: 1161,
						},
					},
				},
			},
			result: {
				finishOrder: 40,
				kmTime: {
					code: "u",
				},
				galloped: true,
				disqualified: true,
				prizeMoney: 1500,
				finalOdds: 27.79,
				startNumber: 5,
			},
			pools: {
				vinnare: {
					"@type": ".VinnareStartPool",
					odds: 2779,
				},
				plats: {
					"@type": ".PlatsStartPool",
					minOdds: 408,
					maxOdds: 408,
				},
				V75: {
					"@type": ".MarkingBetStartPool",
					betDistribution: 221,
				},
			},
			videos: [
				{
					mediaId: "2148073541283",
					timestamp: "2025-05-03T14:55:52",
				},
			],
			out: true,
		},
		{
			id: "2025-05-03_6_5_6",
			number: 6,
			postPosition: 5,
			distance: 2140,
			horse: {
				id: 787978,
				name: "Kinky Rain",
				age: 4,
				sex: "mare",
				record: {
					code: "aM",
					startMethod: "auto",
					distance: "medium",
					time: {
						minutes: 1,
						seconds: 13,
						tenths: 1,
					},
				},
				trainer: {
					id: 549496,
					firstName: "Johan",
					lastName: "Untersteiner",
					shortName: "Unt Jo",
					location: "Holm",
					birth: 1984,
					homeTrack: {
						id: 18,
						name: "Halmstad",
					},
					license: "A-tränare: träna, köra",
					silks: "Svart, vit/röda axelklaffar; svart",
					statistics: {
						years: {
							"2024": {
								starts: 1373,
								earnings: 2998579000,
								placement: {
									"1": 236,
									"2": 218,
									"3": 157,
								},
								winPercentage: 1718,
							},
							"2025": {
								starts: 339,
								earnings: 928708500,
								placement: {
									"1": 76,
									"2": 51,
									"3": 35,
								},
								winPercentage: 2241,
							},
						},
					},
				},
				shoes: {
					reported: true,
					front: {
						hasShoe: false,
						changed: false,
					},
					back: {
						hasShoe: true,
						changed: false,
					},
				},
				sulky: {
					reported: true,
					type: {
						code: "VA",
						text: "Vanlig",
						engText: "Standard",
						changed: false,
					},
					colour: {
						code: "GU",
						text: "Gul",
						engText: "Yellow",
						changed: false,
					},
				},
				money: 296578,
				color: "brun",
				homeTrack: {
					id: 18,
					name: "Halmstad",
				},
				owner: {
					id: 486807,
					name: "Lind-Holm Thomas",
					location: "Danmark",
				},
				breeder: {
					id: 486807,
					name: "Lind-Holm Thomas",
					location: "Danmark",
				},
				statistics: {
					years: {
						"2024": {
							starts: 13,
							earnings: 20407800,
							placement: {
								"1": 2,
								"2": 2,
								"3": 1,
							},
							records: [
								{
									code: "aM",
									startMethod: "auto",
									distance: "medium",
									time: {
										minutes: 1,
										seconds: 13,
										tenths: 1,
									},
									place: 4,
								},
								{
									code: "M",
									startMethod: "volte",
									distance: "medium",
									time: {
										minutes: 1,
										seconds: 18,
										tenths: 0,
									},
									place: 1,
								},
							],
						},
						"2025": {
							starts: 2,
							earnings: 9250000,
							placement: {
								"1": 0,
								"2": 2,
								"3": 0,
							},
							records: [
								{
									code: "aM",
									startMethod: "auto",
									distance: "medium",
									time: {
										minutes: 1,
										seconds: 13,
										tenths: 9,
									},
									place: 2,
								},
								{
									code: "M",
									startMethod: "volte",
									distance: "medium",
									time: {
										minutes: 1,
										seconds: 14,
										tenths: 3,
									},
									place: 2,
								},
							],
						},
					},
					life: {
						starts: 15,
						earnings: 29657800,
						placement: {
							"1": 2,
							"2": 4,
							"3": 1,
						},
						records: [
							{
								code: "aM",
								startMethod: "auto",
								distance: "medium",
								time: {
									minutes: 1,
									seconds: 13,
									tenths: 1,
								},
								place: 4,
								year: "2024",
							},
							{
								code: "M",
								startMethod: "volte",
								distance: "medium",
								time: {
									minutes: 1,
									seconds: 14,
									tenths: 3,
								},
								place: 2,
								year: "2025",
							},
						],
						winPercentage: 1333,
						placePercentage: 4666,
						earningsPerStart: 1977186,
						startPoints: 1720,
					},
					lastFiveStarts: {
						averageOdds: 5060,
					},
				},
				pedigree: {
					father: {
						id: 685124,
						name: "Muscle Hill",
						nationality: "US",
					},
					mother: {
						id: 527201,
						name: "Alexia Ås",
					},
					grandfather: {
						id: 494729,
						name: "Conway Hall",
						nationality: "CA",
					},
				},
			},
			driver: {
				id: 549496,
				firstName: "Johan",
				lastName: "Untersteiner",
				shortName: "Unt Jo",
				location: "Holm",
				birth: 1984,
				homeTrack: {
					id: 18,
					name: "Halmstad",
				},
				license: "A-tränare: träna, köra",
				silks: "Svart, vit/röda axelklaffar; svart",
				statistics: {
					years: {
						"2024": {
							starts: 829,
							earnings: 1994289400,
							placement: {
								"1": 158,
								"2": 142,
								"3": 88,
							},
							winPercentage: 1905,
						},
						"2025": {
							starts: 226,
							earnings: 504038300,
							placement: {
								"1": 55,
								"2": 37,
								"3": 28,
							},
							winPercentage: 2433,
						},
					},
				},
			},
			result: {
				finishOrder: 41,
				kmTime: {
					code: "7",
				},
				galloped: true,
				disqualified: true,
				prizeMoney: 1500,
				finalOdds: 58.61,
				startNumber: 6,
			},
			pools: {
				vinnare: {
					"@type": ".VinnareStartPool",
					odds: 5861,
				},
				plats: {
					"@type": ".PlatsStartPool",
					minOdds: 819,
					maxOdds: 819,
				},
				V75: {
					"@type": ".MarkingBetStartPool",
					betDistribution: 57,
				},
			},
			videos: [
				{
					mediaId: "2148078661211",
					timestamp: "2025-05-03T15:09:04",
				},
				{
					mediaId: "2148078661471",
					timestamp: "2025-05-03T15:29:40",
				},
				{
					mediaId: "2148081733087",
					timestamp: "2025-05-03T15:20:13",
				},
				{
					mediaId: "2148084805215",
					timestamp: "2025-05-03T15:40:20",
				},
			],
		},
		{
			id: "2025-05-03_6_5_7",
			number: 7,
			postPosition: 6,
			distance: 2140,
			horse: {
				id: 784303,
				name: "Pretty be Linda",
				age: 4,
				sex: "mare",
				record: {
					code: "aK",
					startMethod: "auto",
					distance: "short",
					time: {
						minutes: 1,
						seconds: 12,
						tenths: 0,
					},
				},
				trainer: {
					id: 176304,
					firstName: "Ola",
					lastName: "Åsebö",
					shortName: "Åse Ol",
					location: "Kovland",
					birth: 1967,
					homeTrack: {
						id: 9,
						name: "Bergsåker",
					},
					license: "B-tränare: träna, köra",
					silks: "Blå, vitt axelparti och ärmar; vit",
					statistics: {
						years: {
							"2024": {
								starts: 136,
								earnings: 261341300,
								placement: {
									"1": 8,
									"2": 8,
									"3": 15,
								},
								winPercentage: 588,
							},
							"2025": {
								starts: 33,
								earnings: 35448800,
								placement: {
									"1": 1,
									"2": 4,
									"3": 7,
								},
								winPercentage: 303,
							},
						},
					},
				},
				shoes: {
					reported: true,
					front: {
						hasShoe: false,
						changed: false,
					},
					back: {
						hasShoe: false,
						changed: false,
					},
				},
				sulky: {
					reported: true,
					type: {
						code: "AM",
						text: "Amerikansk",
						engText: "American",
						changed: false,
					},
					colour: {
						code: "BL",
						text: "Blå",
						engText: "Blue",
						changed: false,
					},
				},
				money: 1428400,
				color: "ljusbrun",
				homeTrack: {
					id: 9,
					name: "Bergsåker",
				},
				owner: {
					id: 244518,
					name: "Åsebö Ola",
					location: "Kovland",
				},
				breeder: {
					id: 801226,
					name: "Speedy Madonna KB",
					location: "Skarpnäck",
				},
				statistics: {
					years: {
						"2024": {
							starts: 14,
							earnings: 124300000,
							placement: {
								"1": 0,
								"2": 4,
								"3": 0,
							},
							records: [
								{
									code: "aK",
									startMethod: "auto",
									distance: "short",
									time: {
										minutes: 1,
										seconds: 12,
										tenths: 0,
									},
									place: 6,
								},
							],
						},
						"2025": {
							starts: 3,
							earnings: 7040000,
							placement: {
								"1": 0,
								"2": 1,
								"3": 1,
							},
							records: [
								{
									code: "aM",
									startMethod: "auto",
									distance: "medium",
									time: {
										minutes: 1,
										seconds: 13,
										tenths: 8,
									},
									place: 2,
								},
								{
									code: "M",
									startMethod: "volte",
									distance: "medium",
									time: {
										minutes: 1,
										seconds: 13,
										tenths: 5,
									},
									place: 5,
								},
							],
						},
					},
					life: {
						starts: 19,
						earnings: 142840000,
						placement: {
							"1": 1,
							"2": 6,
							"3": 1,
						},
						records: [
							{
								code: "aK",
								startMethod: "auto",
								distance: "short",
								time: {
									minutes: 1,
									seconds: 12,
									tenths: 0,
								},
								place: 6,
								year: "2024",
							},
							{
								code: "aM",
								startMethod: "auto",
								distance: "medium",
								time: {
									minutes: 1,
									seconds: 13,
									tenths: 0,
								},
								place: 2,
								year: "2024",
							},
							{
								code: "M",
								startMethod: "volte",
								distance: "medium",
								time: {
									minutes: 1,
									seconds: 13,
									tenths: 5,
								},
								place: 5,
								year: "2025",
							},
						],
						winPercentage: 526,
						placePercentage: 4210,
						earningsPerStart: 7517894,
						startPoints: 1169,
					},
					lastFiveStarts: {
						averageOdds: 3103,
					},
				},
				pedigree: {
					father: {
						id: 463269,
						name: "Varenne",
						nationality: "IT",
					},
					mother: {
						id: 606188,
						name: "Bolets Linda",
					},
					grandfather: {
						id: 17552,
						name: "Bolets Igor",
					},
				},
			},
			driver: {
				id: 91416,
				firstName: "Per",
				lastName: "Lennartsson",
				shortName: "Len Pe",
				location: "Eskilstuna",
				birth: 1966,
				homeTrack: {
					id: 14,
					name: "Eskilstuna",
				},
				license: "A-tränare: träna, köra",
				silks: "Svart, blå axlar, sidor och ärmb; sva",
				statistics: {
					years: {
						"2024": {
							starts: 632,
							earnings: 1085545000,
							placement: {
								"1": 81,
								"2": 73,
								"3": 66,
							},
							winPercentage: 1281,
						},
						"2025": {
							starts: 180,
							earnings: 239803400,
							placement: {
								"1": 17,
								"2": 14,
								"3": 18,
							},
							winPercentage: 944,
						},
					},
				},
			},
			result: {
				place: 0,
				finishOrder: 7,
				kmTime: {
					minutes: 1,
					seconds: 13,
					tenths: 7,
				},
				prizeMoney: 1500,
				finalOdds: 55.92,
				startNumber: 7,
			},
			pools: {
				vinnare: {
					"@type": ".VinnareStartPool",
					odds: 5592,
				},
				plats: {
					"@type": ".PlatsStartPool",
					minOdds: 806,
					maxOdds: 806,
				},
				V75: {
					"@type": ".MarkingBetStartPool",
					betDistribution: 58,
				},
			},
			videos: [
				{
					mediaId: "2148080709048",
					timestamp: "2025-05-03T15:11:33",
				},
				{
					mediaId: "2148081221241",
					timestamp: "2025-05-03T15:22:56",
				},
			],
		},
		{
			id: "2025-05-03_6_5_8",
			number: 8,
			postPosition: 7,
			distance: 2140,
			horse: {
				id: 787259,
				name: "Panthere d'Inverne",
				age: 4,
				sex: "mare",
				record: {
					code: "aK",
					startMethod: "auto",
					distance: "short",
					time: {
						minutes: 1,
						seconds: 13,
						tenths: 2,
					},
				},
				trainer: {
					id: 149226,
					firstName: "André",
					lastName: "Eklundh",
					shortName: "Ekl An",
					location: "Nossebro",
					birth: 1986,
					homeTrack: {
						id: 6,
						name: "Åby",
					},
					license: "A-tränare: träna, köra",
					silks: "Vit, mblå stolpar och ärmb. vit axelp.; vi",
					statistics: {
						years: {
							"2024": {
								starts: 327,
								earnings: 598526000,
								placement: {
									"1": 71,
									"2": 38,
									"3": 46,
								},
								winPercentage: 2171,
							},
							"2025": {
								starts: 84,
								earnings: 146010000,
								placement: {
									"1": 15,
									"2": 21,
									"3": 9,
								},
								winPercentage: 1785,
							},
						},
					},
				},
				shoes: {
					reported: true,
					front: {
						hasShoe: false,
						changed: false,
					},
					back: {
						hasShoe: false,
						changed: true,
					},
				},
				sulky: {
					reported: true,
					type: {
						code: "AM",
						text: "Amerikansk",
						engText: "American",
						changed: false,
					},
					colour: {
						code: "BL",
						text: "Blå",
						engText: "Blue",
						changed: false,
					},
				},
				money: 448000,
				color: "mörkbrun",
				homeTrack: {
					id: 6,
					name: "Åby",
				},
				owner: {
					id: 549717,
					name: "Couisine RPG & development HB",
					location: "Vrigstad",
				},
				breeder: {
					id: 464238,
					name: "Invernum Stuteri AB",
					location: "Stockholm",
				},
				statistics: {
					years: {
						"2024": {
							starts: 15,
							earnings: 27900000,
							placement: {
								"1": 4,
								"2": 2,
								"3": 2,
							},
							records: [
								{
									code: "aK",
									startMethod: "auto",
									distance: "short",
									time: {
										minutes: 1,
										seconds: 13,
										tenths: 2,
									},
									place: 1,
								},
								{
									code: "M",
									startMethod: "volte",
									distance: "medium",
									time: {
										minutes: 1,
										seconds: 15,
										tenths: 9,
									},
									place: 2,
								},
							],
						},
						"2025": {
							starts: 3,
							earnings: 16900000,
							placement: {
								"1": 2,
								"2": 0,
								"3": 1,
							},
							records: [
								{
									code: "aM",
									startMethod: "auto",
									distance: "medium",
									time: {
										minutes: 1,
										seconds: 13,
										tenths: 6,
									},
									place: 1,
								},
							],
						},
					},
					life: {
						starts: 18,
						earnings: 44800000,
						placement: {
							"1": 6,
							"2": 2,
							"3": 3,
						},
						records: [
							{
								code: "aK",
								startMethod: "auto",
								distance: "short",
								time: {
									minutes: 1,
									seconds: 13,
									tenths: 2,
								},
								place: 1,
								year: "2024",
							},
							{
								code: "aM",
								startMethod: "auto",
								distance: "medium",
								time: {
									minutes: 1,
									seconds: 13,
									tenths: 6,
								},
								place: 1,
								year: "2025",
							},
							{
								code: "aL",
								startMethod: "auto",
								distance: "long",
								time: {
									minutes: 1,
									seconds: 15,
									tenths: 5,
								},
								place: 1,
								year: "2025",
							},
							{
								code: "M",
								startMethod: "volte",
								distance: "medium",
								time: {
									minutes: 1,
									seconds: 15,
									tenths: 9,
								},
								place: 2,
								year: "2024",
							},
						],
						winPercentage: 3333,
						placePercentage: 6111,
						earningsPerStart: 2488888,
						startPoints: 3840,
					},
					lastFiveStarts: {
						averageOdds: 709,
					},
				},
				pedigree: {
					father: {
						id: 736196,
						name: "Brillantissime",
						nationality: "FR",
					},
					mother: {
						id: 730043,
						name: "Margareta Amok",
					},
					grandfather: {
						id: 568973,
						name: "Andover Hall",
						nationality: "US",
					},
				},
			},
			driver: {
				id: 149226,
				firstName: "André",
				lastName: "Eklundh",
				shortName: "Ekl An",
				location: "Nossebro",
				birth: 1986,
				homeTrack: {
					id: 6,
					name: "Åby",
				},
				license: "A-tränare: träna, köra",
				silks: "Vit, mblå stolpar och ärmb. vit axelp.; vi",
				statistics: {
					years: {
						"2024": {
							starts: 606,
							earnings: 860745500,
							placement: {
								"1": 88,
								"2": 71,
								"3": 69,
							},
							winPercentage: 1452,
						},
						"2025": {
							starts: 103,
							earnings: 137915000,
							placement: {
								"1": 14,
								"2": 18,
								"3": 14,
							},
							winPercentage: 1359,
						},
					},
				},
			},
			result: {
				place: 1,
				finishOrder: 1,
				kmTime: {
					minutes: 1,
					seconds: 12,
					tenths: 0,
				},
				prizeMoney: 1000000,
				finalOdds: 21.08,
				startNumber: 8,
			},
			pools: {
				vinnare: {
					"@type": ".VinnareStartPool",
					odds: 2108,
					finalOdds: 2108,
				},
				plats: {
					"@type": ".PlatsStartPool",
					minOdds: 382,
					maxOdds: 382,
					odds: 382,
				},
				V75: {
					"@type": ".MarkingBetStartPool",
					betDistribution: 311,
				},
			},
			videos: [
				{
					mediaId: "2148074053154",
					timestamp: "2025-05-03T14:56:16",
				},
				{
					mediaId: "2148079173223",
					timestamp: "2025-05-03T15:05:59",
				},
			],
		},
		{
			id: "2025-05-03_6_5_9",
			number: 9,
			postPosition: 9,
			distance: 2140,
			horse: {
				id: 783731,
				name: "J.H.Ellen",
				age: 4,
				sex: "mare",
				record: {
					code: "aM",
					startMethod: "auto",
					distance: "medium",
					time: {
						minutes: 1,
						seconds: 13,
						tenths: 1,
					},
				},
				trainer: {
					id: 161607,
					firstName: "Björn",
					lastName: "Goop",
					shortName: "Goo Bj",
					location: "Karlstad",
					birth: 1976,
					homeTrack: {
						id: 15,
						name: "Färjestad",
					},
					license: "A-tränare: (Sv/utland): träna, köra",
					silks: "Mblå, guldf.midjeband, sömmar; guld",
					statistics: {
						years: {
							"2024": {
								starts: 913,
								earnings: 1814842800,
								placement: {
									"1": 132,
									"2": 125,
									"3": 120,
								},
								winPercentage: 1445,
							},
							"2025": {
								starts: 235,
								earnings: 580405200,
								placement: {
									"1": 49,
									"2": 47,
									"3": 17,
								},
								winPercentage: 2085,
							},
						},
					},
				},
				shoes: {
					reported: true,
					front: {
						hasShoe: false,
						changed: false,
					},
					back: {
						hasShoe: false,
						changed: false,
					},
				},
				sulky: {
					reported: true,
					type: {
						code: "AM",
						text: "Amerikansk",
						engText: "American",
						changed: false,
					},
					colour: {
						code: "BL",
						text: "Blå",
						engText: "Blue",
						changed: false,
					},
				},
				money: 524000,
				color: "brun",
				homeTrack: {
					id: 15,
					name: "Färjestad",
				},
				owner: {
					id: 539282,
					name: "Gnosjö Personaluthyrning AB",
				},
				breeder: {
					id: 726015,
					name: "Häggman Johanna",
					location: "Jaana & Janika",
				},
				statistics: {
					years: {
						"2024": {
							starts: 10,
							earnings: 41650000,
							placement: {
								"1": 4,
								"2": 0,
								"3": 2,
							},
							records: [
								{
									code: "aM",
									startMethod: "auto",
									distance: "medium",
									time: {
										minutes: 1,
										seconds: 13,
										tenths: 1,
									},
									place: 1,
								},
								{
									code: "M",
									startMethod: "volte",
									distance: "medium",
									time: {
										minutes: 1,
										seconds: 15,
										tenths: 3,
									},
									place: 5,
								},
							],
						},
						"2025": {
							starts: 3,
							earnings: 10750000,
							placement: {
								"1": 0,
								"2": 1,
								"3": 1,
							},
							records: [
								{
									code: "aM",
									startMethod: "auto",
									distance: "medium",
									time: {
										minutes: 1,
										seconds: 13,
										tenths: 9,
									},
									place: 2,
								},
							],
						},
					},
					life: {
						starts: 13,
						earnings: 52400000,
						placement: {
							"1": 4,
							"2": 1,
							"3": 3,
						},
						records: [
							{
								code: "aM",
								startMethod: "auto",
								distance: "medium",
								time: {
									minutes: 1,
									seconds: 13,
									tenths: 1,
								},
								place: 1,
								year: "2024",
							},
							{
								code: "aL",
								startMethod: "auto",
								distance: "long",
								time: {
									minutes: 1,
									seconds: 15,
									tenths: 7,
								},
								place: 5,
								year: "2025",
							},
							{
								code: "M",
								startMethod: "volte",
								distance: "medium",
								time: {
									minutes: 1,
									seconds: 15,
									tenths: 3,
								},
								place: 5,
								year: "2024",
							},
						],
						winPercentage: 3076,
						placePercentage: 6153,
						earningsPerStart: 4030769,
						startPoints: 3830,
					},
					lastFiveStarts: {
						averageOdds: 1655,
					},
				},
				pedigree: {
					father: {
						id: 774046,
						name: "Winter Harbor",
						nationality: "US",
					},
					mother: {
						id: 558869,
						name: "Cindy Hall",
					},
					grandfather: {
						id: 501081,
						name: "Angus Hall",
						nationality: "US",
					},
				},
			},
			driver: {
				id: 145716,
				firstName: "Stefan",
				lastName: "Persson",
				shortName: "Per St",
				location: "Halmstad",
				birth: 1973,
				homeTrack: {
					id: 18,
					name: "Halmstad",
				},
				license: "A-tränare: träna, köra",
				silks: "Svart, ljusblå sidor; svart",
				statistics: {
					years: {
						"2024": {
							starts: 1322,
							earnings: 1909457600,
							placement: {
								"1": 173,
								"2": 171,
								"3": 137,
							},
							winPercentage: 1308,
						},
						"2025": {
							starts: 360,
							earnings: 458480000,
							placement: {
								"1": 35,
								"2": 47,
								"3": 42,
							},
							winPercentage: 972,
						},
					},
				},
			},
			result: {
				place: 6,
				finishOrder: 6,
				kmTime: {
					minutes: 1,
					seconds: 12,
					tenths: 6,
				},
				prizeMoney: 50000,
				finalOdds: 37.84,
				startNumber: 9,
			},
			pools: {
				vinnare: {
					"@type": ".VinnareStartPool",
					odds: 3784,
				},
				plats: {
					"@type": ".PlatsStartPool",
					minOdds: 533,
					maxOdds: 533,
				},
				V75: {
					"@type": ".MarkingBetStartPool",
					betDistribution: 103,
				},
			},
			videos: [
				{
					mediaId: "2148074053008",
					timestamp: "2025-05-03T14:50:43",
				},
				{
					mediaId: "2148076101419",
					timestamp: "2025-05-03T15:00:26",
				},
				{
					mediaId: "2148078149389",
					timestamp: "2025-05-03T15:10:27",
				},
			],
		},
		{
			id: "2025-05-03_6_5_10",
			number: 10,
			postPosition: 10,
			distance: 2140,
			horse: {
				id: 782842,
				name: "O'Hara Boko",
				age: 4,
				sex: "mare",
				record: {
					code: "aM",
					startMethod: "auto",
					distance: "medium",
					time: {
						minutes: 1,
						seconds: 12,
						tenths: 2,
					},
				},
				trainer: {
					id: 647636,
					firstName: "Paul J P",
					lastName: "Hagoort",
					shortName: "Hag PJ",
					location: "Nederländerna",
					birth: 1978,
					homeTrack: {
						id: 5,
						name: "Solvalla",
					},
					license: "A-tränare: (Sv/utland): träna, köra",
					silks: "Vit,svart, röd; svart",
					statistics: {
						years: {
							"2024": {
								starts: 135,
								earnings: 884940000,
								placement: {
									"1": 43,
									"2": 23,
									"3": 13,
								},
								winPercentage: 3185,
							},
							"2025": {
								starts: 35,
								earnings: 133080700,
								placement: {
									"1": 11,
									"2": 7,
									"3": 5,
								},
								winPercentage: 3142,
							},
						},
					},
				},
				shoes: {
					reported: true,
					front: {
						hasShoe: false,
						changed: true,
					},
					back: {
						hasShoe: false,
						changed: false,
					},
				},
				sulky: {
					reported: true,
					type: {
						code: "AM",
						text: "Amerikansk",
						engText: "American",
						changed: false,
					},
					colour: {
						code: "BL",
						text: "Blå",
						engText: "Blue",
						changed: false,
					},
				},
				money: 1694459,
				color: "mörkbrun",
				homeTrack: {
					id: 5,
					name: "Solvalla",
				},
				owner: {
					id: 775079,
					name: "Stable Why Not",
					location: "Nederländerna",
				},
				breeder: {
					id: 235723,
					name: "Boko Stables Holland BV",
					location: "Nederländerna",
				},
				statistics: {
					years: {
						"2024": {
							starts: 11,
							earnings: 79670300,
							placement: {
								"1": 3,
								"2": 0,
								"3": 3,
							},
							records: [
								{
									code: "aM",
									startMethod: "auto",
									distance: "medium",
									time: {
										minutes: 1,
										seconds: 12,
										tenths: 2,
									},
									place: 3,
								},
							],
						},
						"2025": {
							starts: 1,
							earnings: 6250000,
							placement: {
								"1": 0,
								"2": 1,
								"3": 0,
							},
							records: [
								{
									code: "aM",
									startMethod: "auto",
									distance: "medium",
									time: {
										minutes: 1,
										seconds: 14,
										tenths: 0,
									},
									place: 2,
								},
							],
						},
					},
					life: {
						starts: 16,
						earnings: 169445900,
						placement: {
							"1": 5,
							"2": 2,
							"3": 4,
						},
						records: [
							{
								code: "aK",
								startMethod: "auto",
								distance: "short",
								time: {
									minutes: 1,
									seconds: 14,
									tenths: 0,
								},
								place: 3,
								year: "2023",
							},
							{
								code: "aM",
								startMethod: "auto",
								distance: "medium",
								time: {
									minutes: 1,
									seconds: 12,
									tenths: 2,
								},
								place: 3,
								year: "2024",
							},
						],
						winPercentage: 3125,
						placePercentage: 6875,
						earningsPerStart: 10590368,
						startPoints: 1811,
					},
					lastFiveStarts: {
						averageOdds: 953,
					},
				},
				pedigree: {
					father: {
						id: 744423,
						name: "Robert Bi",
						nationality: "IT",
					},
					mother: {
						id: 612046,
						name: "Zilan Boko",
					},
					grandfather: {
						id: 444412,
						name: "Muscles Yankee",
						nationality: "US",
					},
				},
			},
			driver: {
				id: 527494,
				firstName: "Robin",
				lastName: "Bakker",
				shortName: "Bak Ro",
				location: "Nederländerna",
				birth: 1983,
				license: "A-tränare (utland): träna, köra",
				silks: "Svart, gula sidor och rosa stolpar; sva",
			},
			result: {
				place: 0,
				finishOrder: 8,
				kmTime: {
					minutes: 1,
					seconds: 14,
					tenths: 2,
				},
				prizeMoney: 1500,
				finalOdds: 18.09,
				startNumber: 10,
			},
			pools: {
				vinnare: {
					"@type": ".VinnareStartPool",
					odds: 1809,
				},
				plats: {
					"@type": ".PlatsStartPool",
					minOdds: 294,
					maxOdds: 294,
				},
				V75: {
					"@type": ".MarkingBetStartPool",
					betDistribution: 261,
				},
			},
			videos: [
				{
					mediaId: "2148069445210",
					timestamp: "2025-05-03T14:29:47",
				},
				{
					mediaId: "2148072005033",
					timestamp: "2025-05-03T14:40:10",
				},
				{
					mediaId: "2148074053006",
					timestamp: "2025-05-03T14:50:16",
				},
				{
					mediaId: "2148080197111",
					timestamp: "2025-05-03T15:09:14",
				},
				{
					mediaId: "2148081733083",
					timestamp: "2025-05-03T15:19:07",
				},
				{
					mediaId: "2148081733301",
					timestamp: "2025-05-03T15:29:54",
				},
			],
		},
		{
			id: "2025-05-03_6_5_11",
			number: 11,
			postPosition: 11,
			distance: 2140,
			horse: {
				id: 786148,
				name: "Elegance Silvio",
				age: 4,
				sex: "mare",
				record: {
					code: "aM",
					startMethod: "auto",
					distance: "medium",
					time: {
						minutes: 1,
						seconds: 13,
						tenths: 2,
					},
				},
				trainer: {
					id: 549496,
					firstName: "Johan",
					lastName: "Untersteiner",
					shortName: "Unt Jo",
					location: "Holm",
					birth: 1984,
					homeTrack: {
						id: 18,
						name: "Halmstad",
					},
					license: "A-tränare: träna, köra",
					silks: "Svart, vit/röda axelklaffar; svart",
					statistics: {
						years: {
							"2024": {
								starts: 1373,
								earnings: 2998579000,
								placement: {
									"1": 236,
									"2": 218,
									"3": 157,
								},
								winPercentage: 1718,
							},
							"2025": {
								starts: 339,
								earnings: 928708500,
								placement: {
									"1": 76,
									"2": 51,
									"3": 35,
								},
								winPercentage: 2241,
							},
						},
					},
				},
				shoes: {
					reported: true,
					front: {
						hasShoe: false,
						changed: false,
					},
					back: {
						hasShoe: false,
						changed: false,
					},
				},
				sulky: {
					reported: true,
					type: {
						code: "AM",
						text: "Amerikansk",
						engText: "American",
						changed: false,
					},
					colour: {
						code: "BL",
						text: "Blå",
						engText: "Blue",
						changed: false,
					},
				},
				money: 503000,
				color: "svart",
				homeTrack: {
					id: 18,
					name: "Halmstad",
				},
				owner: {
					id: 233209,
					name: "Stall Silvio AB",
					location: "Åstorp",
				},
				breeder: {
					id: 233209,
					name: "Stall Silvio AB",
					location: "Åstorp",
				},
				statistics: {
					years: {
						"2024": {
							starts: 13,
							earnings: 45550000,
							placement: {
								"1": 2,
								"2": 1,
								"3": 4,
							},
							records: [
								{
									code: "aM",
									startMethod: "auto",
									distance: "medium",
									time: {
										minutes: 1,
										seconds: 13,
										tenths: 2,
									},
									place: 3,
								},
								{
									code: "M",
									startMethod: "volte",
									distance: "medium",
									time: {
										minutes: 1,
										seconds: 16,
										tenths: 8,
									},
									place: 3,
								},
							],
						},
						"2025": {
							starts: 2,
							earnings: 4750000,
							placement: {
								"1": 0,
								"2": 0,
								"3": 1,
							},
							records: [
								{
									code: "aM",
									startMethod: "auto",
									distance: "medium",
									time: {
										minutes: 1,
										seconds: 14,
										tenths: 0,
									},
									place: 3,
								},
							],
						},
					},
					life: {
						starts: 15,
						earnings: 50300000,
						placement: {
							"1": 2,
							"2": 1,
							"3": 5,
						},
						records: [
							{
								code: "aM",
								startMethod: "auto",
								distance: "medium",
								time: {
									minutes: 1,
									seconds: 13,
									tenths: 2,
								},
								place: 3,
								year: "2024",
							},
							{
								code: "M",
								startMethod: "volte",
								distance: "medium",
								time: {
									minutes: 1,
									seconds: 16,
									tenths: 8,
								},
								place: 3,
								year: "2024",
							},
						],
						winPercentage: 1333,
						placePercentage: 5333,
						earningsPerStart: 3353333,
						startPoints: 2780,
					},
					lastFiveStarts: {
						averageOdds: 5641,
					},
				},
				pedigree: {
					father: {
						id: 588796,
						name: "Maharajah",
					},
					mother: {
						id: 678410,
						name: "Vestal Virgin",
					},
					grandfather: {
						id: 617124,
						name: "Orlando Vici",
						nationality: "FR",
					},
				},
			},
			driver: {
				id: 42633,
				firstName: "Peter",
				lastName: "Untersteiner",
				shortName: "Unt Pe",
				location: "Halmstad",
				birth: 1960,
				homeTrack: {
					id: 18,
					name: "Halmstad",
				},
				license: "A-tränare: träna, köra",
				silks: "Röd, vita axelklaffar; röd",
				statistics: {
					years: {
						"2024": {
							starts: 467,
							earnings: 708662100,
							placement: {
								"1": 56,
								"2": 66,
								"3": 61,
							},
							winPercentage: 1199,
						},
						"2025": {
							starts: 114,
							earnings: 279860000,
							placement: {
								"1": 17,
								"2": 16,
								"3": 9,
							},
							winPercentage: 1491,
						},
					},
				},
			},
			result: {
				place: 3,
				finishOrder: 3,
				kmTime: {
					minutes: 1,
					seconds: 12,
					tenths: 2,
				},
				prizeMoney: 250000,
				finalOdds: 111.75,
				startNumber: 11,
			},
			pools: {
				vinnare: {
					"@type": ".VinnareStartPool",
					odds: 11175,
				},
				plats: {
					"@type": ".PlatsStartPool",
					minOdds: 1354,
					maxOdds: 1354,
					odds: 1354,
				},
				V75: {
					"@type": ".MarkingBetStartPool",
					betDistribution: 19,
				},
			},
			videos: [
				{
					mediaId: "2148078149370",
					timestamp: "2025-05-03T15:09:19",
				},
				{
					mediaId: "2148080709338",
					timestamp: "2025-05-03T15:29:40",
				},
				{
					mediaId: "2148081733086",
					timestamp: "2025-05-03T15:19:19",
				},
			],
		},
		{
			id: "2025-05-03_6_5_12",
			number: 12,
			postPosition: 12,
			distance: 2140,
			horse: {
				id: 788277,
				name: "Arctic Angel",
				age: 4,
				sex: "mare",
				record: {
					code: "aK",
					startMethod: "auto",
					distance: "short",
					time: {
						minutes: 1,
						seconds: 12,
						tenths: 1,
					},
				},
				trainer: {
					id: 143661,
					firstName: "Geir Vegard",
					lastName: "Gundersen",
					shortName: "Gun GV",
					location: "Norge",
					birth: 1975,
					license: "A-tränare (utland): träna, köra",
					silks: "Svart, röd/vita detaljer; svart",
				},
				shoes: {
					reported: true,
					front: {
						hasShoe: false,
						changed: false,
					},
					back: {
						hasShoe: false,
						changed: false,
					},
				},
				sulky: {
					reported: true,
					type: {
						code: "AM",
						text: "Amerikansk",
						engText: "American",
						changed: false,
					},
					colour: {
						code: "BL",
						text: "Blå",
						engText: "Blue",
						changed: false,
					},
				},
				money: 304000,
				color: "brun",
				owner: {
					id: 719121,
					name: "Andersen Racing Stable AB",
					location: "Stockholm",
				},
				breeder: {
					id: 719121,
					name: "Andersen Racing Stable AB",
					location: "Stockholm",
				},
				statistics: {
					years: {
						"2024": {
							starts: 7,
							earnings: 27000000,
							placement: {
								"1": 3,
								"2": 1,
								"3": 0,
							},
							records: [
								{
									code: "aK",
									startMethod: "auto",
									distance: "short",
									time: {
										minutes: 1,
										seconds: 12,
										tenths: 1,
									},
									place: 2,
								},
								{
									code: "M",
									startMethod: "volte",
									distance: "medium",
									time: {
										minutes: 1,
										seconds: 15,
										tenths: 6,
									},
									place: 1,
								},
							],
						},
						"2025": {
							starts: 2,
							earnings: 3400000,
							placement: {
								"1": 0,
								"2": 0,
								"3": 1,
							},
							records: [
								{
									code: "aM",
									startMethod: "auto",
									distance: "medium",
									time: {
										minutes: 1,
										seconds: 13,
										tenths: 9,
									},
									place: 3,
								},
							],
						},
					},
					life: {
						starts: 9,
						earnings: 30400000,
						placement: {
							"1": 3,
							"2": 1,
							"3": 1,
						},
						records: [
							{
								code: "aK",
								startMethod: "auto",
								distance: "short",
								time: {
									minutes: 1,
									seconds: 12,
									tenths: 1,
								},
								place: 2,
								year: "2024",
							},
							{
								code: "aM",
								startMethod: "auto",
								distance: "medium",
								time: {
									minutes: 1,
									seconds: 13,
									tenths: 9,
								},
								place: 3,
								year: "2025",
							},
							{
								code: "M",
								startMethod: "volte",
								distance: "medium",
								time: {
									minutes: 1,
									seconds: 15,
									tenths: 6,
								},
								place: 1,
								year: "2024",
							},
						],
						winPercentage: 3333,
						placePercentage: 5555,
						earningsPerStart: 3377777,
						startPoints: 2055,
					},
					lastFiveStarts: {
						averageOdds: 4296,
					},
				},
				pedigree: {
					father: {
						id: 768773,
						name: "Face Time Bourbon",
						nationality: "FR",
					},
					mother: {
						id: 775792,
						name: "Mary's Out Cruisin",
						nationality: "US",
					},
					grandfather: {
						id: 647856,
						name: "Here Comes Herbie",
						nationality: "US",
					},
				},
			},
			driver: {
				id: 722458,
				firstName: "Magnus Teien",
				lastName: "Gundersen",
				shortName: "Gun MT",
				location: "Norge",
				birth: 1996,
				license: "Körlicens, utländsk",
				silks: "Mörkblå, vit/röd sömmar; mblå",
			},
			result: {
				place: 4,
				finishOrder: 4,
				kmTime: {
					minutes: 1,
					seconds: 12,
					tenths: 3,
				},
				prizeMoney: 120000,
				finalOdds: 129.88,
				startNumber: 12,
			},
			pools: {
				vinnare: {
					"@type": ".VinnareStartPool",
					odds: 12988,
				},
				plats: {
					"@type": ".PlatsStartPool",
					minOdds: 1410,
					maxOdds: 1410,
				},
				V75: {
					"@type": ".MarkingBetStartPool",
					betDistribution: 19,
				},
			},
			videos: [
				{
					mediaId: "2148073029133",
					timestamp: "2025-05-03T14:51:46",
				},
				{
					mediaId: "2148073541488",
					timestamp: "2025-05-03T15:01:26",
				},
			],
		},
	],
	mergedPools: [
		{
			name: "A",
			betTypes: ["vinnare", "plats", "komb", "tvilling", "trio"],
		},
	],
};
