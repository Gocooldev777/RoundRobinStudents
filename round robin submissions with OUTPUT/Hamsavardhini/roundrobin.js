tournament ={Teams:["CSK", "RCB", "MI", "RR", "DD"],startDate:'2022-08-25'} 


count = 0
for (i of tournament.Teams) {
    for (d = tournament.Teams.indexOf(i) + 1; d < tournament.Teams.length; d++) {
        count++
    }
}
console.log("Number of Matches :", count)
var totalRounds = tournament.Teams.length - 1;

supportValue = "dummy"
if (tournament.Teams.length % 2 != 0) {
    tournament.Teams.push(supportValue)
}

teams = []
if (tournament.Teams.includes("dummy")) {
    totalRounds += 1
}
else {
    totalRounds = totalRounds
}
for (i = 0; i < totalRounds; i++) {

    for (var j = 0; j < tournament.Teams.length / 2; j++) {
        if (tournament.Teams[j] != supportValue & tournament.Teams[tournament.Teams.length - 1 - j] != supportValue) {
            teams.push(tournament.Teams[j] + " vs " + tournament.Teams[tournament.Teams.length - 1 - j]);
        }

    }
    tournament.Teams.splice(1, 0, tournament.Teams.pop());
}
console.log(teams)
if (teams.length % 2 != 0) {
    teams.push("None")
}
//---------------------------------------------------------------------------------------------
// Date Function 
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var d = new Date(tournament.startDate)
var date1 = new Date()
var date2 = new Date()
dateList = []
for (let i = 0; i <= 6; i++) {
    if (d.getDay() + i == 6) {
        date1.setDate(d.getDate() + i + 1)
        date2.setDate(date1.getDate() - 1)
    }
}
day=[]
var dt = new Date(date1);
var dt2 = new Date(date2)
for (e = 0; e <= 4; e++) {
    dateList.push((new Date(dt2)).toString().substring(4, 15))
    dateList.push((new Date(dt)).toString().substring(4, 15))
    day.push(days[dt2.getDay(date2)])
    day.push(days[dt.getDay(date1)])
    dt.setDate(dt.getDate() + 7)
    dt2.setDate(dt2.getDate() + 7)
}
// console.log(dateList)
// console.log(day)
count = 0
list = []
for (i = 0; i < teams.length; i = i + 2) {
    ob = {}
    d = i
    ob["Date"] = dateList[count]
    ob["Day"]=day[count]

    ob["Slot_no"]=1
    ob["Match_No"] = i + 1
    ob["Morning_Batch"] = teams[i]
    if (teams[d + 1] != "None") {
        ob["Slot_No"]=2
        ob["match_No"] = i + 2
        ob["Evening_Batch"] = teams[d + 1]
    }
    count++
    list.push(ob)
}
 console.log(list)