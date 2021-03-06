import React from 'react';

import PersistenDrawerRight from "../pages/Menu-Bar";

import './SingleBlogArticle.css';

const SingleBlogArticle = (props) => {
    const {
        fetchStatus,
        singleBlogArticle,
        fetchError
    } = props;

    if (fetchStatus === 'IDLE' || fetchStatus === 'STARTED') {
        return (
            <div className='single-blog-article'>
                Loading...
            </div>
        )
    }

    if (fetchStatus === 'SUCCEED') {
        return (
            <div className="main-container-blog-list">
                <PersistenDrawerRight />
                <div className='single-blog-article__wrapper'>
                    <div className="blog-card">
                        <img className="blog-image" alt="" src={singleBlogArticle.image} />
                        <div className="info-blog-card">
                            <h1>{singleBlogArticle.title}</h1>
                            <h3 className="blog-article__author">{singleBlogArticle.author}</h3>
                            <h3 className="blog-article__date">{singleBlogArticle.date}</h3>
                            <p className="blog-article__text">{singleBlogArticle.text}</p>
                        </div>
                    </div>
                </div>
            </div>    
        )
    }

    return (
        <div className='single-pokemon'>
            Something went wrong.

            <pre>
                {fetchError}
            </pre>
        </div>
    );
};

export default SingleBlogArticle;