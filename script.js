const grid = document.querySelector('.container');
let item;
let color1,color2,color3;
function input(){
    reset();
    let width = prompt('Enter Width:');
    gridItems(width,width);
}
function gridItems(a,b){
    const size = Math.round(((Math.sqrt((250000/(a*b))))-2))+"px";
    for(let i = 0; i < a*b; i++){
      grid.innerHTML += `<div onmouseover = "trail(this)" class ="items" style = "width:`+size+`;height :`+size+`;" ></div>`;
    }
    console.log(`<div onmouseover = "trail(this)" class ="items" style = "width:`+size+`;height :`+size+`;" ></div>`);
}
function defaultGrid(){
    gridItems(16,16);
}
defaultGrid();
function randomColor(){
  color1 = Math.floor(Math.random()*255);
  color2 = Math.floor(Math.random()*255);
  color3 = Math.floor(Math.random()*255);
}

function trail(x){
    randomColor();
    console.log("rgb("+color1+","+color2+","+color3+")");
    x.style.background = "rgb("+color1+","+color2+","+color3+")";
}
function reset(){
    removeAllChildNodes(grid);
}
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}