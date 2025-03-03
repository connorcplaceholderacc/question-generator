let answers = "";
let key = "";
let choices = ["[Correct]", "[Incorrect: Misreading of the question]", "[Incorrect: Blatantly incorrect / distractor]", "[Incorrect: Literal reference to the text]"];
let cat1 = ["1A", "1B", "1C", "1D", "1E"];
let cat2 = ["2A", "2B", "2C"];
let cat3 = ["3A", "3B", "3C", "3D", "3E", "3F"];
let cat4 = ["4A", "4B", "4C", "4D"];
let cat5 = ["5A", "5B", "5C", "5D"];
let cat6 = ["6A", "6B", "6C", "6D"];
let tempText = "";


let c1max = 5;
let c2max = 2;
let c3max = 2;
let c4max = 2;
let c5max = 2;
let c6max = 2;

let c1num = 0;
let c2num = 0;
let c3num = 0;
let c4num = 0;
let c5num = 0;
let c6num = 0;

var button = document.querySelector("button")
button.addEventListener("click", runCode);

function runCode(){
  answers = "";
  key = "";
  c1num = 0;
  c2num = 0;
  c3num = 0;
  c4num = 0;
  c5num = 0;
  c6num = 0;
  for(let i = 1; i<16; i++){
    tempText = "";
    tempText += i + ". [Write Question Here]\n";
    shuffleArray(choices);
    for(let k=0; k < choices.length; k++){
      tempText += "\t" + abcs(k) + ". ";
      tempText += choices[k] + "\n";
      if(choices[k] == "[Correct]"){
        key += i + ". Correct Answer: " + abcs(k) + "\n    Category: " + catGen() + "\n" + "    Why it's correct: [explanation]\n";
      }
    }
    answers+=tempText;
  }
  document.querySelector("#questions").innerText = answers;
  document.querySelector("#key").innerText = key;
}

runCode();


function shuffleArray(array) {
    for (var i = array.length - 1; i >= 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
  
//I know I could've just made this an array but I'm too lazy to rewrite sorry//
function abcs(num){
  switch(num){
      case 0:
      return "A";
      case 1:
      return "B";
      case 2:
      return "C";
      case 3:
      return "D";
  }
}

function catGen(){
  let ver = 0;
  while(ver== 0){
    ver = Math.floor(Math.random() * 7);
  }
  switch(ver){
      case 1:
        if(c1num < c1max){
            shuffleArray(cat1);
            c1num++;
            return(cat1[0]);
        }

        else{
          return catGen();
        }
      case 2:
      if(c2num < c2max){
            shuffleArray(cat2);
            c2num++;
            return(cat2[0]);
        }

        else{
         return catGen();
        }
      case 3:
      if(c3num < c3max){
            shuffleArray(cat3);
            c3num++;
            return(cat3[0]);
        }

        else{
         return catGen();
        }
      case 4:
      if(c4num < c4max){
            shuffleArray(cat4);
           c4num++;
            return(cat4[0]);
        }

        else{
         return catGen();
        }
      case 5:
      if(c5num < c5max){
            shuffleArray(cat5);
            c5num++;
            return(cat5[0]);
        }

        else{
         return catGen();
        }
      case 6:
      if(c6num < c6max){
            shuffleArray(cat6);
           c6num++;
            return(cat6[0]);
        }

        else{
         return catGen();
        }
  }
}
  
  

