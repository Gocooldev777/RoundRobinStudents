teams = ["mumbai", "chennai", "delhi", "kalcut", "indiana", "rome",'kamal'];
startingDate = "06-08-2022";
venues = ["chepauk"];

//Function to return matchups based on Round Robin
const RoundRobinTeam = (teams) => {
  groups = {};
  matchupSchedule = [];
  matchUp = [];

  // if an odd number, add a null Team
  if (teams.length % 2 === 1) {
    teams.push(null);
  }
 
  const Group1 = teams.slice(0, Math.floor(teams.length / 2));
  const Group2 = teams.slice(Group1.length, teams.length);

  for (let r = 0; r < teams.length - 1; r++) {
    let round = [];
    for (let team = 0; team < teams.length / 2; team++) {
      if (Group1[team] !== null && Group2[team] !== null) {
        round.push({ Group1: Group1[team], Group2: Group2[team] });
      }
    }

    // clockwise rotation (with 1st team fixed)

    const lastGroup1team = Group1[Group1.length - 1];
    const firstGroup2team = Group2[0];

    Group1.splice(-1, 1);
    Group2.splice(0, 1);
    Group1.splice(1, 0, firstGroup2team);
    Group2.push(lastGroup1team);

    groups[`Round ${r + 1}`] = round;
    matchupSchedule.push(round);
  }

  //Merging Matchups In a Single Object
  for (i = 0; i < matchupSchedule.length; i++) {
    for (j of matchupSchedule[i]) {
      matchUp.push(j);
    }
  }

  return matchUp;
};
matchUp = RoundRobinTeam(teams);

//Function to return n number of Weekend (day and Date)
const arrayOfWeekends = (tournmentstartDate, matchUp) => {
  changeDateformat = new Date(tournmentstartDate);
  date =
    changeDateformat.getDate() +
    "-" +
    (changeDateformat.getMonth() + 1) +
    "-" +
    changeDateformat.getFullYear();
  startDate = new Date(date);

  const startingDay = startDate.getDay();

  dayandDate = {};
  listOfweekends = [];

  // Loop to return next n-weekend day and date
  for (i = 0; i < matchUp.length * 10; i++) {
    startDate.setDate(startDate.getDate() + 1);
    if (startDate.getDay() == 6 || startDate.getDay() == 0) {
      day = startDate.toString().slice(7, 10);
      date =
        day + "-" + (startDate.getMonth() + 1) + "-" + startDate.getFullYear();
      weekend = {};
      if (startDate.getDay() == 6) {
        weekend["Saturday"] = date;
        listOfweekends.push(weekend);
      } else {
        weekend["Sunday"] = date;
        listOfweekends.push(weekend);
      }
    }
  }

  return listOfweekends;
};
weekendDates = arrayOfWeekends(startingDate, matchUp);

//Function to return number of after given Date
const assignedWeekdays = (weekendDates, venues) => {
  weekendOnmatch = [];
  numberofVenues = venues.length;
  for (indexOfday = 0; indexOfday < weekendDates.length; indexOfday++) {
    if (indexOfday % 2 == 0) {
      for (i = 0; i < numberofVenues * 2; i++) {
        weekendOnmatch.push(weekendDates[indexOfday]);
      }
    } else {
      for (i = 0; i < numberofVenues * 2; i++) {
        weekendOnmatch.push(weekendDates[indexOfday]);
      }
    }
  }
  return weekendOnmatch;
};

scheduledWeekdays = assignedWeekdays(weekendDates, venues);

//Function fo assigning Slots for Weekdays
const slots = (scheduledWeekdays) => {
  slot = [];
  for (i = 0; i < scheduledWeekdays.length; i++) {
    if (i % 2 == 0) {
      slot.push(1);
    } else {
      slot.push(2);
    }
  }
  return slot;
};
slot = slots(scheduledWeekdays);

//Function to return Schedule Table
const timeTable = () => {
  Table = [];
  for (i = 0; i < matchUp.length; i++) {
    singleMatch = {};
    singleMatch["match"] = i + 1;
    singleMatch["slot"] = slot[i];
    singleMatch["team1"] = matchUp[i]["Group1"];
    singleMatch["team2"] = matchUp[i]["Group2"];
    singleMatch["day"] = Object.keys(scheduledWeekdays[i]);
    singleMatch["date"] = Object.values(scheduledWeekdays[i]);
    singleMatch["venue"] = venues[0];
    decide = Math.floor(Math.random() * 2);
    if (decide == 0) {
      singleMatch["winner"] = matchUp[i]["Group1"];
      singleMatch["defeated"] = matchUp[i]["Group2"];
    } else {
      singleMatch["winner"] = matchUp[i]["Group2"];
      singleMatch["defeated"] = matchUp[i]["Group1"];
    }

    Table.push(singleMatch);
  }
  return Table;
};
scheduledTable = timeTable();



