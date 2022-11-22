import React from "react";
import { Context } from "../store/appContext.js";
import { useContext } from "react"

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const favoritesNav = store.favorites.map((favorite, index) => {
		return (
			<li key={index.toString()} >
        <a className="dropdown-item" href="#">
				 {favorite}
				<button
        className="btn"
					onClick={event => {
						event.preventDefault;
						actions.deleteFavorites(favorite);
					}}>
					❌
				</button>
        </a>
			</li>
		);
	});

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src="https://cdn.freebiesupply.com/logos/large/2x/star-wars-4-logo-png-transparent.png"
            height={50}
            className="card-img-top"
            alt="logo"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDarkDropdown"
          aria-controls="navbarNavDarkDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDarkDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Favorites
              </a>
              <ul
                className="dropdown-menu dropdown-menu-dark"
                aria-labelledby="navbarDarkDropdownMenuLink"
              >
               {store.favorites != '' ? favoritesNav : "No Favorites to Display"}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
