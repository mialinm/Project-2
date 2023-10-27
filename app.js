ReactDom.render(<App />, root)

function App() {
    const winningCombos = [

        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    
        ];

        const [board, setBoard] = React.useState(["", "", "","", "", "","", "", ""])
        let turn = 'X';
        let win;
        let xScore = 0;
        let oScore = 0;

        
        function handleTurn(event) {
            console.log(event.target, event.target.id)
            let idx = event.target.id
            if(gameOver == false) {
                let newBoard = [...board]
                newBoard[idx] = turn
                setBoard(newBoard)
                turn = turn === 'X' ? 'O' :'X'

            }
        }





    return (
        <div>
            <h1>Tic-React-Toe</h1>
            <h1>Tic-Tac-Toe</h1>
            <h2>It's X's turn!</h2>
            <div class="flex-container flex-column">
                <div class="flex-container flex-wrap" id="board" onClick={handleTurn}>
                {board.map((value, idx) => {
                    return (
                        <div class="square" key={idx} id={idx}>
                            {value}
                            </div>
                    )
                })}
            </div>
                <button id="reset-button">reset</button>
                <div id="score">
                    <span>X Score: <span id="x">0</span></span>
                    <span>O Score: <span id="o">0</span></span>
                </div>
            </div>
        </div>
    )
}