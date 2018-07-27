// add solution here
function theBeatlesPlay(musicians, instruments) {
  var myArr = [];
  for (var i = 0; i < 4; i++) {
      myArr.push(`${musicians[i]} plays ${instruments[i]}`);
    }
  return myArr;
}

theBeatlesPlay(musicians, instruments);
  
function johnLennonFacts(facts) {
  var i = 0;
    while (i < facts.length) {
       facts[i] += "!!!";
     i++;
    }
    return facts;
  }
  

 johnLennonFacts(facts)

function iLoveTheBeatles(number) {
   var array = [];
   do {
    array.push('I love the Beatles!');
     number ++;
   } while (number < 15);
   return array;
}