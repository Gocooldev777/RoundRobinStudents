empty = "None team"
Teams = ["Team 1", "Team 2", "Team 3", "Team4","Team5"]
n = Teams.length
//counting total number of Matches:-
count = 0
var rounds = Teams.length - 1
for (k of Teams) {
    for (i = Teams.indexOf(k) + 1; i < Teams.length; i++) {
        count++
    }
}
console.log("Total number of Matches", count)
//total Matches who played by whom:-
Matches = []
if (Teams.length % 2 == 1) {
    Teams.push(empty)
    n += 1
}
for (let i = 0; i < Teams.length - 1; i++) {
    Matches[i] = []
    for (let a = 0; a < Teams.length / 2; a++) {
        const reverseteam = Teams.length - 1 - a
        if (Teams[a] !== empty && Teams[reverseteam] !== empty) {
            Matches[i].push([Teams[reverseteam] ,'vs' ,Teams[a]])
        }
    }
    Teams.splice(1, 0, Teams.pop())
}
//separating Matches by odd and even indexes:-
ArrayTeam = []
for (i in Matches) {
    for (j in Matches[i]) {
        ArrayTeam.push(Matches[i][j])
    }
}
even = []
odd = []
for (i of ArrayTeam) {
    if (ArrayTeam.indexOf(i) % 2 == 0) {
        even.push(i)
    } else {
        odd.push(i)
    }
}
//getting date
saturday = new Date('2022-08-27')
sunday = new Date('2022-08-28')
function dateGet(saturday, sunday) {
    var arr = new Array();
    var dt = new Date(saturday);
    var dt1 = new Date(sunday)
    for (i = 0; i < ArrayTeam.length / 2; i++) {
        arr.push((new Date(dt)).toString().substring(0, 15));
        arr.push((new Date(dt1).toString().substring(0, 15)))
        dt.setDate(dt.getDate() + 7);
        dt1.setDate(dt1.getDate() + 7)
    }
    return arr
}
let array = dateGet(saturday, sunday)
//slot declaration
function result(even, odd) {
    matchNo = 1
    day = 1
    for (i in even) {
        console.log('Day:', day++ , 'Date:',array[i])
        console.log('Match No:', matchNo++, '  ', 'Slot-1',even[i]);
        console.log('                                                     ');
        console.log('Match No:', matchNo++, '  ', 'Slot-2',odd[i]);
        console.log('-----------------------------------------------------');
    }
}
result(even, odd)