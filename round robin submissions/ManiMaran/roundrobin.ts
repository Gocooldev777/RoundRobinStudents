interface teamListType { teamNo: number; teamName: string }[];

interface objWithFreeSlotType { Slot1: string; Slot2: string }
interface objWithoutFreeSlotType { Slot2: string }

var teamList: teamListType[] = [
    {
        teamNo: 1,              // Serial numbers of the team
        teamName: "team1"       // Team neme
    },
    {
        teamNo: 2,
        teamName: "team2"
    },
    {
        teamNo: 3,
        teamName: "team3"
    },
    {
        teamNo: 4,
        teamName: "team4"
    },
    {
        teamNo: 5,
        teamName: "team5"
    },
    {
        teamNo: 6,
        teamName: "team6"
    },
    {
        teamNo: 7,
        teamName: "team7"
    },
    {
        teamNo: 8,
        teamName: "team8"
    },
    {
        teamNo: 9,
        teamName: "team9"
    },
    {
        teamNo: 10,
        teamName: "team10"
    },

]
// Enter the date of starting of the tournament in the following format : "2022-08-27"

var startDate = new Date("2022-08-20")
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; // Days in a week
const secsInADAy = (24 * 60 * 60 * 1000)       // Seconds in a day\

// function for finding the list of matches

function listOfMatches(teamListArg: teamListType[]): string[] {
    const teamNamelist: string[] = []      // List of teams
    var matches = []        // List of matches between teams 
    for (let details of teamListArg) {
        teamNamelist.push(details.teamName)
    }

    let teamCount = teamNamelist.length;

    const noOne = "noOne"
    if (teamNamelist.length % 2 != 0) {
        teamNamelist.push(noOne)
    }
    if (teamNamelist.includes("noOne")) {
        for (let i = 0; i <= teamCount - 1; i++) {
            for (var j = 0; j < teamNamelist.length / 2; j++) {
                if (teamNamelist[j] != noOne && teamNamelist[teamNamelist.length - 1 - j] != noOne) {
                    matches.push(teamNamelist[j] + " vs " + teamNamelist[teamNamelist.length - 1 - j]);
                }
            }
            teamNamelist.splice(1, 0, teamNamelist.pop()!);
        }
    }
    else {
        for (let i = 0; i < teamCount - 1; i++) {
            for (var j = 0; j < teamNamelist.length / 2; j++) {
                if (teamNamelist[j] != noOne && teamNamelist[teamNamelist.length - 1 - j] != noOne) {
                    matches.push(teamNamelist[j] + " vs " + teamNamelist[teamNamelist.length - 1 - j]);
                }
            }
            teamNamelist.splice(1, 0, teamNamelist.pop()!);
        }
    }
    return matches
}

//********************************************************************************************************
let matches: string[] = listOfMatches(teamList)
//console.log(matches)
let matchlen = matches.length
var list: object[] = []
if (matchlen % 2 != 0) {
    matches.push("FreeSlot")
    for (let i = 0; i < matchlen; i += 2) {
        list.push({ Slot1: matches[i], Slot2: matches[i + 1] })
    }
}
else {
    for (let i = 0; i < matchlen; i += 2) {
        list.push({ Slot1: matches[i], Slot2: matches[i + 1] })
    }
}
// ************************************************************************************************************************
// function for finding the dates if the nearest day is saturday
function saturday(firstDate: Date): string[] {
    let dates: string[] = [`${firstDate.getDate()}.${firstDate.getMonth() + 1}.${firstDate.getFullYear()} - ${days[firstDate.getDay()]}`]
    let Sunday_ = new Date(firstDate.getTime() + secsInADAy)
    dates.push(`${Sunday_.getDate()}.${Sunday_.getMonth() + 1}.${Sunday_.getFullYear()} - ${days[Sunday_.getDay()]}`)

    for (let i = 1; i <= Math.ceil(list.length / 2); i++) {
        var nextSun = new Date(firstDate.getTime() + (7 * i) * secsInADAy);
        dates.push(`${nextSun.getDate()}.${nextSun.getMonth() + 1}.${nextSun.getFullYear()} - ${days[nextSun.getDay()]}`)
        var nextSat = new Date(nextSun.getTime() + secsInADAy);
        dates.push(`${nextSat.getDate()}.${nextSat.getMonth() + 1}.${nextSat.getFullYear()} - ${days[nextSat.getDay()]}`)
    } return (dates)
}

// ************************************************************************************************************************
// function for finding the dates if the nearest day is saturday
function Sunday(firstDate: Date): string[] {

    let dates = [`${firstDate.getDate()}.${firstDate.getMonth() + 1}.${firstDate.getFullYear()} - ${days[firstDate.getDay()]}`]
    let saturday_ = (new Date(firstDate.getTime() + (6) * secsInADAy))
    dates.push(`${saturday_.getDate()}.${saturday_.getMonth() + 1}.${saturday_.getFullYear()} - ${days[saturday_.getDay()]}`)
    let Sunday_ = new Date(saturday_.getTime() + secsInADAy)
    dates.push(`${Sunday_.getDate()}.${Sunday_.getMonth() + 1}.${Sunday_.getFullYear()} - ${days[Sunday_.getDay()]}`)

    for (let i = 1; i <= Math.ceil(list.length / 2); i++) {
        var nextSat = new Date(saturday_.getTime() + (7 * i) * secsInADAy);
        dates.push(`${nextSat.getDate()}.${nextSat.getMonth() + 1}.${nextSat.getFullYear()} - ${days[nextSat.getDay()]}`)
        var nextSun = new Date(nextSat.getTime() + secsInADAy);
        dates.push(`${nextSun.getDate()}.${nextSun.getMonth() + 1}.${nextSun.getFullYear()} - ${days[nextSun.getDay()]}`)
    } return (dates)
}
// ************************************************************************************************************************
// function for finding whether the nearest day is saturday or sunday
function alldsay(startDate: Date): any {
    for (let i = 0; i < 7; i++) {
        let date: Date = new Date(startDate.getTime() + i * (secsInADAy))
        if (date.getDay() == 0) {
            let dates = Sunday(date)
            return dates
        }
        else if (date.getDay() == 6) {
            let dates = Sunday(date)
            return dates

        }
    }
}
let ListOfDates: any = alldsay(startDate)

// ************************************************************************************************************************
// making shedule 
function sheduling(dates: string[], matches: object[]): any {
    let shedule: any[] = []
    for (let i = 0; i < list.length; i++) {
        shedule.push(dates[i])
        shedule.push(matches[i])
    } return (shedule)
}
let shedule: any = (sheduling(ListOfDates, list))

console.log(`\nNo of teams participating : ${teamList.length}\n`)
console.log("--------------------------------------------------------------------------\n")
let i: number = 1
for (let date = 0; date < shedule.length; date += 2) {
    console.log(`\nDay : ${i}`)
    console.log(`\nDate : ${shedule[date]}\n`)
    console.log("Slots : ", shedule[date + 1], "\n")
    console.log("--------------------------------------------------------------------------")
    i = i + 1
}
console.log(`\nTotal no of days : ${i - 1}`)