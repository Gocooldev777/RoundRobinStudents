//values (total teams)
//definig the teams in the object
interface totalTeams { eachTeam: string[] }
let totalTeams: any = { eachTeam: ["Team-1", "Team-2", "Team-3", "Team-4", "Team-5"] }

// running a round robin method for uniqe matches in between teams
let teams = []
let tempValue = "empty"                                                     //taking a empty dummy value
if (totalTeams.eachTeam.length % 2 != 0) {                              //comparing the number of teams are even or odd
    totalTeams.eachTeam.push(tempValue)                                 //if the number of team is odd then pushing a dummy value at end
}
let rounds = totalTeams.eachTeam.length - 1;                            
if (totalTeams.eachTeam.includes("empty")) {                            //if the teams array have "empty" string then impliment round by one
    rounds += 1
}
else {
    rounds = rounds                                                        //or else round less than team array length
}
for (let i = 0; i <rounds ; i++) {

    //running the Round robin algorithm for which team will play with whome and unique team matches

    for (let j = 0; j < totalTeams.eachTeam.length / 2; j++) {
        if (totalTeams.eachTeam[j] != tempValue && totalTeams.eachTeam[totalTeams.eachTeam.length - 1 - j] != tempValue) {
            teams.push(totalTeams.eachTeam[j] + " vs " + totalTeams.eachTeam[totalTeams.eachTeam.length - 1 - j]);
        }

    }
    totalTeams.eachTeam.splice(1, 0, totalTeams.eachTeam.pop());
}
if (teams.length % 2 != 0) {
    teams.push("None")
}

// setting up the dates for teams with some conditions 
const days: any = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let dat: any = new Date('2022-08-25')
let date1: any = new Date()
let date2: any = new Date()
let listOfDate: any = []
for (let i = 0; i <= 6; i++) {
    if (dat.getDay() + i == 6) {                    //running the loop for getting the days name
        date1.setDate(dat.getDate() + i + 1)
        date2.setDate(date1.getDate() - 1)
    }
}
let day: any = []
let dt: any = new Date(date1);
let dt2: any = new Date(date2)
for (let e = 0; e <= 4; e++) {
    listOfDate.push((new Date(dt2)).toString().substring(4, 15))
    listOfDate.push((new Date(dt)).toString().substring(4, 15))
    day.push(days[dt2.getDay(date2)])
    day.push(days[dt.getDay(date1)])
    dt.setDate(dt.getDate() + 7)
    dt2.setDate(dt2.getDate() + 7)
}
let count = 0;
let mainArr = [];
for (let i = 0; i < teams.length; i = i + 2) {                  //running the loop for the each team schedule
    let tempObj:any = {};
    dt = i;
    tempObj["Date"] = listOfDate[count];
    tempObj["Day"] = day[count];

    tempObj["Slot no"] = 1;
    tempObj["Match No"] = i + 1;
    tempObj["Morning Batch"] = teams[i];

    if (teams[dt + 1] != "None") {
        tempObj["Slot No"] = 2;
        tempObj["Match No"] = i + 2;
        tempObj["Evening Batch"] = teams[dt + 1];
    }
    count++;
    mainArr.push(tempObj);                                  //pushing the each day schedule in an array
}
//function for calculating the team matches
function totalNumberofMatches(val: any) {
    let sum = 0
    for (let i = 0; i <= val; i++) {
        sum = sum + i
    } return sum
}
console.log(`Total Number of Matches :-${totalNumberofMatches(totalTeams.eachTeam.length - 1)}`)// printing the message how many matches will be played
for (let i in mainArr) {                                                                           //running the loop for main array for indivisual day
    console.log(mainArr[i])                                                                         //printing the main array
    console.log("-----------------------------------")
}