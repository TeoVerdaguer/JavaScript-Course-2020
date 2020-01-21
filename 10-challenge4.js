/**************
* CODE CHALLENGE 4
**************/

// fullname mass height

// method to calc bmi - save bmi to object and return bmi too

// log highest bmi (name and bmi) *consider they can have the same bmi

var mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calculateBmi(){
      this.bmi = this.mass / (this.height * this.height);
      return this.bmi;
    }
  };
  
  var john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calculateBmi(){
      this.bmi = this.mass / (this.height * this.height);
      return this.bmi;
    }
  };
  
  mark.calculateBmi();
  john.calculateBmi();
  
  if (john.bmi > mark.bmi) {
    console.log('John has a higher BMI than Mark, it\'s: ' + john.bmi);
  } else if (mark.bmi > john.bmi) {
    console.log('Mark has a higher BMI than John, it\'s: ' + mark.bmi);
  } else {
    console.log('Mark and John have the same BMI.');
  }