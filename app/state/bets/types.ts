export interface RacingInfoResponse {
    betType: string
    upcoming: Upcoming[]
    results: Result[]
}

export interface Upcoming {
    id: string
    newBettingSystem: boolean
    startTime: string
    tracks: Track[]
    favorites: Favorite[]
    addOns: string[]
    races: Race[]
    bettable: boolean
}

export interface Track {
    id: number
    name: string
}

export interface Favorite {
    raceId: string
    legNumber: number
    start: Start
}

export interface Start {
    number: number
    name: string
    distribution: number
}

export interface Race {
    id: string
    starts: Start2[]
}

export interface Start2 {
    number: number
    horse: Horse
}

export interface Horse {
    name: string
}

export interface Result {
    id: string
    tracks: Track2[]
    totalToWin: number
    startTime: string
    addOns: string[]
}

export interface Track2 {
    id: number
    name: string
}