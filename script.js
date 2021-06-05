const grid = document.querySelector('.container');
let width = 16;
let color1,color2,color3;
function input(){
    reset();
     width = prompt('Enter Width:');
    gridItems(width,width);
}
const clear = document.querySelector('.clear');
clear.onclick = function(){
    reset();
    gridItems(width,width);
}
function gridItems(a,b){
    const size = Math.floor(((Math.sqrt((250000/(a*b))))-2))+"px";
    for(let i = 0; i < a*b; i++){
        const item = document.createElement('div');
        item.className += 'items';
        item.onmouseover = function(){
            randomColor();
            item.style.background = "rgb("+color1+","+color2+","+color3+")";

        }
            item.style.width = size;
            item.style.height = size;
      grid.append(item);
    }
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
function reset(){
    removeAllChildNodes(grid);
}
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
