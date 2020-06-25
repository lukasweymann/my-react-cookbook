import React, { useEffect, useState } from 'react';
import VarietiesList from '../components/VarietiesList';

const VarietiesListContainer = () => {
    // IDLE, STARTED, SUCCEEDED, FAILED
    const [ fetchStatus, updateFetchStatus ] = useState('IDLE');
    const [ fetchError, setFetchError ] = useState(null);
    const [ varietiesList, setVarietiesList ] = useState([]);

    useEffect(() => {
      updateFetchStatus('STARTED');

      fetch('https://rocky-shore-04502.herokuapp.com/essentials')
        .then(response => response.json())
        .then(data => {
          setVarietiesList(data);
          updateFetchStatus('SUCCEEDED');
        })
        .catch(err => { // new Error('message') -> err.message
          setFetchError(err.message);
          updateFetchStatus('FAILED');
        })
    }, []);

    return (
      <VarietiesList
        fetchStatus={fetchStatus}
        varietiesList={varietiesList}
        fetchError={fetchError}
      />
    )
  }

  export default VarietiesListContainer;