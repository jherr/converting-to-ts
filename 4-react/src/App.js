import React from "react";
import PropTypes from "prop-types";

import "./App.css";

const PokemonList = ({ pokemon }) => (
  <table>
    <tbody>
      {pokemon.map((p) => (
        <tr key={p.id}>
          <td>{p.name.english}</td>
          <td>{p.types.join(", ")}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

PokemonList.propTypes = {
  pokemon: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.shape({
        english: PropTypes.string.isRequired,
      }),
      types: PropTypes.arrayOf(PropTypes.string.isRequired),
    })
  ),
};

const pokemon = [
  {
    id: 1,
    name: {
      english: "Bulbasaur",
    },
    types: ["Grass", "Poison"],
  },
];

function App() {
  return (
    <div className="App">
      <PokemonList pokemon={pokemon} />
    </div>
  );
}

export default App;
