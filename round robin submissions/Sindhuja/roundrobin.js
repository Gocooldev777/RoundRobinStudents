emp = " "
Teams= ["Team 1", "Team 2", "Team 3", "Team 4", "Team 5"]
len = Teams.length
//counting total number of Matches
count = 0
var rounds = Teams.length - 1
for (j of Teams) {
    for (i = Teams.indexOf(j) + 1; i < Teams.length; i++) {
        count++
    }
}
// console.log("Total number of Matches", count)
//total Matches who played by whom
Matches = []
if (Teams.length % 2 == 1) {
    Teams.push(emp)
    len += 1
}
for (let i = 0; i < Teams.length - 1; i++) {
    Matches[i] = []
    for (let d = 0; d < Teams.length / 2; d++) {
        const reverseTeam = Teams.length - 1 - d
        if (Teams[d] !== emp && Teams[reverseTeam] !== emp) {
            Matches[i].push([Teams[reverseTeam], 'VS', Teams[d]])
        }
    }
    Teams.splice(1, 0, Teams.pop())
}
// console.log("Total Matches", Matches)
//separating Matches by odd even indexs
Arrayofteam = []
for (i in Matches) {
    for (j in Matches[i]) {
        Arrayofteam.push(Matches[i][j])
    }
    //  console.log(ArrayT,"hdf")
}
even = []
odd = []
for (i of Arrayofteam) {
    if (Arrayofteam.indexOf(i) % 2 == 0) {
        even.push(i)
    } else {
        odd.push(i)
    }
}
// console.log("even index", even)
// console.log("odd index", odd)
//getting date
saturday = new Date('2022-08-27')
sunday = new Date('2022-08-28')
function dateGet(saturday, sunday) {
    var arr = new Array();
    var dt = new Date(saturday);
    var dt1 = new Date(sunday)
    for (i = 0; i < Arrayofteam.length / 2; i++) {
        arr.push((new Date(dt)).toString().substring(0, 15));
        arr.push((new Date(dt1).toString().substring(0, 15)))
        dt.setDate(dt.getDate() + 7);
        dt1.setDate(dt1.getDate() + 7)
    }
    return arr
}
let array = dateGet(saturday, sunday)
//slot declaration
function final(even, odd) {
    matchNo = 1
    day = 1
    for (i in even) {
        //console.log('-----------------------------------------------------');
        console.log('DAY:', day++,'    ', 'DATE:-', array[i]);
        console.log('Match No:-', matchNo++, '  ', 'Slot-1');
        console.log(even[i]);
        console.log('                                                     ');
        console.log('Match No:-', matchNo++, '  ', 'Slot-2');
        console.log(odd[i]);
        console.log('-----------------------------------------------------');

    }
    console.log('Total Number of Matches', matchNo - 1);
}
final(even, odd)