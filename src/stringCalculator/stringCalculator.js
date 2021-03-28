module.exports = (value) => {
  let result = 0;
  if (value.match(",") || value.match("\n")) {
    var separators = ["\\,", "\n"];
    const arrayElements = value.split(new RegExp(separators.join("|"), "g"));
    
    for (let i = 0; i < arrayElements.length; i++) {
      result += parseInt(arrayElements[i]);
    }
    return result
  }
  result = value ? value : 0;
  return parseInt(result);
};
