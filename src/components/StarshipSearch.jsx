import { useState } from "react";

const StarshipSearch = ({ getStarship }) => {
  const [str, setstr] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    getStarship(str);
    setstr("");
  };
  return (
    <>
      <h2>Search</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Search">Search Term</label>
        <input
          type="text"
          name="Search"
          id="Search"
          value={str}
          onChange={(e) => setstr(e.target.value)}
        />
        <button>Search</button>
      </form>
    </>
  );
};

export default StarshipSearch;
