let totalTeams: any = ["team1", "team2", "team3", "team4", "team5", "team6", "team7"]
let arrAy = []
let count = 0
for (let i of totalTeams) {
    let index = totalTeams.indexOf(i)
    length = totalTeams.length
    for (j = index + 1; j < length; j++) {
        count++
        arrAy.push(i + " vs " + totalTeams[j])
    }
}
console.log("TotalTeams:", totalTeams)
console.log("TOTAL NUMBER OF MATCHES:", count)
var totalRounds = totalTeams.length - 1;
let empty: any = "emptyValue"
if (totalTeams.length % 2 != 0) {
    totalTeams.push(empty)
}
let teams: any = []

if (totalTeams.includes("emptyValue")) {
    totalRounds += 1
}
else {
    totalRounds = totalRounds
}

for (let i = 0; i < totalRounds; i++) {

    for (var j = 0; j < totalTeams.length / 2; j++) {
        if (totalTeams[j] != empty && totalTeams[totalTeams.length - 1 - j] != empty) {
            teams.push(totalTeams[j] + " vs " + totalTeams[totalTeams.length - 1 - j]);
        }

    }
    totalTeams.splice(1, 0, totalTeams.pop());
}
if (teams.length % 2 != 0) {
    teams.push()
}
let saturday: any = new Date('2022-08-27')
let sunday: any = new Date('2022-08-28')
function dateGet(saturday: any, sunday: any) {
    let arr = new Array();
    let day = new Date(saturday);
    let day1 = new Date(sunday)
    for (let i = 0; i < count / 2; i++) {
        arr.push((new Date(day)).toString().substring(0, 15));
        arr.push((new Date(day1).toString().substring(0, 15)))
        day.setDate(day.getDate() + 7);
        day1.setDate(day1.getDate() + 7)
    }
    return arr
}

let array: any = dateGet(saturday, sunday)



function result(teams: any, array: any) {

    let numberOfMatch = 1
    let day = 1
    let k = 0
    for (let i = 0; i < teams.length; i++) {
        if (numberOfMatch % 2 != 0) {
            console.log('DAY:', day++, 'DATE:', array[j]);
            j = j + 1
        }

        if (i % 2 == 0) {


            console.log('Number Of Match:', numberOfMatch++, "Slot:1");
            console.log(teams[i]);

        }
        else {
            console.log('Number Of Match:', numberOfMatch++, 'Slot:2');
            console.log(teams[i]);
            console.log('-----------------------------------------------------');
        }
    }


}

result(teams, array)