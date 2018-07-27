// add solution here
function theBeatlesPlay(musicians, instruments) {
  var myArr = [];
  for (var i = 0; i < 4; i++) {
      myArr.push(`${musicians[i]} plays ${instruments[i]}`);
    }
  return myArr;
}

theBeatlesPlay(musicians, instruments);
  
function johnLennonFacts(){
var facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];
   var newFacts = [];
   var i = 0;
   while (i < facts.length) {
        newFacts.push(facts[i] +"!!!");
        i++;
    }
    return newFacts;
}

function iLoveTheBeatles(x) {
  var array = [];
  do {
    x = array.push("I love the Beatles!");
    x++;
  } while (x < 15); {
    
  }
  return array;
}