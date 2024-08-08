import React, { useState } from 'react';
import Modal from 'react-modal';

const PokemonCard = ({ name, img, types }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <div>
      <div className="pokemon-card" onClick={openModal}>
        <div className="pokemon-image">
          <img src={img} alt={name} />
        </div>
        <div className="pokemon-info">
          <h2>{name}</h2>
          <div className="pokemon-types">
            {types.map((type, index) => (
              <span key={index} className={`type ${type}`}>
                {type}
              </span>
            ))}
          </div>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Pokemon Details"
      >
        <h2>{name}</h2>
        <img src={img} alt={name} />
        <div className="pokemon-types">
          {types.map((type, index) => (
            <span key={index} className={`type ${type}`}>
              {type}
            </span>
          ))}
        </div>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
};

export default PokemonCard;
