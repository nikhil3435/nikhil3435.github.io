// import { useState } from 'react';
import './chess.css';
import Square from './Square';

const getInitialBoardState = () => {
    const initialBoard = Array(8)
      .fill(null)
      .map(() => Array(8).fill(null));
  
    // Initialize pieces (example: pawns)
    for (let i = 0; i < 8; i++) {
      initialBoard[1][i] = 'pawn_white';
      initialBoard[6][i] = 'pawn_black';
    }
  
    //Initialize other pieces (Rooks, Knights, Bishops, Queen, King)
    initialBoard[0][0] = 'rook_white';
    initialBoard[0][7] = 'rook_white';
    initialBoard[7][0] = 'rook_black';
    initialBoard[7][7] = 'rook_black';
  
    initialBoard[0][1] = 'knight_white';
    initialBoard[0][6] = 'knight_white';
    initialBoard[7][1] = 'knight_black';
    initialBoard[7][6] = 'knight_black';
  
    initialBoard[0][2] = 'bishop_white';
    initialBoard[0][5] = 'bishop_white';
    initialBoard[7][2] = 'bishop_black';
    initialBoard[7][5] = 'bishop_black';
  
    initialBoard[0][3] = 'queen_white';
    initialBoard[7][3] = 'queen_black';
  
    initialBoard[0][4] = 'king_white';
    initialBoard[7][4] = 'king_black';
  
    return initialBoard;
};

const Chess = () => {

    const boardState = getInitialBoardState();


    const renderBoard = () => {
        const board = [];
        for (let row = 0; row < 8; row++) {
          const rowSquares = [];
          for (let col = 0; col < 8; col++) {
            const isLight = (row + col) % 2 === 0;
            rowSquares.push(
              <Square
                key={`${row}-${col}`}
                row={row}
                col={col}
                isLight={isLight}
                onClick={()=>{}}
              >
                {boardState[row][col] && (
                //   <Piece piece={boardState[row][col]} />
                <div></div>
                )}
              </Square>
            );
          }
          board.push(<div key={row} className="board-row">{rowSquares}</div>);
        }
        return <div style={{border: '1px solid #000'}}>{board}</div>;
    };

    return (
        <div className='chess-container'>
            {renderBoard()}
        </div>
    )
}

export default Chess