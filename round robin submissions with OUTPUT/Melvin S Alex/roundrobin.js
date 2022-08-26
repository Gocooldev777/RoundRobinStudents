Teams = ['team1', 'team2', 'team3', 'team4', 'team5']
// Number of Matches Play
count = 0
for (i of Teams) {
  for (a = Teams.indexOf(i) + 1; a < Teams.length; a++) {
    count++
  }
}

let numberOfTimesEachTeamPLay = Teams.length - 1
// Assign a temporary Value For Odd Number
temp = "temporary"
if (Teams.length % 2 != 0) {
  Teams.push(temp)
}
// participate Teams0
matches = []
if (Teams.includes("temporary")) {
  numberOfTimesEachTeamPLay += 1
}
else {
  numberOfTimesEachTeamPLay = numberOfTimesEachTeamPLay
}
// Round Robin Method
for (i = 0; i < numberOfTimesEachTeamPLay; i++) {
  for (let j = 0; j < Teams.length / 2; j++) {
    if (Teams[j] != temp & Teams[Teams.length - 1 - j] != temp) {
      matches.push(Teams[j] + " VS " + Teams[Teams.length - 1 - j])
    }
  }
  Teams.splice(1, 0, Teams.pop())
}
if (matches.length % 2 != 0) {
  matches.push()
}


saturday = new Date('2022-08-27')
sunday = new Date('2022-08-28')
function dateGet(saturday, sunday) {
  let arr = new Array();
  let dt = new Date(saturday);
  let dt1 = new Date(sunday)
  for (i = 0; i < count / 2; i++) {
    arr.push((new Date(dt)).toString().substring(0, 15));
    arr.push((new Date(dt1).toString().substring(0, 15)))
    dt.setDate(dt.getDate() + 7);
    dt1.setDate(dt1.getDate() + 7)
  }
  return arr
}

let array = dateGet(saturday, sunday)



function result(matches) {

  matchNum = 1
  day = 1
  j = 0
  for (i = 0; i < matches.length; i++) {
    if (matchNum % 2 != 0) {
      console.log('DAY:', day++, 'DATE:', array[j]);
      j = j + 1
    }

    if (i % 2 == 0) {


      console.log('Match No:', matchNum++, '  ', 'Slot:1');
      console.log(matches[i]);
      console.log('');
    }
    else {
      console.log('Match No:', matchNum++, '  ', 'Slot:2');
      console.log(matches[i]);
      console.log('-----------------------------------------------------');
    }
  }


  console.log('Total Number of Matches', matchNum - 1);
}

result(matches)