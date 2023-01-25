import { useEffect } from "react";
import App from "./App";

const App2 = () => {
 const a=10
    useEffect(()=>{
        console.log('Helloooooooooooo',a);
    },[])
    return (
        <>Heloo 2
        <div className="flex justify-between items-center">
            <div className="bg-slate-500 p-3 text-white text-center">
testing css
            </div>
            <div className="bg-indigo-500 p-3 text-white text-center">
testing css2
            </div>

            <App/>
        </div>
        </>
    );
}

export default App2;