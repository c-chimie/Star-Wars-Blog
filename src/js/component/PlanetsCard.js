import React, { useContext } from "react";
import { Context } from "../store/appContext";


const PlanetsCard = () => {
  const {store, actions} = useContext(Context)
  const starWarsPlanets = store.planets.map((planet,index) => {
    return (
      <div className="card" key={index} style={{ width: "18rem", marginRight: '10px', }}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSejWeqiuDK3vMj-x1O5hUwUNZaeHvwZgUYJw&usqp=CAU"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
            <h5 className="card-title">{planet.name}</h5>
            <p className="card-text">Population: {planet.population}</p>
        <p className="card-text">Terrain: {planet.terrain}</p>
        <a href="#" className="btn btn-primary">
          Learn More!
        </a>
        <button type="button" className="btn btn-outline-warning ms-3" onClick={event => {
								event.preventDefault;
								actions.addFavorites(planet.name);
								console.log(store.favorites);
							}}>
          &#9825;
        </button>
      </div>
    </div>
    )
  })

  return (
    <div className="row" style={{display: 'inline-flex', width: '100%',flexDirection: 'row', overflowX: 'scroll', flexWrap: 'nowrap'}}>
      {starWarsPlanets}     
    </div>
  );
};

export default PlanetsCard;