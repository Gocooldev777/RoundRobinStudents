Participants = ['team1', 'team2', 'team3', 'team4','team5']
function participantsPairing(){
  const Dummy = -1;
  let numberOfParticipants = Participants.length
  const scheduledParticipants = [];
  if (numberOfParticipants % 2 === 1) {
    Participants.push(Dummy);
    numberOfParticipants += 1;
  }
  for (let j = 0; j < numberOfParticipants - 1; j++) {
    scheduledParticipants[j] = [];
    for (let x = 0; x < numberOfParticipants / 2; x++) {
      const reversesParticipants = numberOfParticipants - 1 - x;
      if (Participants[x] !== Dummy && Participants[reversesParticipants] !== Dummy) {  
        scheduledParticipants[j].push([Participants[reversesParticipants]+'-'+Participants[x]]);
      }
    }
    Participants.splice(1, 0, Participants.pop());
  }
 return scheduledParticipants
}
function findAllMatches() {
    const newarray=[]
    const matches=participantsPairing()
    for (let i = 0; i < matches.length; i++) {
        for (let j = 0; j < matches[i].length; j++) {
            newarray.push(matches[i][j])
        }
    }  
    return newarray;
}
function splitSlots() {
    const slotsSplits=[]
    const slot_1=[];
    const slot_2=[];
    const match=findAllMatches();
    for (let i = 0; i < match.length; i++) {
        if(i%2==0){
            slot_1.push(match[i])
        }else{
            slot_2.push(match[i])
        }
    }
    slotsSplits.push(slot_1);
    slotsSplits.push(slot_2);
    return slotsSplits
}
let saturday = new Date('2022-08-27');
let sunday = new Date('2022-08-28');
function findweekEnds(saturday, sunday) {
  const allMatches=findAllMatches()
  const weekEnds = new Array();
  const dt = new Date(saturday);
  const dt1 = new Date(sunday);
  for (i = 0; i < allMatches.length / 2; i++) {
    weekEnds.push((new Date(dt)).toString().substring(0, 15));
    weekEnds.push((new Date(dt1).toString().substring(0, 15)))
    dt.setDate(dt.getDate() + 7);
    dt1.setDate(dt1.getDate() + 7);
  }
  return weekEnds
}array = findweekEnds(saturday, sunday)
function result (slotsSplits){ 
  const slot_1=slotsSplits[0]
  const slot_2=slotsSplits[1]
  match = 1
  day = 1
  if(slot_1.length==slot_2.length){
    for (i=0;i<slot_1.length;i++) {
      console.log('Day:', day++, 'Date:', array[i]);
      
      console.log('slot-1    ', 'Match-No:', match++);
      console.log(slot_1[i]);
    
      console.log('slot-2    ', 'Match-No:', match++);
      console.log(slot_2[i]);
    }
    console.log('Total Number of Matches', match - 1);
  }else{
    slot_2.push('NO-MATCH');
    for (i=0;i<slot_1.length;i++) {
      console.log('Day:', day++, 'Date:', array[i]);
     
      console.log('Slot-1    ', 'Match-No:', match++);
      console.log(slot_1[i]);
    
      console.log('Slot-2    ', 'Match-No:', match++);
      console.log(slot_2[i]);
    }
    console.log('Total Number of Matches', match - 2);
  }
}result(splitSlots(Participants))
