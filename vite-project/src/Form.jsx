function eventInfo(event){
    event.preventDefault();
    console.log("submitted")
    console.log(event);
}

export default function Form(){
    return(
        <form>
            <label htmlFor="name">Name</label>
            <input id="name" type="text"></input>
            <br />
            <button onClick={eventInfo}>Submit</button>
        </form>
    )
}
