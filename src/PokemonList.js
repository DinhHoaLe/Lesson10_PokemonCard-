import React, { useContext, useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { PokemonContext } from './PokemonContext';
import PokemonCard from './pokemonCard/pokemonCard'; // Component hiển thị thông tin một Pokémon
import ReactPaginate from 'react-paginate';
import './App.css';

const PokemonList = () => {
  const { pokemonData, loading } = useContext(PokemonContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const search = query.get('search') || '';
    setSearchTerm(search);
  }, [location.search]);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const handleSearch = (e) => {
    const search = e.target.value;
    setSearchTerm(search);
    navigate(`/home?search=${search}`);
  };

  const filteredData = pokemonData.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const pageCount = Math.ceil(filteredData.length / itemsPerPage);
  const displayedData = filteredData.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <div className="pokemon-list-container">
      <input
        type="text"
        placeholder="Search Pokémon"
        value={searchTerm}
        onChange={handleSearch}
      />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="container">
          {displayedData.map((pokemon) => (
            <PokemonCard
              key={pokemon.id}
              name={pokemon.name}
              img={pokemon.sprites.front_default}
              types={pokemon.types.map((type) => type.type.name)}
            />
          ))}
        </div>
      )}
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        activeClassName="active"
      />
    </div>
  );
};

export default PokemonList;
