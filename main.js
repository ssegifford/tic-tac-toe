
/*----- constants -----*/
/*----- app's state (variables) -----*/
let board;
let turn = 'X';


/*----- cached element references -----*/
// The Array.from() function will make an array from all elements returned by querySelectorAll
const squares = Array.from(document.querySelectorAll('#board div'));

// retrieves the data in h2 using querySelector
const messages = document.querySelector('h2');


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

    messages.textContent = `It's ${turn}'s turn!`;
}

init();

/* callback function for clicks. The ‘event’ is the click, the ‘target’ is the element on which the event took place —
 the square we’ve clicked on. findIndex() finds the index of the square in our squares array that matches the square the 
 user clicked! */
const handleTurn = event => {
    let idx = squares.findIndex(function(square) {
        return square === event.target;});
    // new code below
    board[idx] = turn;

    // ternary if statement
    turn = turn === 'X' ? 'O' : 'X';
    render();
    };
 
    
/*----- event listeners -----*/
/*Listen for the click on the board. We will need to “grab” an HTML element using getElementById() and then 
chain the event listener onto it. addEventListener() takes two arguments, the event to listen for and a callback 
function to execute when the event is heard*/
document.getElementById('board').addEventListener('click', handleTurn);