import * as starshipService from "./services/starshipService";
import StarshipList from "./components/StarshipList";
import StarshipSearch from "./components/StarshipSearch";
import { useState, useEffect } from "react";

const App = () => {
  const [starships, setStarships] = useState([]);
  const [filteredStarships, setFilteredStarships] = useState([]);

  const getStarship = async () => {
    const data = await starshipService.show();
    setFilteredStarships(data.results);
    setStarships(data.results);
  };

  useEffect(() => {
    const fetchDefaultData = async () => {
      await getStarship("starships");
    };

    fetchDefaultData();
  }, []);

  const searchStarships = (str) => {
    const lowerCaseStr = str.toLowerCase();
    setStarships(
      str.length > 0
        ? filteredStarships.filter((starship) =>
            starship.name.toLowerCase().includes(lowerCaseStr)
          )
        : filteredStarships
    );
  };

  return (
    <>
      <StarshipSearch getStarship={searchStarships} />
      <h3>Number of results : {starships.length}</h3>
      <StarshipList starships={starships} />
    </>
  );
};

export default App;
