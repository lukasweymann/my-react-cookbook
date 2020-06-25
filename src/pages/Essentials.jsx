import React, { useEffect, useState } from 'react';
import EssentialsList from '../components/EssentialList';

const EssentialsListContainer = () => {
    // IDLE, STARTED, SUCCEEDED, FAILED
    const [ fetchStatus, updateFetchStatus ] = useState('IDLE');
    const [ fetchError, setFetchError ] = useState(null);
    const [ essentialsList, setEssentialsList ] = useState([]);

    useEffect(() => {
      updateFetchStatus('STARTED');

      fetch('https://rocky-shore-04502.herokuapp.com/essentials')
        .then(response => response.json())
        .then(data => {
          setEssentialsList(data);
          updateFetchStatus('SUCCEEDED');
        })
        .catch(err => { // new Error('message') -> err.message
          setFetchError(err.message);
          updateFetchStatus('FAILED');
        })
    }, []);

    return (
      <EssentialsList
        fetchStatus={fetchStatus}
        essentialsList={essentialsList}
        fetchError={fetchError}
      />
    )
  }

  export default EssentialsListContainer;

