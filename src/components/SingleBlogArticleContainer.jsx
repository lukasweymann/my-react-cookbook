import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import SingleBlogArticle from './SingleBlogArticle';

const SingleBlogArticleContainer = () => {
    const { id } = useParams();

    const [fetchStatus, updateFetchStatus] = useState('IDLE'); // 'STARTED', 'SUCCEED', 'FAILED'
    const [fetchError, setFetchError] = useState(null);
    const [singleBlogArticle, setSingleBlogArticle] = useState({});

    useEffect(() => {
        updateFetchStatus('STARTED');

        fetch(`https://rocky-shore-04502.herokuapp.com/blog/${id}`)
            .then(response => response.json())
            .then(data => {
                setSingleBlogArticle(data);
                updateFetchStatus('SUCCEED');
            })
            .catch(err => {
                setFetchError(err.message);
                updateFetchStatus('FAILED');
            })
    }, [id]);

    return (
        <SingleBlogArticle
            fetchStatus={fetchStatus}
            singleBlogArticle={singleBlogArticle}
            fetchError={fetchError}
        />
    )
};

export default SingleBlogArticleContainer;