//Function to return summery
const summary = () => {
  console.log('************** MATCH SCHEDULE **************');
  for (let match = 0; match < scheduledTable.length; match++) {
    console.log("------------------------------------------------------------------------------------")
    console.log(`MATCH NO : ${(match + 1)}                                            DATE:${scheduledTable[match]['date']}  `)

    
    console.log ( `\n                            ${scheduledTable[match]['team1']} vs ${scheduledTable[match]['team2']} `)
    console.log(` \nSLOT:${scheduledTable[match]['slot']}                                                   DAY:${scheduledTable[match]['day']}`)
  console.log(`VENUE :${scheduledTable[match]['venue']}`)
}
console.log('------------------------------------------------------------------------------------')
};
summary();


//Function to return Match winners List 
const matchResults =(scheduledTableOfteams) =>{
  matchparticipants = []
  for(i = 0;i< scheduledTableOfteams.length;i++){
      winnerandDefeated= {}
      winnerandDefeated[scheduledTableOfteams[i].winner] = (scheduledTableOfteams[i].defeated)
      matchparticipants.push(winnerandDefeated)
  }
return matchparticipants
}
results = (matchResults(scheduledTable))



//Function for return Sorted points Table (hight - low)
const pointsTable = (objOfWinnerandDefeated,matchteam) =>{
//-------
const findReappers = (find,Team) =>{
let counter = 0;
for (element of Team) {
  if (element == find) {
        counter++;
    }
    
}
  return counter
}
//-------------------



winnerTeam =[] 
for(i = 0;i<objOfWinnerandDefeated.length;i++){winnerTeam.push(Object.keys(matchparticipants[i]).join(''))}
let unique = [...new Set(winnerTeam)];

teamwithPoints = []
for(eachTeams of unique){
teamwithPoints[eachTeams]=(findReappers(eachTeams,winnerTeam ))*2
}


for(i of matchteam){
find = findReappers(i,unique)
  if(find == 0){
    teamwithPoints[i] = 0
}
}


//Sorting Teams with 
function sorting(teamwithPoint){
  sorted = {}       
   points = []
   for(team in teamwithPoint){ 
        points.push(teamwithPoint[team]) }   
           function st(a,b){
           return(a-b)}
           points = points.sort(st)
           for(j of points){
               for(k in teamwithPoint){
                    if(j == teamwithPoint[k]){
                      sorted[k] = teamwithPoint[k]}}}
       return sorted}  
  //Reversed sorting (high points - Low points)
  sortedPointsTable = sorting(teamwithPoints)
  reversedPointlist = {}
  const reversedKeys = Object.keys(sortedPointsTable).reverse();
  reversedKeys.forEach(key => {
    reversedPointlist[key]= sortedPointsTable[key];
  });
  return reversedPointlist
}

sortedPointsTable = (pointsTable(results,teams))

//Function For Return Match summary
const shortmatchSummary = (winnerandDefeated) =>{
  console.log('\n************** MATCH SUMMARY **************\n')
  for(i = 0;i<winnerandDefeated.length;i++){
    runDifference = Math.floor(Math.random() * 90) + 10;
    console.log(`on ${(winnerandDefeated[i].date).toString()}, ${(winnerandDefeated[i].winner).toString()} and  ${(winnerandDefeated[i].defeated).toString()} played , Where team ${(winnerandDefeated[i].winner).toString()} won by ${runDifference} runs`)
  }
  

}
summaryOfmatch = shortmatchSummary(scheduledTable)


// Function to return Points Table Summary
const pointsTablesummary = (pointsList) =>{
  console.log('\n************** POINTS TABLE **************\n')
  console.log('PLACE      TEAM              POINTS\n')
  teams = Object.keys(pointsList)
  points = Object.values(pointsList)
  for(i=0;i<teams.length;i++){
    if(teams[i]!='null'){
    console.log(`${i+1}         ${teams[i].padEnd(14,' ')}       ${points[i]}`)}
  }}
pointsTablesummary(sortedPointsTable)
