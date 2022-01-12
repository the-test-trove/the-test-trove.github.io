import {React, useEffect} from 'react'

export default function useScript() {
    useEffect(() => {
        const script = document.createElement('script');

        script.src = "../../assets/scripts/jquery-3.4.1.js";
        script.async = true;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, []);
    return (
        <div>
            
        </div>
    )
}
