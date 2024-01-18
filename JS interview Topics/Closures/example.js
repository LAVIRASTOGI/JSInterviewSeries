



//A closure is an inner function that has access to the outer function's variables and parameters. It allows the inner function to access and manipulate the outer function's variables, even after the outer function has returned.
// (inner func creates a refrence of the outer parent func who has created it(lexical env) so it has access to variables) 
// the lexical scope is the scope of a variable or function based on where it is defined in the source code


function outer() {

  var x = 10;
  function inner() {
    //x:10
  var y = 5;
  console.log(x + y);

  }
  
  return inner;
  
  }
  
  var innerFunc = outer();
  
  innerFunc();  //15






function makeAdder(x) {
//x:5
    return function (y) {
       //x:5
      return x + y;
    };
  }
  
  const add5 = makeAdder(5);//x:5
  const add10 = makeAdder(10);//x:10
  
  console.log(add5(2)); //7
  console.log(add10(2)); //12



