let Teams = ['TEAM1', 'TEAM2', 'TEAM3', 'TEAM4','TEAM5']//,'TEAM6','TEAM7','TEAM8','TEAM9','TEAM10','TEAM11','TEAM12','TEAM13']
len=Teams.length
numberOfTeams = Teams.length


function teamPairing(Teams, numberOfTeams) {
  const scheduledTeams = [];
  const Null = -1;
  if (numberOfTeams % 2 === 1) {
    Teams.push(Null); // so we can match algorithm for even numbers
    numberOfTeams += 1;
  }
  for (let j = 0; j < numberOfTeams - 1; j += 1) {
    scheduledTeams[j] = []; // create inner match array for round j
  
    for (let Away = 0; Away < numberOfTeams / 2; Away += 1) {
      // console.log(numberOfTeams,'NOONO');
      const reverseTeams = numberOfTeams - 1 - Away;
      if (Teams[Away] !== Null && Teams[reverseTeams] !== Null) {   // flip orders to ensure everyone gets roughly numberOfTeams/2 home matches
        scheduledTeams[j].push([Teams[reverseTeams], 'vs', Teams[Away]]);
      }
    }
    Teams.splice(1, 0, Teams.pop());
  }
  return scheduledTeams
}
temporary = teamPairing(Teams, numberOfTeams)
// console.log(temporary,'h');
perTeamArray=[]
for(eachTeams in temporary){
  for(teamInsideTeams in temporary[eachTeams]){
    perTeamArray.push(temporary[eachTeams][teamInsideTeams])
  }
  ;
}
// console.log(perTeamArray,'proper');


function splittingTeams(perTeamArray) {
  GroupA = []
  GroupB = []
  for (perElement in perTeamArray) {
    // console.log(perTeamArray[i],'oo');
    if(perElement%2==0){
      GroupA.push(perTeamArray[perElement])
    }else{
      GroupB.push(perTeamArray[perElement])
    }
   
    
  }
}
splittingTeams(perTeamArray)
// console.log(GroupA,'A');

saturday = new Date('2022-08-27')
sunday = new Date('2022-08-28')
function dateGet(saturday, sunday) {
  var arr = new Array();
  var dt = new Date(saturday);
  var dt1 = new Date(sunday)
  for (i = 0; i < perTeamArray.length / 2; i++) {
    arr.push((new Date(dt)).toString().substring(0, 15));
    arr.push((new Date(dt1).toString().substring(0, 15)))
    dt.setDate(dt.getDate() + 7);
    dt1.setDate(dt1.getDate() + 7)
  }
  return arr
}

let array = dateGet(saturday, sunday)


function result(GroupA, GroupB) {
  matchNo = 1
  day = 1
  for (i in GroupA) {
    console.log(`DAY:${day++}            DATE:- ${array[i]}`);
    console.log(`MATCH NO:- ${matchNo++}     **SLOT-1**`);
    console.log(GroupA[i]);
    console.log('                                                     ');
    console.log(`MATCH NO:- ${matchNo++}     **SLOT-2**`);
    console.log(GroupB[i]);
    console.log('--------------------------------------------');

  }
  console.log('Total Number of Matches', matchNo-1);
}
result(GroupA, GroupB)


function pointsTable(perTeamArray){
  finalResult=[]
  for(eachElement in perTeamArray){
   
    matchResult=['0','WIN','LOSE']
    let x = Math.floor((Math.random() * 2) + 1);
     finalResult.push([perTeamArray[eachElement],matchResult[x]])
  }
    // console.log(finalResult);
}
pointsTable(perTeamArray)

//RANDOM VICTORY/LOSE CALCULATION
points=[]
for(eachElement in finalResult){
  // console.log(eachElement);
  for(everyElement in finalResult[eachElement]){

    
  }
  // console.log(everyElement);
  if(finalResult[eachElement][everyElement]==='WIN'){
    points.push(finalResult[eachElement][0][0])
  }else if(finalResult[eachElement][everyElement]==='LOSE'){
    points.push(finalResult[eachElement][0][2])
  }
}
// console.log(points);
item=[]
for(ok=0;ok<len;ok++){
  item.push(0)
}
// console.log(item);

//POINTS ASSINING
if(len%2==1){
  for(i=0;i<points.length;i++){
    for(j=0;j<Teams.length-1;j++){
      if(points[i]==Teams[j]){
         if(j in item){
                item[j]+=2;
              }else{
                  item[j]=2
              }
       
      }
    }
  }
  // console.log(item);
  console.log(`TEAMS       points `);
  for(let i=0;i<Teams.length-1;i++){
        console.log(`${Teams[i]}         ${item[i]}`);
}
}else if(len%2==0){
  for(i=0;i<points.length;i++){
    for(j=0;j<Teams.length;j++){
      if(points[i]==Teams[j]){
         if(j in item){
                item[j]+=2;
              }else{
                  item[j]=2
              }
       
      }
    }
  }
  // console.log(item);
  console.log(`TEAMS       points `);
  for(let i=0;i<Teams.length;i++){
        console.log(`${Teams[i]}         ${item[i]}`);
}
}
