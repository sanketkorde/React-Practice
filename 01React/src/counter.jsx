import { useState } from "react"

function Counter(){
    const [count,setCount] = useState(0);
    function incr(){
        if(count<20){
        setCount(count+1);
        }
        else{
            console.log("count is at it's max");
        }  
    }
    function decr(){
        if(count>0){
            setCount(count-1);
        }
        else{
            console.log("count is at it's min");
        }
    }
    return(
        <>
        <button onClick={incr}>Incerement : {count}</button>
        <br></br>
        <button onClick={decr}>Decerement : {count}</button>
        </>
    )
}

export default Counter;