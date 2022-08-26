totalTeams = ["team1", "team2", "team3", "team4"]  
arrAy = []
count = 0
for (i of totalTeams) {
    index = totalTeams.indexOf(i)
    length = totalTeams.length                       //count the number of matches
    for (j = index + 1; j < length; j++) {          
        count++
        arrAy.push(i + " vs " + totalTeams[j])       //seperate the teams 
    }
}
console.log("TotalTeams:", totalTeams)
console.log("TOTAL NUMBER OF MATCHES:", count)
var totalRounds = totalTeams.length - 1;
empty = "emptyValue"
if (totalTeams.length % 2 != 0) {                    //add the empty value if odd number of teams
    totalTeams.push(empty)
}
teams = []

if (totalTeams.includes("emptyValue")) {
    totalRounds += 1
}
else {
    totalRounds = totalRounds
}

for (i = 0; i < totalRounds; i++) {

    for (var j = 0; j < totalTeams.length / 2; j++) {
        if (totalTeams[j] != empty & totalTeams[totalTeams.length - 1 - j] != empty) {  //team arrange by round robin method
            teams.push(totalTeams[j] + " vs " + totalTeams[totalTeams.length - 1 - j]);
        }

    }
    totalTeams.splice(1, 0, totalTeams.pop());
}

if (teams.length % 2 != 0) {
    teams.push()
}
saturday = new Date('2022-08-27')                    //date function
sunday = new Date('2022-08-28')
function dateGet(saturday, sunday) {
    let arr = new Array();
    let day = new Date(saturday);
    let day1 = new Date(sunday)
    for (i = 0; i < count / 2; i++) {
        arr.push((new Date(day)).toString().substring(0, 15));
        arr.push((new Date(day1).toString().substring(0, 15)))
        day.setDate(day.getDate() + 7);
        day1.setDate(day1.getDate() + 7)
    }
    return arr
}

let array = dateGet(saturday, sunday)

function result(teams, array) {

    numberOfMatch = 1
    day = 1
    k = 0
    for (i in teams) {
        if (numberOfMatch % 2 != 0) {
            console.log('DAY:', day++, 'DATE:', array[j]);
            j = j + 1
        }

        if (i % 2 == 0) {


            console.log('Number Of Match:', numberOfMatch++, '  ', 'Slot:1');
            console.log(teams[i]);
            console.log('');
        }
        else {
            console.log('Number Of Match:', numberOfMatch++, '  ', 'Slot:2');
            console.log(teams[i]);
            console.log('************************************************');
        }
    }


}

result(teams, array)
