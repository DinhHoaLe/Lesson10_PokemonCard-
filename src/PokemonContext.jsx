// PokemonContext.js
import React, { createContext, useState, useEffect } from 'react';

// Tạo context
export const PokemonContext = createContext();

// Tạo provider
export const PokemonProvider = ({ children }) => {
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Gọi API để lấy danh sách 100 Pokémon
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100');
        const json = await response.json();
        
        // Gọi API chi tiết cho từng Pokémon
        const detailedData = await Promise.all(
          json.results.map(async (item) => {
            const res = await fetch(item.url);
            return await res.json();
          })
        );

        setPokemonData(detailedData);
      } catch (error) {
        console.error('Error fetching Pokémon data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <PokemonContext.Provider value={{ pokemonData, loading }}>
      {children}
    </PokemonContext.Provider>
  );
};
