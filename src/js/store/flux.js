const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			favorites: [],
		},
		actions: {
			//GET REQUEST FOR PEOPLE
			getPeople: () => {
				fetch('https://swapi.dev/api/people/')
				.then(data => data.json())
				.then(res => setStore({people: res.results}))
			},

			//GET REQUEST FOR PLANETS
			getPlanets: () => {
				fetch('https://swapi.dev/api/planets/')
				.then(data => data.json())
				.then(res => setStore({planets: res.results}))
			},

			//ADD TO FAVORITES FUNCTION
			addFavorites: name => {
				if (
					!getStore().favorites.find(favorite => {
						return favorite == name;
					})
				) {
					setStore({ favorites: [...getStore().favorites, name] });
				}
			},
			//DELETE A FAVORITE FUNCTION
			deleteFavorites: deleted => {
				setStore({
					favorites: getStore().favorites.filter(item => item != deleted)
				});
			}

		}
	};
};

export default getState;
