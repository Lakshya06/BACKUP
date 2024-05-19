import React from "react";

function Meme(){
    return (
        <main>
            <form className="form">
                <input type="text" className="form-input" placeholder="Top Text"></input>
                <input type="text" className="form-input" placeholder="Bottom Text"></input>
                <button className="form-btn">Get a new meme image 🤡</button>
            </form>
        </main>
    )
}

export default Meme