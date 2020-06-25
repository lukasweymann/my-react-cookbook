import React from 'react';
import PersistenDrawerRight from "../pages/Menu-Bar";
import './VarietiesList.css';

const VarietiesList = (props) => {
  const {
    fetchStatus,
    varietiesList,
    fetchError
  } = props;

  if (fetchStatus === 'IDLE' || fetchStatus === 'STARTED') {
    return (
      <div className="varieties-list">
        Loading...
      </div>
    )
  }

  if (fetchStatus === 'SUCCEEDED') {
    return (
      <div className="main-container-varieties-list">
        <PersistenDrawerRight />
        <h1 className='main-container-varieties-list--h1'>VARIETIES</h1>
        <p>Here's where you find all these little things you can get yourself to make coffee brewing an amazing, delicious experience. Made by yourself, with love.</p>
        <div className="varieties-list">
          <div className="varieties-wrapper">
            {varietiesList.map(varieties => (
              <div className="varieties-card">
                <img className="varieties-image" alt="product" src={varieties.image} />
                <div className="info-variety-card">
                <h1>{varieties.first_name}</h1>
                <h3 className="varieties-price">{varieties.price}</h3>
                <p className="varieties-description">{varieties.desciption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  // ERROR
  return (
    <div className="varieties-list">
      Sorry, error occurred:

      <pre>
        {fetchError}
      </pre>
    </div>
  );
};

export default VarietiesList;