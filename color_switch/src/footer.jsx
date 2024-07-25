import { useState, useSyncExternalStore } from "react";

function Footer(){
    const [color,setColor] = useState("green");
    return(
        <>
        <div className="flex w-full h-svh"
            style={
                {background:color}
            }
        >
            <div className=" flex flex-wrap w-full justify-center items-center">
                <button 
                onClick={()=> setColor("blue")}
                className=" border-none rounded-lg bg-blue-600 text-white px-2 py-0 mr-5"
                >Blue</button>
                <button 
                 onClick={()=> setColor("black")}
                className=" border-none rounded-lg bg-black text-white  px-2 py-0 mr-5"
                >Black</button>
                <button
                 onClick={()=> setColor("red")} 
                className=" border-none rounded-lg bg-red-600 text-white  px-2 py-0 mr-5"
                >Red</button>
                <button
                 onClick={()=> setColor("white")}
                className=" border-none rounded-lg bg-white text-black  px-2 py-0 mr-5"
                >White</button>
            </div>
        </div>
        </>
    )
}

export default Footer;