const StarshipCard = (props) => {
  return (
    <li>
      {`${props.starship.name}`}
      <br />
      {`Class : ${props.starship.starship_class}`}
      <br />
      {`Manufacturer : ${props.starship.manufacturer}`}
      <br />
      {`Model : ${props.starship.model}`}
      <br />
    </li>
  );
};

export default StarshipCard;
