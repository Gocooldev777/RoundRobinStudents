competiters = { Teams: ["<<team1>>", "<<team2>>", "<<team3>>", "<<team4>>"], startDate: '*2022-08-27*' }

// Counting the Number of Matches
count = 0
for (i of competiters.Teams) {
    for (d = competiters.Teams.indexOf(i) + 1; d < competiters.Teams.length; d++) {
        count++
    }
}
console.log("<<<Number of Matches>>> :", count)
var numberOfmatches = competiters.Teams.length - 1;

// Assinging Duplicate value if it is odd
duplicatevalue = "<<<duplicate>>>"
if (competiters.Teams.length % 2 != 0) {
    competiters.Teams.push(duplicatevalue)
}

// Rival Teams by Round Robin Method
playteams = []
if (competiters.Teams.includes("<<<duplicate>>>")) {
    numberOfmatches += 1
}
else {
    numberOfmatches = numberOfmatches
}
for (i = 0; i < numberOfmatches; i++) {

    for (var j = 0; j < competiters.Teams.length / 2; j++) {
        if (competiters.Teams[j] != duplicatevalue & competiters.Teams[competiters.Teams.length - 1 - j] != duplicatevalue) {
            playteams.push(competiters.Teams[j] + " vs " + competiters.Teams[competiters.Teams.length - 1 - j]);
        }

    }
    competiters.Teams.splice(1, 0, competiters.Teams.pop());
}
if (playteams.length % 2 != 0) {
    playteams.push("Nothing")
}

// Date Function 
const days = ["**Sunday**", "**Monday**", "**Tuesday**", "**Wednesday**", "**Thursday**", "**Friday**", "**Saturday**"];
var startDATE = new Date(competiters.startDate)
var date1 = new Date()
var date2 = new Date()
dateLIST = []
for (let i = 0; i <= 6; i++) {
    if (startDATE.getDay() + i == 6) {
        date1.setDate(startDATE.getDate() + i + 1)
        date2.setDate(date1.getDate() - 1)
    }
}
dayLIST = []
var firstDAY = new Date(date1);
var secondDAY = new Date(date2)
for (e = 0; e <= 4; e++) {
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
schedule = []
for (i = 0; i < playteams.length; i = i + 2) {
    dateSET = {}
    datein = i
    dateSET["Date:::"] = dateLIST[count]
    dateSET["Day:::"] = dayLIST[count]

    dateSET["Slot**no"] = 1
    dateSET["Match***No"] = i + 1
    dateSET["Morning***Batch"] = playteams[i]
    if (playteams[datein + 1] != "Nothing") {
        dateSET["Slot**No"] = 2
        dateSET["match***No"] = i + 2
        dateSET["Evening***Batch"] = playteams[datein + 1]
    }
    count++
    schedule.push(dateSET)
}
console.log(schedule)