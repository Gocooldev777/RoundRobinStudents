var Groups = ["India","Pakistan","Sri Lanka","Australia","New Zealand"] //"South Africa","West Indies","Zimbabwe",etcc.......
var totalNumberOfGroups = Groups.length
function groupsMatching(Groups, totalNumberOfGroups) {
  const matchScheduling = [];
  const noValues = -1;
  if (totalNumberOfGroups % 2 === 1) {
    Groups.push(noValues);                                               // match for even numbers
    totalNumberOfGroups =totalNumberOfGroups + 1
  }
  for (let z = 0; z < totalNumberOfGroups - 1; z += 1) {
    matchScheduling[z] = [];                                         // create match array for round z
  
    for (let matches = 0; matches < totalNumberOfGroups / 2; matches += 1) {
      const groupsInReverse = totalNumberOfGroups - 1 - matches;
      if (Groups[matches] !== noValues && Groups[groupsInReverse] !== noValues) {           // swap the team orders to the every team get the matches
        matchScheduling[z].push([Groups[groupsInReverse]+'    '+ 'vs'+"    " + Groups[matches]]);
      }
    }
    Groups.splice(1, 0, Groups.pop());
  }
  return matchScheduling
}
var tournament = groupsMatching(Groups, totalNumberOfGroups)
//console.log(tournament);
var arrayForGroups=[]
for(let perGroups in tournament){
  for(let inGroups in tournament[perGroups]){
    arrayForGroups.push(tournament[perGroups][inGroups])
  }
  
}
// console.log(arrayForGroups,'FinalGroups');

var PoolA = []
var PoolB = []
function split(arrayForGroups) {
  for (let listOfGroups in arrayForGroups) {
    // console.log(arrayForGroups[i]);
    if(listOfGroups %2 ==0){
      PoolA.push(arrayForGroups[listOfGroups])
    }else{
      PoolB.push(arrayForGroups[listOfGroups])
    }
  }
}
split(arrayForGroups)
//console.log(PoolA);

var Saturday = new Date('2022-08-27')
var Sunday = new Date('2022-08-28')
function date(Saturday,Sunday) {
  var array = new Array();
  var matchDate = new Date(Saturday);
  var matchDate1 = new Date(Sunday)
  for (let i = 0; i < arrayForGroups.length / 2; i++) {
    array.push((new Date(matchDate)).toString().substring(0, 15));
    array.push((new Date(matchDate1).toString().substring(0, 15)))
    matchDate.setDate(matchDate.getDate() + 7);
    matchDate1.setDate(matchDate1.getDate() + 7)
  }
  return array
}

var array = date(Saturday,Sunday)
function splitTheGroups(PoolA,PoolB) {
 var game = 1
  var day = 1
  if(PoolA.length==PoolB.length){
    for (let i in PoolA) {
      console.log('__________________________________________________________');
      console.log('DAY:', day++, 'DATE:', array[i]);
      console.log('MATCH:',game++,'  ','<< SESSION : Afternoon >>');
      console.log(PoolA[i]);
      console.log('                 ---               ');
      console.log('MATCH:',game++,'  ','<< SESSION  : Night >>');
      console.log(PoolB[i]);
      console.log('___________________________________________________________');
  
    }
    console.log('Total Matches conducted in Tournament ~', (game-1) +' ' +"Matches");  
  }
  else{
    PoolB.push("No-Match Schedules")
    for (let i in PoolA) {
      console.log('___________________________________________________________');
      console.log('DAY:', day++, 'DATE:', array[i]);
      console.log('MATCH:',game++,'  ','<< SESSION : Afternoon >>');
      console.log(PoolA[i]);
      console.log('                                                     ');
      console.log('MATCH:',game++,'  ','<< SESSION  : Night >>');
      console.log(PoolB[i]);
      console.log('___________________________________________________________');
  
    }
    console.log('Total Matches conducted in Tournament ~', (game-2),' '+ "Matches");  
  }
  }
  splitTheGroups(PoolA, PoolB)