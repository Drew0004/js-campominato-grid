const myButton = document.getElementById('special-button');

const myGrid = document.getElementById('grid-container');

let game = false;

myButton.addEventListener ('click', function(){

    game = true;

    if(game == true){

        myGrid.innerHTML='';
        
    }
    
    for (let i = 1; i <= 100; i++){
        
        const cell = document.createElement('div');
        cell.classList.add('square','bg-warning', 'd-flex', 'justify-content-center', 'align-items-center', 'm-3');

        cell.innerHTML = i;
        
        myGrid.append(cell);

        // console.log (cell);
    }



});