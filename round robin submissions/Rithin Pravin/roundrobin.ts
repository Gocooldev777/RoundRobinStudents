//⬇️Enter the number of Teams⬇️
let NumberofTeams: any = 8

let Teams: any
// To Make Teams according to the given Number 
function TeamMaker(NumTeam: any) {
    Teams = []
    for (let i = 1; i < NumTeam + 1; i++) {
        Teams.push(`Team:${i}`)
    } return Teams;
} TeamMaker(NumberofTeams)

// To get a Team face off
function TeamFaceOff() {
    const Pretend = -1;
    const TeamMatches: any = [];
    if (NumberofTeams % 2 === 1) {
        Teams.push(Pretend);
        NumberofTeams += 1;
    }
    for (let j = 0; j < NumberofTeams - 1; j++) {
        TeamMatches[j] = [];
        for (let x = 0; x < NumberofTeams / 2; x++) {
            const ReversedTeamMatches = NumberofTeams - 1 - x;
            if (Teams[x] !== Pretend && Teams[ReversedTeamMatches] !== Pretend) {
                TeamMatches[j].push([`${Teams[ReversedTeamMatches]} VS ${Teams[x]}`]);
            }
        } Teams.splice(1, 0, Teams.pop());
    } return TeamMatches
}

// To get the Total Matches Played by the Teams
function TotalMatches() {
    const Total_Matches = []
    const Matches = TeamFaceOff()
    for (let i = 0; i < Matches.length; i++) {
        for (let j = 0; j < Matches[i].length; j++) {
            Total_Matches.push(Matches[i][j])
        }
    }
    return Total_Matches;
}

// To Split the Matches into  Slot 1 and Slot 2 
function MatchSlotSpliting() {
    const MatchesInSlots = []
    const First_Slot = [];
    const Second_Slot = [];
    const Match = TotalMatches();
    for (let i = 0; i < Match.length; i++) {
        if (i % 2 == 0) {
            First_Slot.push(Match[i])
        } else {
            Second_Slot.push(Match[i])
        }
    }
    MatchesInSlots.push(First_Slot);
    MatchesInSlots.push(Second_Slot);
    return MatchesInSlots
}

// To get the Weekends 
let saturday = new Date('2022-08-27');
let sunday = new Date('2022-08-28');
function findweekEnds(saturday: Date, sunday: Date) {
    const allMatches = TotalMatches()
    const weekEnds = new Array();
    const dt = new Date(saturday);
    const dt1 = new Date(sunday);
    for (let i = 0; i < allMatches.length / 2; i++) {
        weekEnds.push((new Date(dt)).toString().substring(0, 15));
        weekEnds.push((new Date(dt1).toString().substring(0, 15)))
        dt.setDate(dt.getDate() + 7);
        dt1.setDate(dt1.getDate() + 7);
    }
    return weekEnds
} let dates: any = findweekEnds(saturday, sunday)

// To get the Final FaceOff Dates
function FinalFaceOffDates(MatchesInSlots:any) {
    const First_Slot = MatchesInSlots[0]
    const Second_Slot = MatchesInSlots[1]
    let Match = 1
    let day = 1
    if (First_Slot.length == Second_Slot.length) {
        for (let i = 0; i < First_Slot.length; i++) {
            console.log('⌜‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾⌝');
            console.log(` DAY:${day++} || ${(dates[i])}`);
            console.log('——————————————————————————');
            for (let j = 0; j < 2; j++) {
                console.log(`  SLOT-${j + 1} | Match NO ⫸ ${Match++}`);
                console.log(`  ↳  ${MatchesInSlots[j][i]}  ↲`);
                console.log('——————————————————————————');
            }
            console.log('⌞________________________⌟'); console.log("");
        }
        console.log('Total Number of Matches', Match - 1);
    } else {
        Second_Slot.push("No more Matches")
        for (let i = 0; i < First_Slot.length; i++) {
            console.log('⌜‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾⌝');
            console.log(` DAY:${day++} || ${(dates[i])}`);
            console.log('——————————————————————————');
            for (let j = 0; j < 2; j++) {
                console.log(`  SLOT-${j + 1} | Match NO ⫸ ${Match++}`);
                console.log(`  ↳  ${MatchesInSlots[j][i]}  ↲`);
                console.log('——————————————————————————');
            }
            console.log('⌞________________________⌟'); console.log("");

        }
        console.log('Total Number of Matches ', Match - 2);
    }

} FinalFaceOffDates(MatchSlotSpliting())