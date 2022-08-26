code in typescript:

let empt = "None"
let tournament:any= ["Team 1", "Team 2", "Team 3", "Team4", "Team5"]
var p = tournament.length
//counting total number of Matches
let count = 0
var rounds = tournament.length - 1
for (let k of tournament) {
    for (let i = tournament.indexOf(k) + 1; i < tournament.length; i++) {
        count++
    }
}
console.log("Total number of Matches", count)
//total Matches who played by whom
var matches:any[] = []
if (tournament.length % 2 == 1) {
    tournament.push(empt)
    p += 1
}
for (let i = 0; i < tournament.length - 1; i++) {
    matches[i] = []
    for (let  a = 0; a < tournament.length / 2; a++) {
        const reverseteam = tournament.length - 1 - a
        if (tournament[a] !== empt && tournament[reverseteam] !== empt) {
            matches[i].push([tournament[reverseteam], 'vs', tournament[a]])
        }
    }
    tournament.splice(1, 0, tournament.pop())
}
console.log("Total Matches", matches)
//separating Matches by oddIndex evenIndex indexs
let ArrayTeam :any= []
for (let i in matches) {
    for (let j in matches[i]) {
        ArrayTeam.push(matches[i][j])
    }
}
var evenIndex :any= []
var oddIndex :any= []
for (let i of ArrayTeam) {
    if (ArrayTeam.indexOf(i) % 2 == 0) {
        evenIndex.push(i)
    } else {
        oddIndex.push(i)
    }
}
console.log("evenIndex index", evenIndex)
console.log("oddIndex index", oddIndex)
//getting date
let saturday :any= new Date('2022-08-27')
let sunday:any = new Date('2022-08-28')
function dateGet(saturday:string, sunday:string) {
    var arr = new Array();
    var dt = new Date(saturday);
    var dt1 = new Date(sunday)
    for (let i = 0; i < ArrayTeam.length / 2; i++) {
        arr.push((new Date(dt)).toString().substring(0, 15));
        arr.push((new Date(dt1).toString().substring(0, 15)))
        dt.setDate(dt.getDate() + 7);
        dt1.setDate(dt1.getDate() + 7)
    }
    return arr
}
let array = dateGet(saturday, sunday)
//slot declaration
function result(evenIndex:string[], oddIndex:string[] ) {
    var matchNo = 1
    var day = 1
    for (let i in evenIndex) {
        //console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
        console.log('Day:', day++, 'Date:-', array[i]);
        console.log('Match No:-', matchNo++, '  ', 'Slot-1');
        console.log(evenIndex[i]);
        console.log('                                                     ');
        console.log('Match No:-', matchNo++, '  ', 'Slot-2');
        console.log(oddIndex[i]);
        console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^');

    }
    console.log('Total Number of Matches', matchNo - 1);
}
result(evenIndex, oddIndex)