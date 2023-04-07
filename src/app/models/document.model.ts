export interface Golfer {
// Some metadatas
    MSTID:                 number;  // just a random id
    Match:                 number;  // match number?
    First:                 string;  // First name
    Last:                  string;  // Last name
    TVName:                string;  // Nickname
    Sex:                   string; 
    Nationality:           string; 
    SOD:                   null;    // "Stream output display?" always null apparently
    Score:                 number;  
    Today:                 number;  // No frame of reference for this, is it the day of the month? day of the week?
    tournamentID:          number;
    round:                 number;
    orderInMatch:          number;
    lastUpdated:           string;  // "41:22.7"
    status:                number;
    leaderboardID:         number;
    teeStart:              number;
    teeTime:               string;  // 07:00.0
    holesPlayed:           number;
    course:                number;
    matchID:               number;
    Amature:               number;
    isTeam:                number;
    CalculatedRankInteger: number;
    position:              number;
    UniquePosition:        number;
    Eastern:               null;    // Can be null or 0 (from looking)
    Handicap:              number;
    SortPriority:          null;
// This is where the strokes begin...
    Hole1Strokes:          number;
    Hole1STP:              number;
    Hole2Strokes:          number;
    Hole2STP:              number;
    Hole3Strokes:          number;
    Hole3STP:              number;
    Hole4Strokes:          number;
    Hole4STP:              number;
    Hole5Strokes:          number;
    Hole5STP:              number;
    Hole6Strokes:          number;
    Hole6STP:              number;
    Hole7Strokes:          number;
    Hole7STP:              number;
    Hole8Strokes:          number;
    Hole8STP:              number;
    Hole9Strokes:          number;
    Hole9STP:              number;
    OutStrokes:            number;
    OutSTP:                number;
    Hole10Strokes:         number;
    Hole10STP:             number;
    Hole11Strokes:         number;
    Hole11STP:             number;
    Hole12Strokes:         number;
    Hole12STP:             number;
    Hole13Strokes:         number;
    Hole13STP:             number;
    Hole14Strokes:         number;
    Hole14STP:             number;
    Hole15Strokes:         number;
    Hole15STP:             number;
    Hole16Strokes:         number;
    Hole16STP:             number;
    Hole17Strokes:         number;
    Hole17STP:             number;
    Hole18Strokes:         number;
    Hole18STP:             number;
    InStrokes:             number;
    InSTP:                 number;
    TotalStrokes:          number;
    TotalSTP:              number;
}

// Enumerate the keys of the interface to use as columns
export const GolfersColumns: string[] = [
    "MSTID",
    "Match",
    "First",
    "Last",
    "TVName",
    "Sex",
    "Nationality",
    "SOD",
    "Score",
    "Today",
    "tournamentID",
    "round",
    "orderInMatch",
    "lastUpdated",
    "status",
    "leaderboardID",
    "teeStart",
    "teeTime",
    "holesPlayed",
    "course",
    "matchID",
    "Amature",
    "isTeam",
    "CalculatedRankInteger",
    "position",
    "UniquePosition",
    "Eastern",
    "Handicap",
    "SortPriority",
    "Hole1Strokes",
    "Hole1STP",
    "Hole2Strokes",
    "Hole2STP",
    "Hole3Strokes",
    "Hole3STP",
    "Hole4Strokes",
    "Hole4STP",
    "Hole5Strokes",
    "Hole5STP",
    "Hole6Strokes",
    "Hole6STP",
    "Hole7Strokes",
    "Hole7STP",
    "Hole8Strokes",
    "Hole8STP",
    "Hole9Strokes",
    "Hole9STP",
    "OutStrokes",
    "OutSTP",
    "Hole10Strokes",
    "Hole10STP",
    "Hole11Strokes",
    "Hole11STP",
    "Hole12Strokes",
    "Hole12STP",
    "Hole13Strokes",
    "Hole13STP",
    "Hole14Strokes",
    "Hole14STP",
    "Hole15Strokes",
    "Hole15STP",
    "Hole16Strokes",
    "Hole16STP",
    "Hole17Strokes",
    "Hole17STP",
    "Hole18Strokes",
    "Hole18STP",
    "InStrokes",
    "InSTP",
    "TotalStrokes",
    "TotalSTP"
]