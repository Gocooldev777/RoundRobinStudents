var cricketTeams = ["team1", "team2", "team3", "team4","team5","team6","team7"]
teamMates = []
count = 0
for (i of cricketTeams) {
    for (i = cricketTeams.indexOf(i) + 1; i < cricketTeams.length; i++) {
        count++
        teamMates.push(i + "  vs  " + cricketTeams[i])

    }
}
//------Number of Rounds;                                                              

console.log("number of matches:", count)
var number_Of_Rivals = cricketTeams.length - 1;
dumyteam = "dumyteam"
if (cricketTeams.length % 2 != 0) {
    cricketTeams.push(dumyteam)
}
console.log(cricketTeams)
participants = []
if (cricketTeams.includes("dumyteam")) {
    number_Of_Rivals += 1
}
else {
    number_Of_Rivals = number_Of_Rivals
}
for (i = 0; i < number_Of_Rivals; i++) {
    for (j = 0; j < cricketTeams.length / 2; j++) {
        if (cricketTeams[j] != dumyteam & cricketTeams[cricketTeams.length - 1 - j] != dumyteam) {
            participants.push(cricketTeams[j] + "  vs " + cricketTeams[cricketTeams.length - 1 - j]);
        }
    }
    cricketTeams.splice(1, 0, cricketTeams.pop())
}
if (participants.length % 2 != 0) {
    participants.push("none")
}
//------- This variable use to fix Days;
const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
var d = new Date('2022-08-27')
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
for (e = 0; e <= 4; e++) {
    datelist.push((new Date(dt2)).toString().substring(4, 15))
    datelist.push((new Date(dt)).toString().substring(4, 15))
    day.push(days[dt2.getDay(date2)])
    day.push(days[dt.getDay(date1)])
    dt.setDate(dt.getDate() + 7)
    dt2.setDate(dt2.getDate() + 7)
}
//------- Sheduling Days and date;
count = 0
schedule = []
for (i = 0; i < participants.length; i = i + 2) {
   dayAndDate = {}
    d = i
    dayAndDate["Date"] = datelist[count]
    dayAndDate["Day"] = day[count]

    dayAndDate["Slot No"] = 1
    dayAndDate["Match No"] = i + 1
    dayAndDate["Morning Batch"] = participants[i]
    if (participants[d + 1] != "none") {
        dayAndDate["Slot No"] = 2
        dayAndDate["Match No"] = i + 2
        dayAndDate["Evening Batch"] = participants[d + 1]
    }
    count++
    schedule.push( dayAndDate)
}
console.log(schedule)