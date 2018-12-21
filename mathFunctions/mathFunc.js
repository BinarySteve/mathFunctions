/****created by Steven Chavez 2018****/


$(()=> {
  $("#function-select")
	.on("change", ()=> {
	  disableFunc();
  
	});
  $("button").on("click", ()=> {
	mathChoice();
  });
  //creates event listener for key up after press on the enter key to run mathChoice function
  $(".input-group").on("keyup", (e)=> {
	if (e.preventDefault()) {
	  return;
	}

	if (e.which === "Enter" || e.which === "Ent" || e.which === 13) {
	  mathChoice();
	}
  });
});


//----Math selection function that uses 3 functions within to evaluate choice and output of answer----\\
function mathChoice() {
  let x = $("#function-select").val();

  if (x === "add") {
	addingFunc();
	printVal();
	resetFunc();
	
  } else if (x === "subtract") {
	subtractFunc();
	printVal();
	resetFunc();
	
  } else if (x === "multiply") {
	multiplyFunc();
	printVal();
	resetFunc();
	
  } else if (x === "divide") {
	divideFunc();
	printVal();
	resetFunc();
	
  } else if (x === "square") {
	squareFunc();
	printVal();
	resetFunc();
	
  } else if (x === "cubed") {
	cubeFunc();
	printVal();
  resetFunc();
   
  } else if (x === "root") {
	rootFunc();
	printVal();
	resetFunc();
	
  }
 }
 
 
//----Addition Function example: 10+5 = 15----\\
  function addingFunc() {
	let a = Number($("#input1").val());
	let b = Number($("#input2").val());
	return a + b;
  }
  
  
//----Subtraction Function example: 10-5 = 15----\\
  function subtractFunc() {
	let a = Number($("#input1").val());
	let b = Number($("#input2").val());
	console.log(a);
	return a - b;
  }
  
  
//----Multiplication Function example 10x5 = 50----\\
  function multiplyFunc() {
	let a = Number($("#input1").val());
	let b = Number($("#input2").val());
	return a * b;
  }
  
  
//----Division Function example 10/5 = 2----\\
  function divideFunc() {
	let a = Number($("#input1").val());
	let b = Number($("#input2").val());
	if (a/b === Infinity) {//fixes divide by zero error which gives infinity
		return 0;
	}else {
		
	return Number(a / b).toFixed(5);//sets decimal place
	}
  }


//----Square Function example: 5²= 25----\\
  function squareFunc() {
	let a = Number($("#input1").val());
	return a * a;
  }
  
  
//----Cube Function example: 5*5*5 = 125----\\
  function cubeFunc() {
	let a = Number($("#input1").val());
	return a * a * a;
  }


//----Square Root Function example: √25 = 5----\\
  function rootFunc() {
	let a = Number($("#input1").val());
	return Math.sqrt(a).toFixed(5);//sets decimal place
  }
  
  
//----Function that prints answers----\\
  function printVal() {
	let x = $("#function-select").val();
	if (x === "add") {
	$("#answer").html("<var>" + Number($("#input1").val())+"</var> "+ "<var> <var>+</var> "+Number($("#input2").val())+ "</var> <var>=</var> " + addingFunc());
	
  } else if (x === "subtract") {
	$("#answer").html("<var>" + Number($("#input1").val())+"</var> "+ "<var> <var>-</var> "+Number($("#input2").val())+ "</var> <var>=</var> " +
	subtractFunc());
	
	
  } else if (x === "multiply") {
	$("#answer").html("<var>" + Number($("#input1").val())+"</var> "+ "<var> <var>x</var> "+Number($("#input2").val())+ "</var> <var>=</var> " +
	multiplyFunc());
	
  } else if (x === "divide") {	
  $("#answer").html("<var>" + Number($("#input1").val())+"</var> "+ "<var> <var>/</var> "+Number($("#input2").val())+ "</var> <var>=</var> " + divideFunc());
	
  } else if (x === "square") {	
  $("#answer").html("<var>" + Number($("#input1").val())+"</var> &sup2"+ "<var>=</var> " + squareFunc());
	
  } else if (x === "cubed") {
	$("#answer").html("<var>" + Number($("#input1").val())+"</var> &sup3"+ "<var>=</var> " + cubeFunc());
   
  } else if (x === "root") {
	$("#answer").html("<var>&#8730</var> <var>" + Number($("#input1").val())+"</var> <var>=</var> " +rootFunc());
	}
	}
	
	
//----resets values in the input fields----\\
function resetFunc(){
	$("#input1").val("");
	$("#input1").focus();
	$("#input2").val("");
	$("#input2").focus();
}


//----disables or enables the input2 value field depending on the math function selected----\\
function disableFunc() {
var x = $("#function-select").val();
  if (x === "square" || "cubed" || "root") {
	$("#input2").prop("disabled", true);
	
  }
  if (x === "add" || x === "subtract" || x === "multiply" || x === "divide") {
	$("#input2").removeAttr("disabled");
  }
}
