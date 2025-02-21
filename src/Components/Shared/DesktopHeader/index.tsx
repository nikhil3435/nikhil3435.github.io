import { useLocation, useNavigate } from 'react-router-dom';
import './desktopHeader.css';

const DesktopHeader = () => {
    const navigate = useNavigate();
    const location = useLocation();
    return (
        <div className='desktop-header-container' >
            {location.pathname!=='/' && <div className='desktop-header-back' onClick={()=>{navigate(-1)}} >{'<-'}</div>}
            <div className='desktop-header'>My Frontend Projects</div>
        </div>
    )
}

export default DesktopHeader;