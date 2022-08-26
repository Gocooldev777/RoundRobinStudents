
let pool :any=['india','england','australian','pakistan','new zealand']
let starting_pool="2022-08-25"
let arr=[]
//counting the no of match.............................................................................
let count=0
for(let i of pool){
  for(j=pool.indexOf(i)+1;j<pool.length;j++){
    count++
    
  }
}
console.log('no of mat:' +count)

//var is total no of rounds..........................................................................
var numberOfRounds = pool.length-1
//-----------.........................................................................................
let suppOrt='D'
if(pool.length%2!=0){
    pool.push(suppOrt)
}
//round robin method in teams.............................................................................
let tournment_pool=[]
if(pool.includes('D')){
    numberOfRounds += 1
}else{
    let numerOgRounds = numberOfRounds
}
for(let i=0;i<numberOfRounds;i++){
    for(var j=0;j<pool.length/2;j++){
        if(pool[j] != suppOrt && pool[pool.length-1-j] != suppOrt){
            tournment_pool.push(pool[j] + 'vs'+ pool[pool.length-1-j])
        }
    }pool.splice(1,0,pool.pop())  
}
//console.log(match_Teams).............................................................................
if(tournment_pool.length %2 !=0){
    tournment_pool.push('nothing')
    
}
//-----------------------------------------------------------------------------------------------------
//date  calculation......................................................................................
let date = new Date(starting_pool)
let tournment_date1 = new Date ()
let tournment_date2 = new Date ()
for (let i=0; i<=6 ; i++){
    if(date.getDay() +i ==6){
        tournment_date1.setDate(date.getDate()+i)
        tournment_date2.setDate(tournment_date1.getDate()+1)
    }
}

console.log(tournment_date1)
console.log(tournment_date2)
//date and day calculation.................................................................................
const days=['sunday','monday','tuesday','wednesday','thursday','friday','saturday']
let tournment_dates=[]
let tournment_days=[]

var sunday :any = new Date(tournment_date1)
var saturday:any = new Date(tournment_date2)
for(let i=0;i<=4;i++){
    tournment_dates.push((new Date(sunday)).toString().substring(4,15))
    tournment_dates.push(new Date(saturday).toString().substring(4,15))
    tournment_days.push(days[sunday.getDay(tournment_date1)])
    tournment_days.push(days[saturday.getDay(tournment_date2)])
    sunday.setDate(sunday.getDate()+7)
    saturday.setDate(saturday.getDate()+7)


}
 console.log(tournment_dates)
 console.log(tournment_days)
 console.log(tournment_pool)
//----------................................................................................................
//seting with teams.........................................................................................
count=0
for(let i=0;i<tournment_pool.length;i=i+2){
    console.log('----------------------------------------------------------')
    console.log('slot 1')
    console.log('pool No:- '   +(i+1))
    console.log('Date:-'  +tournment_dates[count])
    console.log('Day:-'  + tournment_days[count])
    console.log('Morning pool:-'    +tournment_pool[i])
    if(tournment_pool[i+1] != 'N'){
        console.log('------------------------------------------------------')
        console.log('slot 2')
        console.log('pool No:-'   +(i+2))
        console.log('Date:-'   +tournment_dates[count])
        console.log('Day:-'   + tournment_days[count])
        console.log('Evening pool :-'    +tournment_pool[i+1])
    }
    count++
}
