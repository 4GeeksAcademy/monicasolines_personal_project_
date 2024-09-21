const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			token: localStorage.getItem("token") || null,  // Almacena el token del usuario
			recommendedGames: [],
			searchedGames: [],
			specificGame: []
		},
		actions: {

			loginUser: async (username, password) => {
				try {
					console.log("Action logi funcionando recibe: ",username,password);
				  console.log("Backend URL:", process.env.BACKEND_URL);
				  const response = await fetch(`${process.env.BACKEND_URL}/api/login`, {
					method: "POST",
					headers: {
					  "Content-Type": "application/json",
					  "Access-Control-Allow-Origin": "*",
					},
					body: JSON.stringify({ username, password }),
				  });
			  
				  if (response.ok) {
					const data = await response.json();
					localStorage.setItem("token", data.access_token);  // Almacena el token
					setStore({ token: data.access_token });
					return true;
				  } else {
					console.error("Login error:", await response.json());
					return false;
				  }
				} catch (error) {
				  console.error("Error during login", error);
				  return false;
				}
			  },
			  
			// Verificar si el usuario sigue autenticado
			isAuthenticated: () => {
				const store = getStore();
				return store.token !== null; // Aquí podrías incluir una verificación adicional si el token es válido
			},
			// Función para cerrar sesión
			logout: () => {
				localStorage.removeItem("token");
				setStore({ token: null, authMessage: null });
			},

			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			getUserProfile: async (userId) => {
				try {
				  const resp = await fetch(
					`${process.env.BACKEND_URL}/api/profile_user/${userId}`
				  );
				  if (!resp.ok) {
					const errorText = await resp.text();
					console.error("Error loading user profile:", errorText);
					throw new Error(`HTTP error! status: ${resp.status}`);
				  }
				  const data = await resp.json();
				  setStore({ userProfile: data });
				} catch (error) {
				  console.error("Error loading message from backend", error);
				}
			  },
			  
			  registerUser: async (data) => {
				try {
					let response = await fetch(`${process.env.BACKEND_URL}/api/users`, {
						method: "POST",
						body: JSON.stringify(data),
						headers: {
							"Content-Type": "application/json"
						}
					});
					
					let responseData = await response.json();	

					if (response.status === 200) {
						return responseData;
					} else {
						console.error("Error:", responseData);
					}
				} catch (error) {
					console.log("Error loading message from backend", error);
				}
			},
			addFavoriteGames: async (data) => {
				try {

					let response = await fetch(`${process.env.BACKEND_URL}/api/favorites`, {
						method: "POST",
						body: JSON.stringify(data),
						headers: {
							"Content-Type": "application/json"
						}
					});

					let responseData = await response.json();
		
					if (response.status === 201) {
						console.log("Juegos favoritos añadidos exitosamente:", responseData);
						return responseData; 
					} else {
						console.error("Error al agregar favoritos:", responseData);
						return null;
					}
				} catch (error) {
					console.error("Error en la solicitud de agregar favoritos:", error);
				}
			},
			getRecommendedGames_gameSelection: async (number_games) => {
                try {
                    const response = await fetch(`${process.env.BACKEND_URL}/api/games_recommended/${number_games}`);
                    if (response.ok) {
                        const data = await response.json();
                        setStore({ recommendedGames: data });
						console.log("hola")
                    } else {
                        console.error("Error:", response.statusText);
                    }
                } catch (error) {
                    console.log("Error loading message from backend", error)
                }
            },
			
			getGameByName_gameSelection: async (game_name) => {
				try {
					const response = await fetch(`${process.env.BACKEND_URL}/api/search_game?name=${game_name}`);
					if (response.ok) {
						const data = await response.json();
						setStore({ searchedGames: data });
						console.log("Game search successful");
					} else {
						console.error("Error:", response.statusText);
					}
				} catch (error) {
					console.log("Error loading message from backend", error);
				}
			},
			getGamesRecomended: async (number_games = 3) => {
				try {
				  const resp = await fetch(
					`${process.env.BACKEND_URL}/api/games_recommended/${number_games}`
				  );
				  if (!resp.ok) {
					throw new Error("Network response was not ok");
				  }
				  const data = await resp.json();
				  setStore({ games: data });
				  return data;
				} catch (error) {
				  console.log("Error loading games from backend", error);
				}
			  },
			getFilteredGames:  async (filters) => {
				try {
					const response = await fetch(`${process.env.BACKEND_URL}/api/filter_game`, {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
						},
						body: JSON.stringify(filters),
					});
			
					if (response.ok) {
						const data = await response.json();
						setStore({ searchedGames: data });
						console.log("Game search successful");
					} else {
						console.error("Error:", response);
					}
				} catch (error) {
					console.log("Error loading message from backend", error);
				}
			},
			getSpecificGame: async (id_game) => {
				try {

					const response = await fetch(`${process.env.BACKEND_URL}/api/games/${id_game}`);
					
					if (!response.ok) {
						throw new Error("Failed to fetch game data");
					}
			
					const gameData = await response.json();

					setStore({
						specificGame: gameData
					});
			
					return gameData;
				} catch (error) {
					console.error("There was an error fetching the game:", error);
				}
			}
		}
	};
};

export default getState;
