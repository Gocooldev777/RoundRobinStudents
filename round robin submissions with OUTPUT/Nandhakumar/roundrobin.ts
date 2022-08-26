CODE IN TYPESCRIPT

// Teams
var totalTeams:any = {playingTeams:["Mumbai", "Chennai", "Kolkata", "Bangalore", "Hyderabad"],startDate:'2022-08-25'}
// Number of Matches Play
var count = 0

for (let i of totalTeams.playingTeams) {
  for (let a = totalTeams.playingTeams.indexOf(i) + 1; a < totalTeams.playingTeams.length; a++) {
    count++
  }
}
console.log("Total Matches:", count)
var numberOfRoundsPlay = totalTeams.playingTeams.length - 1
// Assign Empty Value For Odd Number
let emptyValue = "empty"
if (totalTeams.playingTeams.length % 2 != 0) {
  totalTeams.playingTeams.push(emptyValue)
}
// participate Teams
let participateTeams = []
if (totalTeams.playingTeams.includes("empty")) {
  numberOfRoundsPlay += 1
}
else {
  numberOfRoundsPlay = numberOfRoundsPlay
}
// Round Robin Method
for (let i = 0; i < numberOfRoundsPlay; i++) {
  for (var j = 0; j < totalTeams.playingTeams.length / 2; j++) {
    if (totalTeams.playingTeams[j] != emptyValue && totalTeams.playingTeams[totalTeams.playingTeams.length - 1 - j] != emptyValue) {
      participateTeams.push(totalTeams.playingTeams[j] + " VS " + totalTeams.playingTeams[totalTeams.playingTeams.length - 1 - j])
    }
  }
  totalTeams.playingTeams.splice(1, 0, totalTeams.playingTeams.pop())
}
if (participateTeams.length % 2 != 0) {
  participateTeams.push("None")
}
// console.log(participateTeams)

// Date Function 
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var d = new Date(totalTeams.startDate)
var matchDate1:any = new Date()
var matchDate2:any = new Date()
let dateList:any = []
for (let i = 0; i <= 6; i++) {
    if (d.getDay() + i == 6) {
      matchDate1.setDate(d.getDate() + i + 1)
      matchDate2.setDate(matchDate1.getDate() - 1)
    }
}
let matchDay:any=[]
var dt:any = new Date(matchDate1);
var dt2:any = new Date(matchDate2)
for (let e = 0; e <= 4; e++) {
    dateList.push((new Date(dt2)).toString().substring(4, 15))
    dateList.push((new Date(dt)).toString().substring(4, 15))
    matchDay.push(days[dt2.getDay(matchDate2)])
    matchDay.push(days[dt.getDay(matchDate1)])
    dt.setDate(dt.getDate() + 7)
    dt2.setDate(dt2.getDate() + 7)
}
// console.log(dateList)
// console.log(matchDay)
let ob:any = {}
count = 0
let list = []
for (let i = 0; i < participateTeams.length; i = i + 2) {
    
    let d= i
    ob["Date"] = dateList[count]
    ob["Day"]=matchDay[count]

    ob["Slot"]=1
    ob["Match"] = i + 1
    ob["Batch-1"] = participateTeams[i]
    if (participateTeams[d + 1] != "None") {
        ob["Slot"]=2
        ob["Match"] = i + 2
        ob["Batch-2"] = participateTeams[d + 1]
    }
    count++
    list.push(ob)
}
console.log(list)