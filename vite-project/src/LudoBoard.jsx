import { useState } from "react"

export default function LudoBoard(){
    let[Rcount,Rsetcount] = useState(0); 
    let[Bcount,Bsetcount] = useState(0);
    let[Gcount,Gsetcount] = useState(0);
    let[Ycount,Ysetcount] = useState(0);
    let RincrCount = ()=>{
        Rsetcount(Rcount+1);
    }
    let BincrCount = ()=>{
        Bsetcount(Bcount+1);
    }
    let GincrCount = ()=>{
        Gsetcount(Gcount+1);
    }
    let YincrCount = ()=>{
        Ysetcount(Ycount+1);
    }

return(
    <div>
        <p>
        Game Begins
        </p>
        <div>
            <button onClick={RincrCount}>Red = {Rcount}</button><br></br>
            <button onClick={BincrCount}>Blue = {Bcount}</button><br></br>
            <button onClick={YincrCount}>Yellow = {Ycount}</button><br></br>
            <button onClick={GincrCount}>Green = {Gcount}</button><br></br>
        </div>
    </div>
)
}