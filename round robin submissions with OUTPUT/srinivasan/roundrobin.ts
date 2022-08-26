let Teams:string[] = ['TEAM1', 'TEAM2', 'TEAM3', 'TEAM4','TEAM5']//,'TEAM6','TEAM7','TEAM8','TEAM9','TEAM10','TEAM11','TEAM12','TEAM13']
let len:number=Teams.length
let numberOfTeams:number = Teams.length

//METHOD-ROUND ROBIN FOR SHUFFLING TEAMS WITHOUT REPEATED
function teamPairing(Teams:any, numberOfTeams:any) {
  const scheduledTeams:any = []
  const Null = -1;
  if (numberOfTeams % 2 === 1) {
    Teams.push(Null); // so we can match algorithm for even numbers
    numberOfTeams += 1;
  }
  for (let index:number = 0; index < numberOfTeams - 1; index += 1) {
    scheduledTeams[index]= [] // create inner match array for round j
  
    for (let Away:number = 0; Away < numberOfTeams / 2; Away += 1) {
      // console.log(numberOfTeams,'NOONO');
      const reverseTeams = numberOfTeams - 1 - Away;
      if (Teams[Away] !== Null && Teams[reverseTeams] !== Null) {   // flip orders to ensure everyone gets roughly numberOfTeams/2 home matches
        scheduledTeams[index].push([Teams[reverseTeams], 'vs', Teams[Away]]);
      }
    }
    Teams.splice(1, 0, Teams.pop());
  }
  return scheduledTeams
}
let temporary:any = teamPairing(Teams, numberOfTeams)
// console.log(temporary,'h');
let perTeamArray:any=[]
for(let eachTeams in temporary){
  for(let teamInsideTeams in temporary[eachTeams]){
    perTeamArray.push(temporary[eachTeams][teamInsideTeams])
  }
  ;
}
// console.log(perTeamArray,'proper');

  let GroupA:any = []
  let GroupB:any = []
//SEPARATING PROPER SCHEDULED TEAMS INTO TWO GROUP FOR EASY ACCESS
function splittingTeams(perTeamArray:any) {

  for (let perElement in perTeamArray) {
    // console.log(perTeamArray[i],'oo');
    if(Number(perElement)%2==0){
      GroupA.push(perTeamArray[perElement])
    }else{
      GroupB.push(perTeamArray[perElement])
    }
   
    
  }
}
splittingTeams(perTeamArray)
// console.log(GroupA,'A');
//FUNCTION DATE AND DAY
let saturday:any = new Date('2022-08-27')
let sunday:any = new Date('2022-08-28')
function dateGet(saturday:Date, sunday:Date) {
  var arr = new Array();
  var dt = new Date(saturday);
  var dt1 = new Date(sunday)
  for (let i = 0; i < perTeamArray.length / 2; i++) {
    arr.push((new Date(dt)).toString().substring(0, 15));
    arr.push((new Date(dt1).toString().substring(0, 15)))
    dt.setDate(dt.getDate() + 7);
    dt1.setDate(dt1.getDate() + 7)
  }
  return arr
}

let array = dateGet(saturday, sunday)

//FUNCTION SUMMARY 1
function result(GroupA:string[], GroupB:string[]) {
  let matchNo = 1
  let day = 1
  for (let i in GroupA) {
    console.log(`DAY:${day++}            DATE:- ${array[i]}`);
    console.log(`MATCH NO:- ${matchNo++}     **SLOT-1**`);
    console.log(GroupA[i]);
    console.log('                                                     ');
    console.log(`MATCH NO:- ${matchNo++}     **SLOT-2**`);
    console.log(GroupB[i]);
    console.log('---------------------------');

  }
  console.log('Total Number of Matches', matchNo-1);
}
result(GroupA, GroupB)

//FUNCTION FOR FINDING TEAMS WIN OR LOSE WITH RANDOM
let finalResult:any=[]
function pointsTable(perTeamArray:any){
 
  for(let eachElement in perTeamArray){
   
   let matchResult=['0','WIN','LOSE']
    let x = Math.floor((Math.random() * 2) + 1);
     finalResult.push([perTeamArray[eachElement],matchResult[x]])
  }
}
pointsTable(perTeamArray)

let points:any=[]
for(let eachElement in finalResult){
  if(finalResult[eachElement][1]==='WIN'){
    points.push(finalResult[eachElement][0][0])
  }else if(finalResult[eachElement][1]==='LOSE'){
    points.push(finalResult[eachElement][0][2])
  }
}
let item:any=[]
for(let ok=0;ok<len;ok++){
  item.push(0)
}
//POINTS ASSINING
function pointsAssigning(){
if(len%2==1){
  for(let i=0;i<points.length;i++){
    for(let j=0;j<Teams.length-1;j++){
      if(points[i]==Teams[j]){
         if(j in item){
                item[j]+=2;
              }else{
                  item[j]=2
              }
      }
    }
  }
     console.log(`TEAMS       points `);
  for(let i=0;i<Teams.length-1;i++){
    console.log(`${Teams[i]}         ${item[i]}`);
}
}else if(len%2==0){
  for(let i=0;i<points.length;i++){
    for(let j=0;j<Teams.length;j++){
      if(points[i]==Teams[j]){
         if(j in item){
                item[j]+=2;
              }else{
                  item[j]=2
              }
      }
    }
  }
       console.log(`TEAMS       points `);
  for(let i=0;i<Teams.length;i++){
        console.log(`${Teams[i]}         ${item[i]}`);
}
}
}
pointsAssigning()
