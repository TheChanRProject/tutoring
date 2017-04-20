var jobs = ["doctor", "engineer", "lawyer"];
var clause = "I will be a";
var alternative = "I will meet Rishov"
var school = ["Harvard Medical School", "MIT", "Harvard Law School"];

// If school[0] == "Harvaard Medical School", then display "I will be a doctor"
// If school[0] does not equal ^ , then display "I will meet Rishov"

function doctor(){
  if (school[0] == "Harvard Medical School") {
    console.log(clause + ' ' + jobs[0]);
  }
  else {
    console.log(alternative);
  }
}
doctor();

// Your Task: Write two functions similar to the one above that will do below:


// If school[1] == "MIT", then display "I will be an engineer"
// If school[1] does not equal MIT, then display "I will meet Mark Zuckerberg"








// If school[2] == "Harvard Law School", then display "I will be a lawyer"
// If school[2] does not equal Harvard Law School, then display "I will smack Evan Spiegel"
