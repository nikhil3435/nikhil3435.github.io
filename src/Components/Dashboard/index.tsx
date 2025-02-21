import { useNavigate } from 'react-router-dom';
import './dashboard.css';

const Dashboard = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div onClick={()=> navigate('/tictactoe')} >
                Tic Tac Toe
            </div>
            <div>
                Ludo
            </div>
            <div>
                Amazon Image Zoom in feature
            </div>
            <div>
                Todo App
            </div>
            <div onClick={() => navigate('/chess')} >
                Chess
            </div>
            <div onClick={() => navigate('/loaders')} >
                Loaders
            </div>
        </div>
    )
}

export default Dashboard;