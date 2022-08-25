var players = ["India", "Australia", "Pakistan", "England", "srilanka"]
arr = []
count = 0
for (i of players) {
    for (i = players.indexOf(i) + 1; i < players.length; i++) {
        count++
        arr.push(i + "  vs  " + players[i])

    }
}
console.log("number of matches:", count)
var numberOfRounds = players.length - 1;
duplicate = "duplicate"
if (players.length % 2 != 0) {
    players.push(duplicate)
}
console.log(players)
teams = []
if (players.includes("duplicate")) {
    numberOfRounds += 1
}
else {
    numberOfRounds = numberOfRounds
}
for (i = 0; i < numberOfRounds; i++) {
    for (j = 0; j < players.length / 2; j++) {
        if (players[j] != duplicate & players[players.length - 1 - j] != duplicate) {
            teams.push(players[j] + "  vs " + players[players.length - 1 - j]);
        }
    }
    players.splice(1, 0, players.pop())
}
if (teams.length % 2 != 0) {
    teams.push("none")
}

const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
var d = new Date('2022-08-20')
var date1 = new Date()
var date2 = new Date()
datelist = []
for (let i = 0; i <= 6; i++) {
    if (d.getDay() + i == 6) {
        date1.setDate(d.getDate() + i + 1)
        date2.setDate(date1.getDate() - 1)
    }
}
day = []
var dt = new Date(date1);
var dt2 = new Date(date2)
for (e = 0; e <= teams.length/4; e++) {
    datelist.push((new Date(dt2)).toString().substring(4, 15))
    datelist.push((new Date(dt)).toString().substring(4, 15))
    day.push(days[dt2.getDay(date2)])
    day.push(days[dt.getDay(date1)])
    dt.setDate(dt.getDate() + 7)
    dt2.setDate(dt2.getDate() + 7)
}
console.log(datelist)
console.log(day)
count = 0
list = []
for (i = 0; i < teams.length; i = i + 2) {
    emptobj = {}
    d = i
    emptobj["Date"] = datelist[count]
    emptobj["Day"] = day[count]

    emptobj["slot_no"] = 1
    emptobj["match_No"] = i + 1
    emptobj["morning_Batch"] = teams[i]
    if (teams[d + 1] != "none") {
        emptobj["slot_No"] = 2
        emptobj["match_No"] = i + 2
        emptobj["evening_Batch"] = teams[d + 1]
    }
    count++
    list.push(emptobj)
}
console.log(list)
