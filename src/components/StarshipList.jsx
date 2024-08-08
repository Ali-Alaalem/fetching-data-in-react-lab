import StarshipCard from "./StarshipCard";

const StarshipList = (props) => {
  return (
    <section>
      <ul>
        {props.starships.map((starship) => (
          <StarshipCard starship={starship} />
        ))}
      </ul>
    </section>
  );
};

export default StarshipList;
