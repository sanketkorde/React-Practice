import { useState } from "react";
export default function Count(){
    let [count, setCount] = useState(0);
    function incrCount(){
        setCount(count+1);
        console.log(count);
    }
    return(
        <div>
        <p>Count = {count}</p>
        <button onClick={incrCount}>Increase Count</button>
        </div>
    )
}