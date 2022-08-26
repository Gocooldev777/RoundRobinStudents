let emp = " "
let Teams:any= ["Team 1", "Team 2", "Team 3", "Team 4", "Team 5"]
let len = Teams.length
//counting total number of Matches
let count = 0
var rounds = Teams.length - 1
for (let j of Teams) {
    for (let i = Teams.indexOf(j) + 1; i < Teams.length; i++) {
        count++
    }
}
// console.log("Total number of Matches", count)
//total Matches who played by whom
let Matches:any = []
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
//separating Matches by odd even indexs
let ArrayOfTeam:any = []
for (let i in Matches) {
    for (let j in Matches[i]) {
        ArrayOfTeam.push(Matches[i][j])
    }
  }
let even:any = []
let odd:any = []
for (let i of ArrayOfTeam) {
    if (ArrayOfTeam.indexOf(i) % 2 == 0) {
        even.push(i)
    } else {
        odd.push(i)
    }
}

//getting date
let saturday:any = new Date('2022-08-27')
let sunday :any= new Date('2022-08-28')
function dateGet(saturday:number, sunday:number) {
    var arr = new Array();
    var dt = new Date(saturday);
    var dt1 = new Date(sunday)
    for (let i = 0; i < ArrayOfTeam.length / 2; i++) {
        arr.push((new Date(dt)).toString().substring(0, 15));
        arr.push((new Date(dt1).toString().substring(0, 15)))
        dt.setDate(dt.getDate() + 7);
        dt1.setDate(dt1.getDate() + 7)
    }
    return arr
}
let array = dateGet(saturday, sunday)
//slot declaration
function final(even:string[], odd:string[]) {
    let matchNo = 1
    let day = 1
    for (let i in even) {
        console.log('DAY:', day++,'    ', 'DATE:-', array[i]);
        console.log('Match No:-', matchNo++, '  ', 'Slot-1');
        console.log(even[i]);
        console.log('Match No:-', matchNo++, '  ', 'Slot-2');
        console.log(odd[i]);
    }
    console.log('Total Number of Matches', matchNo - 1);
}
final(even, odd)



javascript in code :-

let emp = " "
let Teams:any= ["Team 1", "Team 2", "Team 3", "Team 4", "Team 5"]
let len = Teams.length
//counting total number of Matches
let count = 0
var rounds = Teams.length - 1
for (let j of Teams) {
    for (let i = Teams.indexOf(j) + 1; i < Teams.length; i++) {
        count++
    }
}
// console.log("Total number of Matches", count)
//total Matches who played by whom
let Matches:any = []
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
//separating Matches by odd even indexs
let ArrayOfTeam:any = []
for (let i in Matches) {
    for (let j in Matches[i]) {
        ArrayOfTeam.push(Matches[i][j])
    }
  }
let even:any = []
let odd:any = []
for (let i of ArrayOfTeam) {
    if (ArrayOfTeam.indexOf(i) % 2 == 0) {
        even.push(i)
    } else {
        odd.push(i)
    }
}

//getting date
let saturday:any = new Date('2022-08-27')
let sunday :any= new Date('2022-08-28')
function dateGet(saturday:number, sunday:number) {
    var arr = new Array();
    var dt = new Date(saturday);
    var dt1 = new Date(sunday)
    for (let i = 0; i < ArrayOfTeam.length / 2; i++) {
        arr.push((new Date(dt)).toString().substring(0, 15));
        arr.push((new Date(dt1).toString().substring(0, 15)))
        dt.setDate(dt.getDate() + 7);
        dt1.setDate(dt1.getDate() + 7)
    }
    return arr
}
let array = dateGet(saturday, sunday)
//slot declaration
function final(even:string[], odd:string[]) {
    let matchNo = 1
    let day = 1
    for (let i in even) {
        console.log('DAY:', day++,'    ', 'DATE:-', array[i]);
        console.log('Match No:-', matchNo++, '  ', 'Slot-1');
        console.log(even[i]);
        console.log('Match No:-', matchNo++, '  ', 'Slot-2');
        console.log(odd[i]);
    }
    console.log('Total Number of Matches', matchNo - 1);
}
final(even, odd)