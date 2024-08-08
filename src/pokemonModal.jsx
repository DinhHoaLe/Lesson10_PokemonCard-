import React from 'react';

const PokemonModal = ({ pokemon, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h1>{pokemon.name}</h1>
        <p>ID: {pokemon.id}</p>
        <p>Type: {pokemon.types.map((type) => type.type.name).join(', ')}</p>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      </div>
    </div>
  );
};

export default PokemonModal;
