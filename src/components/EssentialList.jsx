import React from 'react';
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
      <div className="essentials-list">
        <pre>
          {essentialsList.map(essential => (
            <div className="essential-card">
              <img className="essential-image" alt="product" src={essential.image} />
              <h1>{essential.first_name}</h1>
              <h2>{essential.price}</h2>
              <h2>{essential.desciption}</h2>
            </div>
          ))}
        </pre>
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