
import './Square.css';

interface ISquare {
    row: number;
    col: number;
    isLight: boolean;
    onClick: (a:number,b:number)=> void;
    children: React.ReactElement
}

const Square = ({ row, col, isLight, onClick, children }: ISquare) => {
  const handleClick = () => {
    onClick(row, col);
  };

  return (
    <div
      className={`square ${isLight ? 'light' : 'dark'}`}
      onClick={handleClick}
    >
      {children}
    </div>
  );
};

export default Square;
