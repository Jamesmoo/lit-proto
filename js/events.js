var mainContainer = document.getElementById('main-container');
var button = document.getElementsByClassName('button clear')[0];
var ctrlMngtDrpDwn = document.getElementsByClassName('control-management')[0];

button.addEventListener("click", () => {
	alert('Hello from the other side!');
}, false);

ctrlMngtDrpDwn.addEventListener("change", (e) => {
	console.log(e.target);
	//debugger;
	alert('You changed the dropdown');
});

// const alertFunction = (e) => {
// 	alert("You need to overwrite this function!");
// }


// // {
// // 	handleEvent(e) {
// // 		alert("You need to change this function!");
// // 	},
// // 	capture: true
// // };

// export default {
// 	alertFunction:alertFunction
// };

