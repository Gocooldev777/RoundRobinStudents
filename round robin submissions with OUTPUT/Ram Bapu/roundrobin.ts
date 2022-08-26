interface Tournament{
    name:string,
    teams:string[],
    startDate:Date
}

const tournament:Tournament = {
    name: 'World Cup',
    teams:[
        'India','Australia','England','Pakistan','Bangladesh',
        'New Zealand','South Africa','Srilanka','West Indies'
    ],
    startDate: new Date()
}

let totalMatchesList:any = []
roundRobin(tournament.teams)

//Function to create the match list in round robin 
function roundRobin(teams:String[]){
    let numberOfTeams = tournament.teams.length
    const dummyTeam:String = 'dummy'
    if(numberOfTeams%2 === 1){
        teams.push(dummyTeam)
        numberOfTeams+=1
    }

    let numberOfMatches = 1
    for(let i=0;i<numberOfTeams-1;i++) {
        for(let j=0;j<numberOfTeams/2;j++){
            let k=numberOfTeams-1-j
            if(teams[j]!==dummyTeam && teams[k]!==dummyTeam){
                let matchListObject = {
                    matchNumber:numberOfMatches++,
                    firstTeam:teams[j],
                    secondTeam:teams[k],
                    match:teams[j] + ' vs ' +teams[k]
                }
                totalMatchesList.push(matchListObject)
            }
        }
        teams.splice(1,0,teams.pop()!)
    }
    findNextSatAndSunday()
}


//Function to find the next Saturday and Sunday from start date
function findNextSatAndSunday(){
    let startDate = tournament.startDate
    let saturdayDate = new Date()
    let sundayDate = new Date()
    for(let i=0;i<=6;i++){
        if(startDate.getDay() +i == 6){
            saturdayDate.setDate(startDate.getDate()+i)
            sundayDate.setDate(saturdayDate.getDate()+1)
        }
    }
    matchDateSlotAssignment(saturdayDate,sundayDate)
}

//Function to assign the date and slot for each match
function matchDateSlotAssignment(saturdayDate:Date,sundayDate:Date){
    let matchSchedule:any = {}
    let matchList:any = []
    totalMatchesList.forEach((element: string) => {
        matchList.push(element.match)
    })
    
    for(let i=0;i<matchList.length;i=i+4)
    {
        matchSchedule[matchList[i]] = saturdayDate.toString().substring(0,15) +' Slot: slot 1'
        if(i+1<matchList.length)
            matchSchedule[matchList[i+1]] = saturdayDate.toString().substring(0,15) + ' Slot: slot 2'
        saturdayDate.setDate(saturdayDate.getDate() + 7)
        for(let j= i+2;j<matchList.length;)
        {
            matchSchedule[matchList[j]] = sundayDate.toString().substring(0,15) + ' Slot: slot 1'
            if(j+1<matchList.length)
                matchSchedule[matchList[j+1]] = sundayDate.toString().substring(0,15) + ' Slot: slot 2'
            sundayDate.setDate(sundayDate.getDate() + 7)
            break
        }
    }
    printSchedule(matchSchedule)
}

//Function to print the schedule
function printSchedule(matchSchedule:any){
    console.log(tournament.name + ' Tournament Schedule');
    let matchNumber:number = 1
    for(let i in matchSchedule){
        console.log('----------------------------------------------')
        console.log('Id: '+'WC'+matchNumber.toString().padStart(2,'0'));
        console.log('Match: '+ matchNumber++)
        console.log(i)
        console.log('Date: ' + matchSchedule[i])
    }
    findingTheWinningTeam()
}

//Function to find and print the winning team in each match using Random function 
function findingTheWinningTeam(){
    let winningTeamsList:any = []
    totalMatchesList.forEach((match: { firstTeam: string; secondTeam: string}) => {
        let teamsInMatch = [match.firstTeam,match.secondTeam]
        
        let winningTeamInMatch:string = teamsInMatch[Math.floor(Math.random()*teamsInMatch.length)]
        let winningTactics = ['runs','wickets']
        let wonByTactic:string = winningTactics[Math.floor(Math.random()*winningTactics.length)]

        if(wonByTactic === 'runs'){
            let runs = Math.round(Math.floor(Math.random()*1000)/4)
            winningTeamsList.push({
                winningTeam:winningTeamInMatch,
                result:winningTeamInMatch +' won by '+runs+' runs'})
        }else if(wonByTactic === 'wickets'){
            let wickets = Math.ceil(Math.random()*10)
            winningTeamsList.push({
                winningTeam:winningTeamInMatch,
                result:winningTeamInMatch + ' won by '+ wickets + ' wickets'})
        }
    })

    console.log('----------------------------------------------\n')
    console.log('Result of Matches')
    console.log('----------------------------------------------\n')
    winningTeamsList.forEach((element: { result: string}) => {
        console.log(element.result);
    });
    pointsTable(winningTeamsList)
}

//Function to print the points table of the tournament
function pointsTable(winningTeamsList:any){
    console.log('\nPoints Table')
    console.log('--------------------------------------------\n')

    const dummyTeam:String = 'dummy'
    tournament.teams.forEach(team =>{
        if(team !== dummyTeam ){
            let points:number = 0
            winningTeamsList.forEach((element: { winningTeam: string})=>{
                let winningTeam = element.winningTeam
                if(team === winningTeam){
                    points+=2
                }
            })
            console.log(team.padEnd(20,' ')+' '+points+ ' points')
        }
    })
}