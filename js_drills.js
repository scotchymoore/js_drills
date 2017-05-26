
// Question 1
function addNumbers(num1,num2) {
  console.log (num1 + num2)
}

//Question 2
var numbers = [2, 4, 5, 3, 2]
var sum = 0
numbers.forEach(function(num){sum += num;});
console.log (sum)

// Question 3
var fTemp = 30
celcius(fTemp)
function celcius(fParam){
console.log (((fParam-32)*5)/9);
};

//Question 4
var string = "Count the vowels in this string"

function vowelCount(str){
  var count = 0
  var strspl = str.split("");
  for(var i = 0; i < strspl.length; i++) {

    if (strspl[i] == 'a'||strspl[i] == 'e'||strspl[i] == 'i'||strspl[i] == 'o'||strspl[i] == 'u')  {
      count += 1;}
  }
 console.log ("The vowel count is " + count);
};

vowelCount(string)


// Question 5
