let Teams:(any) = ['team1', 'team2', 'team3', 'team4','team5']
// Number of Matches Play
let count = 0
for (let i of Teams) {
  for (let a = Teams.indexOf(i) + 1; a < Teams.length; a++) {
    count++
  }
}

let numberOfTimesEachTeamPLay = Teams.length - 1
// Assign a temporary Value For Odd Number
let temp = "temporary"
if (Teams.length % 2 != 0) {
  Teams.push(temp)
}
// participate Teams0
let matches:any = []
if (Teams.includes("temporary")) {
  numberOfTimesEachTeamPLay += 1
}
else {
  numberOfTimesEachTeamPLay = numberOfTimesEachTeamPLay
}
// Round Robin Method
for (let i = 0; i < numberOfTimesEachTeamPLay; i++) {
  for (let j = 0; j < Teams.length / 2; j++) {
    if (Teams[j] != temp && Teams[Teams.length - 1 - j] != temp) {
      matches.push(Teams[j] + " VS " + Teams[Teams.length - 1 - j])
    }
    
  }
  Teams.splice(1, 0, Teams.pop())
}
if (matches.length % 2 != 0) {
  matches.push("None")
}
//console.log(matches)

let saturday = new Date('2022-08-27')
let sunday = new Date('2022-08-28')
function dateGet(saturday:any, sunday:any) {
  let arr = new Array();
  let dt = new Date(saturday);
  let dt1 = new Date(sunday)
  for (let i = 0; i < count/2; i++) {
    arr.push((new Date(dt)).toString().substring(0, 15));
    arr.push((new Date(dt1).toString().substring(0, 15)))
    dt.setDate(dt.getDate() + 7);
    dt1.setDate(dt1.getDate() + 7)
  }
  return arr
}

let array = dateGet(saturday, sunday)
//console.log(array)


function result(matches:any) {
  
  let matchNum = 1
  let day = 1
  let j=0

  
   for(let i =0;i<matches.length;i++) {
      if(matchNum%2!=0){
    console.log('DAY:', day++, 'DATE:', array[j]);
    j=j+1
      }
   
    if(i%2==0){ 
   
   
    console.log('Match No:', matchNum++,' Slot:1');
    console.log(matches[i]);
    //console.log('');
    }
    else {                                                    
    console.log('Match No:', matchNum++,' Slot:2');
    console.log(matches[i]);
    console.log('-----------------------------------------------------');
  }
}
  

  console.log('Total Number of Matches', matchNum-1);
}

result(matches)