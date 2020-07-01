import React, { useEffect, useState } from 'react';
import BlogList from '../components/BlogList';

const BlogListContainer = () => {
    // IDLE, STARTED, SUCCEEDED, FAILED
    const [fetchStatus, updateFetchStatus] = useState('IDLE');
    const [fetchError, setFetchError] = useState(null);
    const [blogList, setBlogList] = useState([]);

    useEffect(() => {
        updateFetchStatus('STARTED');

        fetch('https://rocky-shore-04502.herokuapp.com/blog')
            .then(response => response.json())
            .then(data => {
                setBlogList(data);
                updateFetchStatus('SUCCEEDED');
            })
            .catch(err => { // new Error('message') -> err.message
                setFetchError(err.message);
                updateFetchStatus('FAILED');
            })
    }, []);

    return (
        <BlogList
            fetchStatus={fetchStatus}
            blogList={blogList}
            fetchError={fetchError}
        />
    )
}

export default BlogListContainer;