//code your solution here
// function superbowlWin (record){
// const superbowl = record.find(element => element.result === 'W')
//       // if(superbowl) {
//       //    return superbowl.year;
//       // }  else {
//       //    return undefined
//       // }
//       return superbowl ? superbowl.year : undefined
//    }

function superbowlWin (record) {
let result = record.find(element => element.result === 'W')
      return result ? result.year : undefined;
}