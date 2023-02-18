
/*----- constants -----*/
/*We have 3 (rows) + 3 (columns) + 2 (diagonals) = 8 possible ways to win. Let’s make an array of the indexes of winning 
combinations. This is where you may find the 3 x 3 shape of our board array helpful for finding the index numbers of winning 
combos*/
const winningCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

/*----- app's state (variables) -----*/
let board;
let turn = 'X';
//creating boolean with ternary statement
let win;



/*----- cached element references -----*/
// The Array.from() function will make an array from all elements returned by querySelectorAll
const squares = Array.from(document.querySelectorAll('#board div'));

// retrieves the data in h2 using querySelector
const messages = document.querySelector('h2');


/*----- functions -----*/
 //function to initiate game board
const init = () => {
    board = ['1', '', '1','', '', '','', '', ''];    
    render();
}   

// rendering a change in the game when a mark is made
const render = () =>{
    board.forEach(function(mark, index){
        //this sets the text content of the square of the same position to the mark on the board. 
        squares[index].textContent = mark;
        });
        win = board[0] && board[0] === board[1] && board[0] === board[2] ? board[0] : null;
console.log(win);

    messages.textContent = `It's ${turn}'s turn!`;
}

init();

function getWinner() {
    let winner = null;
    winningCombos.forEach(function(combo, index) {    
        if (board[combo[0]] && board[combo[0]] === board[combo[1]] && board[combo[0]] === board[combo[2]]){ 
            winner = board[combo[0]];
            // nested ternary 
            messages.textContent = win === 'T' ? `That's a tie, queen!` : win ? `${win} wins the game!` : `It's ${turn}'s turn!`;
        /* EXTENDED VERSION
        if ( win === 'T' ) {
            messages.textContent = `That's a tie, queen!`
        }     
        else if (win) { 
            messages.textContent = `${win} wins the game!`
        }       
        else {
            messages.textContent = `It's ${turn}'s turn!`
} */
        }  }); 
         
    return winner ? winner : board.includes('') ? null : 'T';   //ternary if/if-else
        }

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
    win = getWinner();  //call getWinner() and assign its output to the win variable
    render();
    };

    
 
    
/*----- event listeners -----*/
/*Listen for the click on the board. We will need to “grab” an HTML element using getElementById() and then 
chain the event listener onto it. addEventListener() takes two arguments, the event to listen for and a callback 
function to execute when the event is heard*/
document.getElementById('board').addEventListener('click', handleTurn);