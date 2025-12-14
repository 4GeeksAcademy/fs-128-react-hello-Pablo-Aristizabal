import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Navbar } from "./Navbar";
import { Jumbotron } from "./Jumbotron";
import { Footer } from "./Footer";
import { Card } from "./Card";

//create your first component
const Home = () => {

  const dragonBallCharacters = [
    {
      id: "1",
      name: "Goku",
      description: "A Saiyan warrior raised on Earth who constantly seeks to improve himself and protect his friends.",
      image: "https://static.wikia.nocookie.net/dragon-ball-star/images/4/4f/Goku_dbz_fin.png/revision/latest?cb=20131118182753&path-prefix=es"
    },
    {
      id: "2",
      name: "Piccolo",
      description: "A serious and disciplined strategist, former enemy turned powerful ally and mentor.",
      image: "https://static.wikia.nocookie.net/misanimes/images/c/c0/PICCOLO.png/revision/latest?cb=20111125012223&path-prefix=es"
    },
    {
      id: "3",
      name: "Krilin",
      description: "A brave and loyal human martial artist, and one of Goku’s closest friends.",
      image: "https://static.wikia.nocookie.net/dragn-ball-z/images/7/7e/Krilin.png/revision/latest?cb=20121227115619&path-prefix=es"
    },
    {
      id: "4",
      name: "Freezer",
      description: "A ruthless galactic tyrant known for his cruelty and overwhelming power.",
      image: "https://static.wikia.nocookie.net/featteca/images/d/db/Freezer_render_.png/revision/latest?cb=20240719211559&path-prefix=es"
    }
  ];

  return (
    <>
      <Navbar />
      
      <Jumbotron />
      <div class="container">
        <div class="row text-center">
          {
            dragonBallCharacters.map(character => {
              return (
                <Card key={character.id} character= {character} />
              )
             })
          }
        </div>
      </div>
      <Footer />
    </> 
  );
};

export default Home;