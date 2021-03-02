class Greeter {
  constructor() {
  }
  greet(name) {
    const finalName = name.trim()
    return 'Hello '+ finalName
  }
}
module.exports = Greeter;
