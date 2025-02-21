import { useEffect, useState } from "react";
import Spinner from "../Shared/Spinner"
import ProgressBar from "../Shared/ProgressBar";

const Loaders = () => {

    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        setProgress((oldProgress) => (oldProgress < 100 ? oldProgress + 10 : 100));
        }, 500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <Spinner />
            <ProgressBar progress={progress} />
        </div>
    )
}

export default Loaders;