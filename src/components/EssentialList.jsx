import React from 'react';
import PersistenDrawerRight from "../pages/Menu-Bar";
import './EssentialList.css';

const EssentialsList = (props) => {
  const {
    fetchStatus,
    essentialsList,
    fetchError
  } = props;

  if (fetchStatus === 'IDLE' || fetchStatus === 'STARTED') {
    return (
      <div className="essentials-list">
        Loading...
      </div>
    )
  }

  if (fetchStatus === 'SUCCEEDED') {
    return (
      <div className="main-container-essential-list">
        <PersistenDrawerRight />
        <h1 className='main-container-essential-list--h1'>Essentials.</h1>
        <p className='main-container-essential-list__content'>Here's where you find all these little things you can get yourself to make coffee brewing an amazing, delicious experience. Made by yourself, with love.</p>
        <div className="essentials-list">
          <div className="essential-wrapper">
            {essentialsList.map(essential => (
              <div className="essential-card">
                <img className="essential-image" alt="product" src={essential.image} />
                <h1 className="essential-card__h1">{essential.first_name}</h1>
                <h2 className="essential-card__h2">{essential.price}</h2>
                <p className="essentials-description">{essential.desciption}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  // ERROR
  return (
    <div className="essentials-list">
      Sorry, error occurred:

      <pre>
        {fetchError}
      </pre>
    </div>
  );
};

export default EssentialsList;