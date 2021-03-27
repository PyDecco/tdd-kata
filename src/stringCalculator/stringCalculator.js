module.exports = (value) => {
  let result;
  if (value.charAt(1) == ",") {
    return result = parseInt(value.charAt(0)) + parseInt(value.charAt(2))
  }
  result = value ? value : 0
  return parseInt(result)
}