class Greeter {
  constructor() {
  }
  greet(name) {
    const currentTime = new Date().getHours()
    
    const nameFormatted = name.charAt(0).toUpperCase() + name.slice(1);
    const finalName = nameFormatted.trim();
    const greeting = this.searchHour(currentTime);
    
    return greeting + finalName;
  }

  searchHour(currentTime){
    let greeting;     
    if (6 <= currentTime && currentTime <= 12 )
      greeting = 'good morning ';
    else if (18 <= currentTime && currentTime <= 22 )
      greeting = 'Good evening ';
    else if ((currentTime > 22 && currentTime <= 23) || (currentTime >= 0 && currentTime < 6))
      greeting = 'Good night ';
      else 
      greeting = 'Hello ';
    return greeting
  }
}
module.exports = Greeter;
