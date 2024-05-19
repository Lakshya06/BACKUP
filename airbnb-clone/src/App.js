import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";
import "./style.css"

console.log(data)

function App(){

    const card = data.map(item => {
        return (
            <Card 
                // img = {item.coverImg}
                // rating = {item.stats.rating}
                // reviewCount = {item.stats.reviewCount}
                // country = {item.location}
                // title = {item.title}
                // price = {item.price}
                {...item}
            />
        )
    })

    return(
        <div>
            {/* <h1>TEST</h1> */}
            <Navbar />
            <Hero />
            {/* <Card 
                img="katie-zaferes.png"
                rating={5.0}
                reviewCount={6}
                country="USA"
                title="Life Lessons with Katie Zaferes"
                price={136}
            /> */}
            <section className="cards-list">

                {card}
            </section>
        </div>
    )
}

export default App