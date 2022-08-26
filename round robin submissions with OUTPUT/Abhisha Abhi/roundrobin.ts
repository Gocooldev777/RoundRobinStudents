let empty:string = "None team"
var Teams :any= ["Team 1", "Team 2", "Team 3", "Team4","Team5"]
let n = Teams.length
//counting total number of Matches
var count = 0
let rounds = Teams.length - 1
for (let k of Teams) {
    for (let i = Teams.indexOf(k) + 1; i < Teams.length; i++) {
        count++
    }
}
console.log("Total number of Matches", count)
//total Matches who played by whom
let Matches:any[] = []
if (Teams.length % 2 == 1) {
    Teams.push(empty)
    n += 1
}
for (let i = 0; i < Teams.length - 1; i++) {
    Matches[i] = []
    for (let a = 0; a < Teams.length / 2; a++) {
        const reverseteam = Teams.length - 1 - a
        if (Teams[a] !== empty && Teams[reverseteam] !== empty) {
            Matches[i].push([Teams[reverseteam], 'vs', Teams[a]])
        }
    }
    Teams.splice(1, 0, Teams.pop())
}
//separating Matches by odd even indexes:-
let ArrayTeam:any[] = []
for (let i in Matches) {
    for (let j in Matches[i]) {
        ArrayTeam.push(Matches[i][j])
    }
}
let even:any[] = []
let odd:any[] = []
for (var i of ArrayTeam) {
    if (ArrayTeam.indexOf(i) % 2 == 0) {
        even.push(i)
    } else {
        odd.push(i)
    }
}
//getting date and day:-
let saturday:any = new Date('2022-08-27')
let sunday:any = new Date('2022-08-28')
function dateGet(saturday:Date, sunday:Date) {
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
//slot declaration with date and day:-
function result(even:string[], odd:string[]) {
    var matchNo = 1
    var day = 1
    for (i in even) {
        console.log('Day:', day++, 'Date:', array[i]);
        console.log('Match No:', matchNo++, 'Slot-1',even[i]);
        console.log('Match No:', matchNo++, 'Slot-2',odd[i]);

    }
}
result(even, odd)