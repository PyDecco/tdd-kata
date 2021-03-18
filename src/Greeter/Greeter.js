class Greeter {
  constructor() {
  }
  greet(name) {
    const nameFormatted = name.charAt(0).toUpperCase() + name.slice(1);
    const finalName = nameFormatted.trim()
    return 'Hello '+ finalName
  }
}
module.exports = Greeter;
