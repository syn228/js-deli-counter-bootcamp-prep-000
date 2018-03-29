var katzDeli = [];

function takeANumber(katzDeliLine, number){
  katzDeliLine.push(number);
  return `Welcome. You are number ${number} in line.`
}
function nowServing(number) {
  if (number.length === 0){
    return "There is nobody waiting to be served!"
  }
  return `Currently serving ${number.shift()}.`
}
function currentLine(name){
  if (name.length === 0){
    return "The line is currently empty.";
  }
  let numberLine = [];
  for (let i = 0; i < name.length; i++){
  numberLine.push(`${i + 1}. ${name[i]}`)  
  }
  return `The line is currently: `+ numberLine.join(', ');
}
//nowServing(["andrew", "sullivan"])