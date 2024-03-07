function makeGrid(size, inMethod) {
    if(size < 100) {
        let board = document.getElementById('board');
        for(i = 0; i < size; i++) {
            let row = document.createElement('div');
            row.classList.add('row');
            row.style.backgroundColor = 'white';
            row.style.display = 'flex';
            row.style.flexDirection = 'column';
            row.style.gap = '1px';
            row.style.flex = '1';
            for(j = 0; j < size; j++) {
                let column = document.createElement('div');
                column.classList.add('column');
                row.appendChild(column);
                column.style.backgroundColor = 'white';
                if(inMethod === "mousedown"){
                    column.addEventListener('mousedown',function(){
                        column.style.backgroundColor = 'black';
                    })
                }else if (inMethod === "mouseover") {
                    column.addEventListener("mouseover",function(){
                        column.style.backgroundColor = randColor();
                    })
                }
                column.style.flex = '1';
                column.style.boder = '1px solid gray';
            }
            board.appendChild(row);
        }
    }else {alert("Choose a value less than 100 please")}
}

function clearBoard() {
    let board = document.getElementById('board');
    while (board.hasChildNodes()){
        board.removeChild(board.firstChild);
    }
}
function getSize(inMethod) {
    clearBoard();
    let size =+ prompt("What size would you like the board to be. Chose between 1 and 99");
    makeGrid(size,inMethod);
}


function getInputMethod() {
    let inputMethod = prompt("Would you like to click or hover?");
    let inMethod = inputMethod;
    switch(inMethod) {
        case "click":
            inMethod = 'mousedown';
            getSize(inMethod);
            break;
        case "hover":
            inMethod = 'mouseover';
            getSize(inMethod);
            break;
        default:
            inMethod = 'mouseover';
            break;
    }
    
}


function randColor(){
    let colors = ["black","blue","gray","pink","brown","green","purple","red"];
    while(true){
        let randomColor = colors[Math.floor(Math.random()*colors.length)];
        return randomColor;
    }
    

}