document.getElementById('myText').className = 'blue'

const button = document.getElementById('button');

let el = document.getElementById('myText');
function changer_style(){
    document.body.style.background = "red";
    el.style.color = "white";
    el.style.border = "3px dotted black";
    el.style.padding = "5px";
    el.style.width = "200px";
	el.style.margin = "200px 0 0 200px";
}

button.addEventListener('click', changer_style); 
