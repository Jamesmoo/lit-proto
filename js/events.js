var mainContainer = document.getElementById('main-container');
var button = document.getElementsByClassName('button clear')[0];
var ctrlMngtDrpDwn = document.getElementsByClassName('control-management')[0];
// var button = document.getElementById("clearButton");


/*buttons.forEach( (button) => {
	button.addEventListener("click", function(){
		alert('Hello from the other side!');
	}, false);
)*/

button.addEventListener("click", () => {
	alert('Hello from the other side!');
}, false);

ctrlMngtDrpDwn.addEventListener("change", (e) => {
	console.log(e.target);
	debugger;
	alert('You changed the dropdown');
});
//debugger;
// document.getElementsByClassName('new-org-button').addEventListener('click', function(){
//     alert('pressed');   
//     console.log('pressed');
// });