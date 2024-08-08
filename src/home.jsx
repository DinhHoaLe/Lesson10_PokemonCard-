import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import PokemonList from './PokemonList';
import PokemonModal from './PokemonModal';

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const handleSearch = (event) => {
    setSearchParams({ query: event.target.value });
  };

  return (
    <div>
      <h1>Pokemon List</h1>
      <input type="text" value={query} onChange={handleSearch} placeholder="Search Pokemon" />
      <PokemonList query={query} setSelectedPokemon={setSelectedPokemon} />
      {selectedPokemon && <PokemonModal pokemon={selectedPokemon} onClose={() => setSelectedPokemon(null)} />}
    </div>
  );
};

export default Home;
