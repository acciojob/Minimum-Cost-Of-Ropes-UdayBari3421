function calculateMinCost() {
	let ropes = document.getElementById("rope-lengths").value;
	let arr = ropes.split(",");
	let f = 0;
	while (arr.length > 1) {
		arr.sort((a,b) =>{return (a-b)});
		let value = parseInt (arr.shift());
		let value1 = parseInt (arr.shift());

		let main = value + value1;
		f = f + main;

		arr.push(main);
	}
	
	let result = document.getElementById("result").value;
	result.innerText = f;
	return f;
}  
