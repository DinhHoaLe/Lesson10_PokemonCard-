import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { PokemonProvider } from './PokemonContext';
import PokemonList from './PokemonList'; // Component hiển thị danh sách Pokémon
import Register from './Register'; // Component trang đăng ký

const App = () => {
  return (
    <PokemonProvider>
      <Router>
        <div className="app">
          <Routes>
            <Route path="/home" element={<PokemonList />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<PokemonList />} /> 
          </Routes>
        </div>
      </Router>
    </PokemonProvider>
  );
};

export default App;
