import React, { useContext } from "react";
import { Context } from "../store/appContext";


const PeopleCard = () => {
  const {store, actions} = useContext(Context)
  const starWarsCharacters = store.people.map((character,index) => {
    return (
      <div className="card" key={index} style={{ width: "18rem", marginRight: '10px'}}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSejWeqiuDK3vMj-x1O5hUwUNZaeHvwZgUYJw&usqp=CAU"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
            <h5 className="card-title">{character.name}</h5>
            <p className="card-text">Gender: {character.gender}</p>
        <p className="card-text">Hair Color: {character.hair_color}</p>
        <p className="card-text">Eye Color: {character.eye_color}</p>
        <a href="#" className="btn btn-primary">
          Learn More!
        </a>
        <button type="button" className="btn btn-outline-warning ms-3" onClick={event => {
								event.preventDefault;
								actions.addFavorites(character.name);
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
      {starWarsCharacters}     
    </div>
  );
};

export default PeopleCard;
