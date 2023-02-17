console.log('Your JS is linked up. Be the person you needed when you were little.');

/*----- constants -----*/
/*----- app's state (variables) -----*/
let board;


/*----- cached element references -----*/
// The Array.from() function will make an array from all elements returned by querySelectorAll
const squares = Array.from(document.querySelectorAll('#board div'));


/*----- event listeners -----*/

/*----- functions -----*/
 //function to initiate game board
const init = () => {
    board = ['', '', '','', '', '','', '', ''];    
    render();
}   

// rendering a change in the game when a mark is made
const render = () =>{
    board.forEach(function(mark, index){
        //this sets the text content of the square of the same position to the mark on the board. 
        squares[index].textContent = mark;
        });
}