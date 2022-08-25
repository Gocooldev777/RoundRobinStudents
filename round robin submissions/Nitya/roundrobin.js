teams=['team1','team2','team3','team4','team5']
starting_date="2022-08-25"
arr=[]
//counting the no of match
count=0
for(i of teams){
  for(j=teams.indexOf(i)+1;j<teams.length;j++){
    count++
    
  }
}
console.log('no of mat:' +count)

//var is total no of rounds
var numberOfRounds = teams.length-1
//-----------
suppOrt='N'
if(teams.length%2!=0){
    teams.push(suppOrt)
}
//round robin method in teams
match_Teams=[]
if(teams.includes('N')){
    numberOfRounds += 1
}else{
    numerOfRounds = numberOfRounds
}
for(i=0;i<numberOfRounds;i++){
    for(var j=0;j<teams.length/2;j++){
        if(teams[j] != suppOrt && teams[teams.length-1-j] != suppOrt){
            match_Teams.push(teams[j] + 'vs'+ teams[teams.length-1-j])
        }
    }teams.splice(1,0,teams.pop())  
}
//console.log(match_Teams)
if(match_Teams.length %2 !=0){
    match_Teams.push('nothing')
    
}
//---------
//date  calculation
let date = new Date(starting_date)
let match_date1 = new Date ()
let match_date2 = new Date ()
for (i=0; i<=6 ; i++){
    if(date.getDay() +i ==6){
        match_date1.setDate(date.getDate()+i)
        match_date2.setDate(match_date1.getDate()+1)
    }
}

console.log(match_date1)
console.log(match_date2)
//date and day calculation
const days=['sunday','monday','tuesday','wednesday','thusday','friday','saturday']
match_dates=[]
match_days=[]

var sunday = new Date(match_date1)
var saturday = new Date(match_date2)
for(i=0;i<=4;i++){
    match_dates.push((new Date(sunday)).toString().substring(4,15))
    match_dates.push(new Date(saturday).toString().substring(4,15))
    match_days.push(days[sunday.getDay(match_date1)])
    match_days.push(days[saturday.getDay(match_date2)])
    sunday.setDate(sunday.getDate()+7)
    saturday.setDate(saturday.getDate()+7)


}
 console.log(match_dates)
 console.log(match_days)
 console.log(match_Teams)
//----------
//setting with teams
count=0
for(i=0;i<match_Teams.length;i=i+2){
    console.log('----------------------------------------------------------')
    console.log('slot 1')
    console.log('Match No:- '   +(i+1))
    console.log('Date:-'  +match_dates[count])
    console.log('Day:-'  + match_days[count])
    console.log('Morning Team:-'    +match_Teams[i])
    if(match_Teams[i+1] != 'N'){
        console.log('------------------------------------------------------')
        console.log('slot 2')
        console.log('Match No:-'   +(i+2))
        console.log('Date:-'   +match_dates[count])
        console.log('Day:-'   + match_days[count])
        console.log('Evening Team :-'    +match_Teams[i+1])
    }
    count++
}