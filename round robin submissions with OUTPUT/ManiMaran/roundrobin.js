var teamList = [
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
var startDate = new Date("2022-08-27")

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; // Days in a week
const secsInADAy  = ( 24 * 60 * 60 * 1000)       // Seconds in a day

// function for finding the list of matches

function listOfMatches(teamList) {
    var teamNamelist = []       // List of teams
    var matches = []        // List of matches between teams 
    for (details of teamList) {
        teamNamelist.push(details.teamName)
    }

    teamCount = teamNamelist.length;

    const noOne = "noOne"
    if (teamNamelist.length % 2 != 0) {
        teamNamelist.push(noOne)
    }
    if (teamNamelist.includes("noOne")) {
        for (i = 0; i <= teamCount - 1; i++) {
            for (var j = 0; j < teamNamelist.length / 2; j++) {
                if (teamNamelist[j] != noOne & teamNamelist[teamNamelist.length - 1 - j] != noOne) {
                    matches.push(teamNamelist[j] + " vs " + teamNamelist[teamNamelist.length - 1 - j]);
                }
            }
            teamNamelist.splice(1, 0, teamNamelist.pop());
        }
    }
    else {
        for (i = 0; i < teamCount - 1; i++) {
            for (var j = 0; j < teamNamelist.length / 2; j++) {
                if (teamNamelist[j] != noOne & teamNamelist[teamNamelist.length - 1 - j] != noOne) {
                    matches.push(teamNamelist[j] + " vs " + teamNamelist[teamNamelist.length - 1 - j]);
                }
            }
            teamNamelist.splice(1, 0, teamNamelist.pop());
        }
    }
    return (matches)
}
// ********************************************************************************************************
// Function for removing freeSlot while second slot is free

function removefreeSlot(objWithFreeSlot) {
    noFreeSlotObj = {}
    for (slot in objWithFreeSlot) {
        if (objWithFreeSlot[slot] != "freeSlot") {
            noFreeSlotObj[slot] = objWithFreeSlot[slot]
        }
    } return noFreeSlotObj
}
// ********************************************************************************************************



matches = listOfMatches(teamList)

matchlen = matches.length
list = []
if (matchlen % 2 != 0) {
    matches.push("freeSlot")
    for (i = 0; i < matchlen; i += 2) {
        list.push({ Slot1: matches[i], Slot2: matches[i + 1] })
    }
    list.splice(list.length - 1, 0,removefreeSlot(list[list.length - 1]))
    list.splice(list.length - 1, 1)
}
else {
    for (i = 0; i < matchlen; i += 2) {
        list.push({ Slot1: matches[i], Slot2: matches[i + 1] })
    }
}
// ************************************************************************************************************************
// function for finding the dates if the nearest day is saturday
function saturday(firstDate) {

    dates = [`${firstDate.getDate()}.${firstDate.getMonth()+1}.${firstDate.getFullYear()} - ${days[firstDate.getDay()]}`]
    Sunday_ = new Date(firstDate.getTime() + secsInADAy)
    dates.push(`${Sunday_.getDate()}.${Sunday_.getMonth()+1}.${Sunday_.getFullYear()} - ${days[Sunday_.getDay()]}`)
    
    for (i = 1; i <= Math.ceil(list.length/2); i++) {
        var nextSun = new Date(firstDate.getTime() + (7 * i) * secsInADAy);
        dates.push(`${nextSun.getDate()}.${nextSun.getMonth()+1}.${nextSun.getFullYear()} - ${days[nextSun.getDay()]}`)
        var nextSat = new Date(nextSun.getTime() + secsInADAy);
        dates.push(`${nextSat.getDate()}.${nextSat.getMonth()+1}.${nextSat.getFullYear()} - ${days[nextSat.getDay()]}`)
    } return (dates)
}
// ************************************************************************************************************************
// function for finding the dates if the nearest day is sunday
function Sunday(firstDate) {

    dates = [`${firstDate.getDate()}.${firstDate.getMonth()+1}.${firstDate.getFullYear()} - ${days[firstDate.getDay()]}`]
    saturday_ = (new Date(firstDate.getTime() + (6) * secsInADAy))
    dates.push(`${saturday_.getDate()}.${saturday_.getMonth()+1}.${saturday_.getFullYear()} - ${days[saturday_.getDay()]}`)
    Sunday_ = new Date(saturday_.getTime() + secsInADAy)
    dates.push(`${Sunday_.getDate()}.${Sunday_.getMonth()+1}.${Sunday_.getFullYear()} - ${days[Sunday_.getDay()]}`)

    for (i = 1; i <= Math.ceil(list.length/2); i++) {
        var nextSat = new Date(saturday_.getTime() + (7 * i) * secsInADAy);
        dates.push(`${nextSat.getDate()}.${nextSat.getMonth()+1}.${nextSat.getFullYear()} - ${days[nextSat.getDay()]}`)
        var nextSun = new Date(nextSat.getTime() + secsInADAy);
        dates.push(`${nextSun.getDate()}.${nextSun.getMonth()+1}.${nextSun.getFullYear()} - ${days[nextSun.getDay()]}`)
    } return (dates)
}
// ************************************************************************************************************************
// finding whether the nearest day is saturday or sunday
for (i = 0; i < 7; i++) {
    date = new Date(startDate.getTime() + i * (secsInADAy))
    if (date.getDay() == 0) {
        dates = Sunday(date)
        break
    }
    else if (date.getDay() == 6) {
        dates = saturday(date)
        break
    }
}
// ************************************************************************************************************************
// making shedule 

function sheduling (dates, matches){
    shedule = {}
    for (i=0;i<list.length;i++){
        shedule[dates[i]]=matches[i]
    }
}
sheduling(dates,list)

console.log(`\nNo of teams participating : ${teamCount}\n`)
console.log("--------------------------------------------------------------------------\n")
i = 1
for (date in shedule){
    console.log(`\nDay : ${i}`)
    console.log(`\nDate : ${date}\n`)
    console.log("Slots : ",shedule[date],"\n")
    console.log("--------------------------------------------------------------------------")
    i = i+1
}
console.log(`\nTotal no of days : ${i-1}`)