module.exports = (value) => {
  let result = 0;
  let negativeElement = []; 
  if (value.match(",") || value.match("\n")) {
    var separators = ["\\,", "\n"];
    const arrayElements = value.split(new RegExp(separators.join("|"), "g"));
    for (let i = 0; i < arrayElements.length; i++) {
      result += parseInt(arrayElements[i]);
      if(parseInt(arrayElements[i]) < 0 ) negativeElement.push(arrayElements[i])
    }
    if(negativeElement.length){
      return `negativos não permitidos: ${negativeElement}`
    }
    return result
  }
  result = value ? value : 0;
  return parseInt(result);
};
