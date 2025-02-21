import { useNavigate } from 'react-router-dom';
import './dashboard.css';

const gameFeatures = [
    {
        id: 1,title: "Tic Tac Toe" , navigation: "/tictactoe", type: 'GAME', enable: true
     },
     {
         id: 2,title: "Ludo" , navigation: "/ludo", type: 'GAME' , enable: false
     },
     {
         id: 3,title: "Chess" , navigation: "/chess", type: 'GAME' , enable: false
     },
     {
         id: 4,title: "Tambola Ticket" , navigation: "/tambola-ticket", type: 'GAME' , enable: false
     },
     {
         id: 5,title: "Tambola Number Generator" , navigation: "/tambola-number", type: 'GAME' , enable: false
     },
]

const codeFeatures = [
    
    {
        id: 1,title: "Todo App" , navigation: "/todo-app", type: 'CODE' , enable: false
    },
    {
        id: 2,title: "Amazon Zoom Feature" , navigation: "/amazon-zoom", type: 'CODE' , enable: false
    },
    {
        id: 3,title: "Loaders" , navigation: "/loaders", type: 'CODE' , enable: true
    },
]


const Dashboard = () => {
    const navigate = useNavigate();
    return (
        <div className='dashboard-container' >
            <div className='dashboard-games-container'>
                <div>Wanna Play Games . Click on enable button to play your favourite game</div>
                <div className='row-container'>
                    {gameFeatures.length > 0
                    &&
                    gameFeatures.map((game,index)=>(
                        <div className='button-div' key={`${game.id}-${index}`} >
                            <button  onClick={()=>navigate(game.navigation)} disabled={!game.enable} > {game.title}</button>
                        </div>
                    )) 
                    }
                </div>
            </div>
            <div className='dashboard-games-container'>
                <div>Check out coding part</div>
                <div className='row-container'>
                    {codeFeatures.length > 0
                    &&
                    codeFeatures.map((code,index)=>(
                        <div className='button-div' key={`${code.id}-${index}`} >
                            <button onClick={()=>navigate(code.navigation)} disabled={!code.enable} > {code.title}</button>
                        </div>
                    )) 
                    }
                </div>
            </div>
        </div>
    )
}

export default Dashboard;