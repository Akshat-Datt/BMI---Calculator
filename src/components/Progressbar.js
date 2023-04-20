import "./progressbar.css"
import {motion} from 'framer-motion';

function Progressbar({value}) {
    return(
        <div className="progressbar-container">
            <div className="progressbar">
                <motion.div 
                className="bar"
                animate={{
                    width: `${value}%`
                }}
                transition={{
                    duration: 2
                }}
                />
            </div>
        </div>
    );
}

export default Progressbar