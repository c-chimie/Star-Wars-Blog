import React from "react";
import "../../styles/home.css";
import PeopleCard from "../component/PeopleCard";
import PlanetsCard from "../component/PlanetsCard.js";

export const Home = () => (
  <div className="m-5">
    <h3 className="text-danger">Characters</h3>
    <PeopleCard/>
    <h3 className="mt-5 text-danger">Planets</h3>
    <PlanetsCard/>
  </div>
);
