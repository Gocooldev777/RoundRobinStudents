let Teams:any[] = ['Team1','Team2','Team3','Team4','Team5','Team6']
let slots:string[] = ['slot1', 'slot2'] 
var Obj:(any)={}
let array:any[] = []
let count=0
console.log('Teams:',Teams)
console.log("--------------------");
for(let i=0;i<Teams.length;i++){
    // console.log(i)
    for(let j=i+1;j<Teams.length;j++){
        count++
        array.push([Teams[i] , Teams[j]])
    }
}

console.log('List of Matches:',array)
console.log('No. of Matches:',count)

console.log("--------------------");


// function shuffle(array){                                                     // Shuffle function in array
//     for(i in array)
//     return array.sort(() => Math.random() - 0.5)
// }
// shuffle(array)
// console.log('Shuffled:', array)

// array.splice(1,0,Teams.pop())
// console.log(array)

// Fixing the list of matches in Object
function fixingInObject(array:any[]){
    // shuffle(array)
    count=1
    for(let k in array){
        Obj[`Match${count}`] = array[k]
        
        count++
    }
    return Obj
}
fixingInObject(array)
// console.log('Object:',Obj)

var array1:any[]=[]
array1.push(array[0])
// console.log(array1)

// ----------------------------------------------------------------------------------------------------------------------------------------------
// Function for Finalized Schedule
function comparingWithTeams(array1:any[]){
    for(let l=0;l<array.length;l++){
            for(let m of array){
                if(!(array1.includes(m))){
                    if((array1[array1.length-1][0] != m[0]) && (array1[array1.length-1][1] != m[0]) && (array1[array1.length-1][1] != m[1]) && (array1[array1.length-1][0] != m[1])){
                        array1.push(m);
                    }
                }
    }}
    return array1
}
let temp=comparingWithTeams(array1)
var Schedule2:any[]=[]
for(let n in temp){
    Schedule2.push(temp[n][0]+'vs'+temp[n][1])
}
console.log('Finalized Schedule',Schedule2);
console.log("---------------------")

// -------------------------------------------------------------------------------------------------------------------------------------------

// Dividing the Finalized schedule into odd and even, based on index
let oddTeams:any[]=[]
let evenTeams:any[]=[]
for(let p=0;p<Schedule2.length;p++){
    if(p%2==1){
        oddTeams.push(Schedule2[p])
    }else if(p%2==0){
        evenTeams.push(Schedule2[p])
    }
}

if(oddTeams.length%2!=0){
    oddTeams.push("noMatch")                        // used whenever the no.of matches is odd
}
// ------------------------------------------------------------------------------------------------------
// Date Function
let Days  = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let s=new Date('2022-08-20')

if(Teams.length%2 != 0){
    Teams.push("None")
}

// -------------------------------------------------------------------------------------------------------

var d = new Date(s)
var date1:any = new Date()
var date2:any = new Date()

let date=[]                                                                     // Date Function
for (let i = 0; i <= 6; i++) {
    if (d.getDay() + i == 6) {
        date1.setDate(d.getDate() + i + 1)
        date2.setDate(date1.getDate() - 1)
    }
}

let day=[]                                                                      // Day Function
var dt1:any = new Date(date1);
var dt2:any = new Date(date2)
for (let a = 0; a<Schedule2.length; a++) {
    date.push((new Date(dt2)).toString().substring(4, 15))
    date.push((new Date(dt1)).toString().substring(4, 15))
    day.push(Days[dt2.getDay(date2)])
    day.push(Days[dt1.getDay(date1)])
    dt1.setDate(dt1.getDate() + 7)
    dt2.setDate(dt2.getDate() + 7)
}
// console.log('Date:',date)
// console.log('Day:',day)
// --------------------------------------------------------------------------------------------------------


let Schedule = []
count=0
var match_No=1
for (let b = 0; b<Schedule2.length/2; b = b + 1) {
    let Obj2:any = {}
    let d:any = b
    Obj2["Date"] = date[count]
    Obj2["Day"]  = day[count]

    Obj2["Slot_no"]=1
    Obj2["Match_No"] =match_No
    match_No++
    Obj2["Morning_Batch"] = evenTeams[b]

    // ------------------------------------------------------------------------------------------------------

    Obj2["Slot_No"]=2
    Obj2["match_No"] = match_No
    match_No++
    Obj2["Evening_Batch"] = oddTeams[b]
    Schedule.push(Obj2)
    count++
}
console.log('Schedule:',Schedule)