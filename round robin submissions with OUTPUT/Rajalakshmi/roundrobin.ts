// Interface
interface Tournament{
    playingTeams:string[],
    startDate:string
}
// Teams
const tournamentSchedule:Tournament = { 
    playingTeams: ["Mumbai","Chennai","Bangalore","Punjab","Delhi","Hyderabad","Rajasthan"], 
    startDate: '2022-08-25' 
    }
//---------------------------------------------------------------------------------------------
// Counting the Number of Matches
let count = 0
for (let i of tournamentSchedule.playingTeams) {
    for (let d = tournamentSchedule.playingTeams.indexOf(i) + 1; d < tournamentSchedule.playingTeams.length; d++) {
        count++
    }
}
console.log("Number of Matches :", count)
var numberOfRounds = tournamentSchedule.playingTeams.length - 1;
//---------------------------------------------------------------------------------------------
// Assigning Dope Value if Odd Number of Teams for support
let dopeTeam = "dummy"
if (tournamentSchedule.playingTeams.length % 2 != 0) {
    tournamentSchedule.playingTeams.push(dopeTeam)
}
//---------------------------------------------------------------------------------------------
// Rival Teams by Round Robin Method
const roundRobinFunction=(arr:any) =>{
    let teams = []
    if (arr.includes("dummy")) {
        numberOfRounds += 1
    }
    else {
        numberOfRounds = numberOfRounds
    }
    for (let i = 0; i < numberOfRounds; i++) {
        for (var j = 0; j < arr.length / 2; j++) {
            if (arr[j] != dopeTeam && arr[arr.length - 1 - j] != dopeTeam) {
                teams.push(arr[j] + " vs " + arr[arr.length - 1 - j]);
            }
        }
        arr.splice(1, 0, arr.pop());
    }
    return teams
}
//---------------------------------------------------------------------------------------------
// Rival Teams
let rivalTeams = roundRobinFunction(tournamentSchedule.playingTeams)
if (rivalTeams.length % 2 != 0) {
    rivalTeams.push("None")
}
//---------------------------------------------------------------------------------------------
// Date Function 
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var d = new Date(tournamentSchedule.startDate)
var saturday:Date = new Date()
var sunday :Date = new Date()
// Finding the Date
let dateList = []
for (let i = 0; i <= 6; i++) {
    if (d.getDay() + i == 6) {
        saturday.setDate(d.getDate() + i + 1)
        sunday.setDate(saturday.getDate() - 1)
    }
}
//---------------------------------------------------------------------------------------------
// Finding the Day
let day = []
var dt:any = new Date(saturday);
var dt2:any = new Date(sunday)
for (let e = 0; e <= rivalTeams.length / 4; e++) {
    dateList.push((new Date(dt2)).toString().substring(4, 15))
    dateList.push((new Date(dt)).toString().substring(4, 15))
    day.push(days[dt2.getDay(sunday)])
    day.push(days[dt.getDay(saturday)])
    dt.setDate(dt.getDate() + 7)
    dt2.setDate(dt2.getDate() + 7)
}
//---------------------------------------------------------------------------------------------
// Scheduling the Teams
count = 0
let matchList = []
console.log("\n")
console.log("******************************************    Match Schedule     **********************************************")
for (let i = 0; i < rivalTeams.length; i = i + 2) {
    let slotOne :any= {}
    let slotTwo :any= {}
    let d = i
    console.log("\n")
    console.log(`Match No: ${i + 1}`)
    console.log("---------------------------------------------------------------------------------------------------------------")
    console.log(`Date  : ${dateList[count]}                                                                   Day : ${day[count]}`)
    console.log(`                                            ${rivalTeams[i]}                                                   `)
    console.log(`Venue : Wankhede                                                                    Timing : 3:30PM IST  `)
    console.log("---------------------------------------------------------------------------------------------------------------")
    console.log("\n")
    if (rivalTeams[d + 1] != "None") {
        console.log(`Match No: ${i + 2}`)
        console.log("---------------------------------------------------------------------------------------------------------------")
        console.log(`Date  : ${dateList[count]}                                                                   Day : ${day[count]}`)
        console.log(`                                            ${rivalTeams[d + 1]}                                               `)
        console.log(`Venue : Chepauk                                                                    Timing : 7:30PM IST  `)
        console.log("---------------------------------------------------------------------------------------------------------------")
    }
    slotOne["Match_No"] = i + 1
    slotOne["Slot_no"] = 1
    slotOne["Mornning_Match"] = rivalTeams[i]
    slotOne["Date"] = dateList[count]
    slotOne["Day"] = day[count]
    if (rivalTeams[d + 1] != "None") {
        slotTwo["Match_No"] = i + 2
        slotTwo["Slot_No"] = 2
        slotTwo["Evening_Match"] = rivalTeams[d + 1]
        slotTwo["Date"] = dateList[count]
        slotTwo["Day"] = day[count]
    }
    count++
    matchList.push(slotOne)
    matchList.push(slotTwo)
}
//---------------------------------------------------------------------------------------------