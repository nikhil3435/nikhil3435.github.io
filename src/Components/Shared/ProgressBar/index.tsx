import "./progressBar.css";

const ProgressBar = ({ progress }: { progress: number }) => {
    return (
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progress}%` }}></div>
      </div>
    );
  };
  
  export default ProgressBar;
  