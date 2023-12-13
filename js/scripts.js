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
        cell.classList.add('square' , 'd-flex', 'justify-content-center', 'align-items-center','border', 'border-dark');
        cell.innerHTML = i;
        myGrid.append(cell);

        cell.addEventListener('click', function(){
            this.classList.toggle('bg-primary');

            console.log (this.innerHTML=i);
        });
    }
    
});

    


