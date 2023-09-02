import AtomicSpinner from 'atomic-spinner'
import './spinner.css'
import { useEffect } from 'react';

import Aos from "aos"; //source https://github.com/michalsnik/aos
import "aos/dist/aos.css"

function Spinner(){
    useEffect(() => {
        Aos.init({duration:1000});
    },[]);
    return(
        <div className="spinner-container" data-aos="fade-in" >
        <AtomicSpinner/>
        </div>
    )
}

export default Spinner