// // O/P-1

(function immediateA(a) {
  return (function immediateB(b) {
    console.log(b); // What is logged?
  })(1);
})(0);

// //1

//o/p-2
function xy() {
  //ivar i;
  for (i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i); // What is logged?
    }, 1000);
  }
}
//3,3,3

// xy();
// //solnss--
// //o/p-2
function xy1() {
  //i-0
  for (let i = 0; i < 3; i++) {
    //i=-0
    setTimeout(function log() {
      console.log(i); // What is logged?
    }, 1000);
  }
}
//0.1.2

// xy1();

function xy2() {
  //i-0
  for (var i = 0; i < 3; i++) {
    ((a) => {
      setTimeout(function log() {
        console.log(a); // What is logged?
      }, 1000);
    })(i);
  }
}
//0,1,2

// xy1();

// //O/P-3

function outer() {
  var x = 10;

  function inner() {
    var y = 5;

    console.log(x + y);

    x = 20;
  }

  return inner;
}

var innerFunc = outer();

innerFunc();

innerFunc();

// //15
// //25

// // o/p-

function makeAdder(x) {
  //x:5
  return function (y) {
    //x:5
    return x + y;
  };
}

const add5 = makeAdder(5); //x:5
const add10 = makeAdder(10); //x:10

console.log(add5(2)); //7
console.log(add10(2)); //12


function hof(a,b){
    return function(c){
        return function(d,e){
       return a+b+c+d+e
    }
    }
   } 
   console.log(hof(4, 5)(6)(7, 8)); // 30