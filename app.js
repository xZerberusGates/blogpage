/** @format */

console.log("hello");
document.getElementById("fred").innerHTML = "Fred";
function addNumbers(a, b) {
	let total = a + b;
	console.log(` ${a} + ${b} = ${total}`);
}
addNumbers(2, 3);
