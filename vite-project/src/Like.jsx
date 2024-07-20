import { useState } from "react";

export default function LikeButton(){
    let[like,setLike] = useState(false);
    let[count,setCount] = useState(0);
    function isLike(){
        setLike(!like);
        if(count==0){
            setCount(count+1);
        }
        else{

            setCount(count-1);
        }
        console.log(setLike.toString());
        console.log(count);
    }
    let style = {color: "red"};
    return(
        <p onClick={isLike}>
            Count = {count}
            <br></br>
            {like ?(
             <i className="fa-solid fa-heart" style={style}></i>
            ): (
                <i className="fa-regular fa-heart"></i>
            )}
        </p> 
    );
}