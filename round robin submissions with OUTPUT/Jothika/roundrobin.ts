interface teams {
    Teams: any,
    startDate: string
}
let competitors = { Teams: ["team1", "team2", "team3", "team4"], startDate: '2022-08-25' }
//---------------------------------------------------------------------------------------------
// Counting the Number of Matches
var count = 0
for (let i of competitors.Teams) {
    for (let d = competitors.Teams.indexOf(i) + 1; d < competitors.Teams.length; d++) {
        count++
    }
}
console.log("Number of Matches :", count)
var numberOfmatches = competitors.Teams.length - 1;
//---------------------------------------------------------------------------------------------
// duplicate to adjust if the teams are odd
var duplicatevalue = "duplicate"
if (competitors.Teams.length % 2 != 0) {
    competitors.Teams.push(duplicatevalue)
}
//---------------------------------------------------------------------------------------------
//  Round Robin Method
function rounds(arr: any) {
    var playteams = []
    if (competitors.Teams.includes("duplicate")) {
        numberOfmatches += 1
    }
    else {
        numberOfmatches = numberOfmatches
    }
    for (let i = 0; i < numberOfmatches; i++) {

        for (var j = 0; j < arr.length / 2; j++) {
            if (arr[j] != duplicatevalue && arr[arr.length - 1 - j] != duplicatevalue) {
                playteams.push(arr[j] + " vs " + arr[arr.length - 1 - j]);
            }

        }
        arr.splice(1, 0, arr.pop());
    }
    return playteams
}
var playteams = rounds(competitors.Teams)
if (playteams.length % 2 != 0) {
    playteams.push("Nothing")
}
//---------------------------------------------------------------------------------------------
// Date Function                   
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var startDATE = new Date(competitors.startDate)
var date1: any = new Date()
var date2: any = new Date()
const dateLIST = []
for (let i = 0; i <= 6; i++) {
    if (startDATE.getDay() + i == 6) {
        date1.setDate(startDATE.getDate() + i + 1)
        date2.setDate(date1.getDate() - 1)
    }
}
const dayLIST = []
var firstDAY: any = new Date(date1);
var secondDAY: any = new Date(date2)
for (let e = 0; e <= 4; e++) {
    dateLIST.push((new Date(secondDAY)).toString().substring(4, 15))
    dateLIST.push((new Date(firstDAY)).toString().substring(4, 15))
    dayLIST.push(days[secondDAY.getDay(date2)])
    dayLIST.push(days[firstDAY.getDay(date1)])
    firstDAY.setDate(firstDAY.getDate() + 7)
    secondDAY.setDate(secondDAY.getDate() + 7)
}
console.log(dateLIST)
console.log(dayLIST)
count = 0
var schedule = []
for (let i = 0; i < playteams.length; i = i + 2) {
    var dateSET: any = {}
    var datein: any = i
    dateSET["Date"] = dateLIST[count]
    dateSET["Day"] = dayLIST[count]

    dateSET["Slot_no"] = 1
    dateSET["Match_No"] = i + 1
    dateSET["Morning_Batch"] = playteams[i]
    if (playteams[datein + 1] != "Nothing") {
        dateSET["Slot_No"] = 2
        dateSET["match_No"] = i + 2
        dateSET["Evening_Batch"] = playteams[datein + 1]
    }
    count++
    schedule.push(dateSET)
}
console.log(schedule)