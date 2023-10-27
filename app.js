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

    /*----- app's state (variables) -----*/
    const [board, setBoard] = React.useState(["", "", "", "", "", "", "", "", ""]);
    const [turn, setTurn] = React.useState('X');
    let gameOver = false;
    let win;

    function handleTurn(event) {
        console.log(event.target, event.target.id);
        let idx = event.target.id;
        if (gameOver === false && board[idx] === "") {
            let newBoard = [...board];
            newBoard[idx] = turn;
            setBoard(newBoard);
            setTurn(turn === 'X' ? 'O' : 'X');
        }
    }

    return (
        <div>
            <h1>Tic-React-Toe</h1>
            <h2>It's {turn}'s turn!</h2>
            <div className="flex-container flex-column">
                <div className="flex-container flex-wrap" id="board" onClick={handleTurn}>
                    {board.map((value, idx) => {
                        return (
                            <div className="square" key={idx} id={idx}>
                                {value}
                            </div>
                        );
                    })}
                </div>
                <button id="reset-button">reset</button>
            </div>
        </div>
    );
}

ReactDOM.render(<App />, root)
