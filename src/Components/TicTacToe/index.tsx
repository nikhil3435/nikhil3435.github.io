import { useEffect, useState } from 'react';
import './ticTacToe.css';
import SelectOption from '../Shared/SelectOption';

const TicTacToe = () => {
    const [size,setSize] = useState(0);
    const [currentPlayer,setCurrentPlayer] = useState('X'); 
    const [board,setBoard] = useState<any>([]);
    

    useEffect(()=>{
        setBoard(Array(size).fill(null).map(()=>Array(size).fill('')));
    },[size])

    const boardClick = (row:number,col:number)=>{
        const newBoard = board.map((rowArr: any) => [...rowArr]);
        newBoard[row][col]= currentPlayer;
        setBoard(newBoard);
        setCurrentPlayer(currentPlayer==='X'? 'O':'X');
    }


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
        </div>
    )
}

export default TicTacToe;