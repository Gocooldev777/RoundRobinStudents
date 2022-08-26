// Teams
Teams = ["T1", "T2", "T3", "T4","T5"]
// Number of Matches Play
count = 0
for (i of Teams) {
  for (a = Teams.indexOf(i) + 1; a < Teams.length; a++) {
    count++
  }
}
console.log("Total Matches:", count)
var matchForEachTeam = Teams.length - 1
// Assign Empty Value For Odd Number
empt = "empty"
if (Teams.length % 2 != 0) {
  Teams.push(empt)
}
// participate Teams-----------------
participateTeams = []
if (Teams.includes("empty")) {
  matchForEachTeam += 1
}
else {
  matchForEachTeam = matchForEachTeam
}
// Round Robin Method-----------------------------------
for (i = 0; i < matchForEachTeam; i++) {
  for (var j = 0; j < Teams.length / 2; j++) {
    if (Teams[j] != empt & Teams[Teams.length - 1 - j] != empt) {
      participateTeams.push(Teams[j] + " VS " + Teams[Teams.length - 1 - j])
    }
  }
  Teams.splice(1, 0, Teams.pop())
}
if (participateTeams.length % 2 != 0) {
  participateTeams.push()
}
console.log(participateTeams)

saturday = new Date('2022-08-27')
sunday = new Date('2022-08-28')
function dateGet(saturday, sunday) {
  var arr = new Array();
  var dt = new Date(saturday);
  var dt1 = new Date(sunday)
  for (i = 0; i < count/2; i++) {
    arr.push((new Date(dt)).toString().substring(0, 15));
    arr.push((new Date(dt1).toString().substring(0, 15)))
    dt.setDate(dt.getDate() + 7);
    dt1.setDate(dt1.getDate() + 7)
  }
  return arr
}

let array = dateGet(saturday, sunday)
// console.log(array)

function match(groupA,groupB){
    // const firstslot = slotsofmatch[0]
    // const secondslot = slotsofmatch[1]

    matches = 1
    day = 1
    j =0
    for(let i =0;i<groupA.length;i++){
        if(matches%2!=0){
            console.log('day:',day++,'date:',array[j]);
            j=j+1
        }
        // else{
        //     console.log('day:',day++);
        //}
        if(i%2==0){
            console.log('Matches',matches++,'','slot 1')
            console.log(groupA[i])
            // console.log('       *****                   ')

        }
        else{
            console.log('Match', matches++,' ','slot 2')
            console.log(groupA[i])
            console.log('******************************************************');
        }
}
console.log('no of matches',(matches-1))
}

match(participateTeams)