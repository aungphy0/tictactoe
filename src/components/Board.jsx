import Square from './Square'
import { useState } from 'react';

function Board({xIsNext, squares, onPlay}){
    
    // const [xIsNext, setXIsNext] =  useState(true);
    // const [histroy, setHistory] = useState([Array(9).fill(null)]);
    
    function handleClick(i) {
        if(squares[i] || calculateWinner(squares)){
            return;
        }

        const nextSquares = squares.slice();
        if(xIsNext){
            nextSquares[i] = "X";
        }else{
            nextSquares[i] = "O";
        }
        
        onPlay(nextSquares);
    }

    const winner = calculateWinner(squares);
    let status; 
    if (winner){
        status = "Winner: " + winner;  
    }else{
        status = "Next player: " + (xIsNext ? "X" : "O");
    }

    return ( 
        <>
            <div className='status'>{status}</div>
            <div>
                <div className="borad-row">
                    <Square value={squares[0]} onSquareHandle={() => handleClick(0)} />
                    <Square value={squares[1]} onSquareHandle={() => handleClick(1)} />
                    <Square value={squares[2]} onSquareHandle={() => handleClick(2)} />
                </div>
            </div>
            <div>
                <div className="borad-row">
                    <Square value={squares[3]} onSquareHandle={() => handleClick(3)} />
                    <Square value={squares[4]} onSquareHandle={() => handleClick(4)} />
                    <Square value={squares[5]} onSquareHandle={() => handleClick(5)} />
                </div>
            </div>
            <div>
                <div className="borad-row">
                    <Square value={squares[6]} onSquareHandle={() => handleClick(6)} />
                    <Square value={squares[7]} onSquareHandle={() => handleClick(7)} />
                    <Square value={squares[8]} onSquareHandle={() => handleClick(8)} />
                </div>
            </div>
        </>
    );

}

function calculateWinner(squares){

    const lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];

    for(let i = 0; i < lines.length; i++){
        const [a,b,c] = lines[i];
        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
            return squares[a];
        }
    }

    return null;
}

export default Board;