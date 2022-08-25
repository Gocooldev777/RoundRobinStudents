var Groups: any = ["India", "Pakistan", "Sri Lanka", "Australia", "New Zealand"]      //"South Africa","West Indies","Zimbabwe",etcc.......
var totalNumberOfGroups: any = Groups.length
//function groupsMatching(Groups, totalNumberOfGroups):any {
function groupsMatching(): any {
    const matchScheduling: any = [];
    const noValues: any = -1;
    if (totalNumberOfGroups % 2 === 1) {
        Groups.push(noValues)                                               // match for even numbers
        totalNumberOfGroups = totalNumberOfGroups + 1
    }
    for (let z = 0; z < totalNumberOfGroups - 1; z += 1) {
        matchScheduling[z] = [];                                         // create match array for round z

        for (let matches = 0; matches < totalNumberOfGroups / 2; matches += 1) {
            const groupsInReverse: any = totalNumberOfGroups - 1 - matches;
            if (Groups[matches] !== noValues && Groups[groupsInReverse] !== noValues) {           // swap the groups orders to the every groups get the matches 
                matchScheduling[z].push([Groups[groupsInReverse]+'  '+ 'vs'+"    " + Groups[matches]]);
            }
        }
        Groups.splice(1, 0, Groups.pop());
    }
    return matchScheduling
}
var tournament: any = groupsMatching()
//console.log(tournament);
var arrayForGroups: any = []
for (let perGroups in tournament) {
    for (let inGroups in tournament[perGroups]) {
        arrayForGroups.push(tournament[perGroups][inGroups])
    }

}
// console.log(arrayForGroups,'FinalGroups');

var PoolA: any = []
var PoolB: any = []
function split(arrayForGroups: any) {
    for (let listOfGroups in arrayForGroups) {
        // console.log(arrayForGroups[i]);
        if (Number(listOfGroups) % 2 == 0) {
            PoolA.push(arrayForGroups[listOfGroups])
        } else {
            PoolB.push(arrayForGroups[listOfGroups])
        }


    }
}
split(arrayForGroups)
console.log(PoolA);

var Saturday: any = new Date('2022-08-27')
var Sunday: any = new Date('2022-08-28')
function date(Saturday: any, Sunday: any) {
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

var array: any = date(Saturday, Sunday)
function splitTheGroups(PoolA: any, PoolB: any) {
    var game: any = 1
    var day: any = 1
    if (PoolA.length == PoolB.length) {
        for (let i in PoolA) {
            console.log('_______________________________________________________');
            console.log('DAY:', day++, 'DATE:', array[i]);
            console.log('MATCH:', game++, '  ', '<< SESSION : Afternoon >>');
            console.log(PoolA[i]);
            console.log('                   ---                                    ');
            console.log('MATCH:', game++, '  ', '<< SESSION  : Night >>');
            console.log(PoolB[i]);
            console.log('________________________________________________________');

        }
        console.log('Total Matches conducted in Tournament ~', (game - 1) + " " + "Matches");
    }
    else {
        PoolB.push("No-Match Schedules")
        for (let i in PoolA) {
            console.log('__________________________________________________________');
            console.log('DAY:', day++, 'DATE:', array[i]);
            console.log('MATCH:', game++, '  ', '<< SESSION : Afternoon >>');
            console.log(PoolA[i]);
            console.log('                  ---                                   ');
            console.log('MATCH:', game++, '  ', '<< SESSION  : Night >>');
            console.log(PoolB[i]);
            console.log('_____________________________________________________________');

        }
        console.log('Total Matches conducted in Tournament ~', (game - 2) + " " + "Matches");
    }
}
splitTheGroups(PoolA, PoolB)
