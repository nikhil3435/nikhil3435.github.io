import { useEffect, useState } from 'react';
import './ticTacToe.css';
import SelectOption from '../Shared/SelectOption';

const TicTacToe = () => {
    const [size,setSize] = useState(0);
    const [currentPlayer,setCurrentPlayer] = useState('X'); 
    const [board,setBoard] = useState<any[][]>([[]]);
    const [showWinnerText,setWinnerText] = useState('');
    

    const checkWinner = (board:any[][]) => {
        for (let row = 0; row < size; row++) {
            if (board[row].every(cell => cell && cell === board[row][0])) {
                return true;
            }
        }
        for (let col = 0; col < size; col++) {
            if (board.every(row => row[col] && row[col] === board[0][col])) {
                return true; 
            }
        }
        if(board.every((row,index)=> row[index] && row[index] === board[0][0])){
            return true;
        }
        if (
            board.every((row, index) => 
                row[size - 1 - index] !== null && 
                row[size - 1 - index] !== "" && 
                row[size - 1 - index] === board[0][size - 1]
            )
        ) {
            return true;
        }
        return false;
    }

    const boardClick = (row:number,col:number)=>{
        const newBoard = board.map((rowArr: any) => [...rowArr]);
        newBoard[row][col]= currentPlayer;
        setBoard(newBoard); 
        if(checkWinner(newBoard)){
            setWinnerText(`Congarts!. ${currentPlayer} player is winner`)
        }  
        setCurrentPlayer(currentPlayer==='X'? 'O':'X');
    }

    useEffect(()=>{
        setBoard(Array(size).fill(null).map(()=>Array(size).fill('')));
    },[size])


    return (
        <div className='tic-tac-toe-container'  >
            <div className='tic-tac-toe-note' >
                Player-1 is 'X' and Player-2 is 'O'
            </div>
            {!size && 
                <div className='tic-tac-toe-input-container' >
                    <SelectOption heading='Please select board size' values={[3,4,5,6,7]} onClick={(e)=>setSize(e)} />
                </div>
            }
            <div className='tic-tac-tow-board' >
                {board.map((row: any[],rowIndex: number)=>
                    <div className='tic-tac-tow-row'>
                    {row.map((_cell,colIndex)=>(
                        <button className='tic-tac-toe-cell'  key={`${rowIndex}-${colIndex}`} onClick={()=>boardClick(rowIndex,colIndex)}>
                            {board[rowIndex][colIndex]? board[rowIndex][colIndex] : ''}
                        </button>
                    ))}
                    </div>
                )}
            </div>
            {showWinnerText.length > 0 &&
                <div className='tic-tac-toe-winner-text' >{showWinnerText}</div>
            }
        </div>
    )
}

export default TicTacToe;