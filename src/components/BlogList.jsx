import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import PersistenDrawerRight from "../pages/Menu-Bar";
import './BlogList.css';

const BlogList = (props) => {
    const match = useRouteMatch();
    
    const {
        fetchStatus,
        blogList,
        fetchError
    } = props;

    if (fetchStatus === 'IDLE' || fetchStatus === 'STARTED') {
        return (
            <div className="blog-list">
                Loading...
            </div>
        )
    }

    if (fetchStatus === 'SUCCEEDED') {
        return (
            <div className="main-container-blog-list">
                <PersistenDrawerRight />
                <h1 className='main-container-blog-list--h1'>Master the Art.</h1>
                <p className='main-container-blog-list--text'>Is Arabica really better than Robusta? Does coffee from a French press taste different than drip coffee?
                And what exactly is a cortado? Learn all about brewing methods, coffee types around the world, coffee and health, and much more.</p>
                <div className="blog-list">
                    <div className="blog-wrapper">
                        {blogList.map(blogArticle => (
                            <div className="blog-card">
                                <img className="blog-image" alt="" src={blogArticle.image} />
                                <div className="info-blog-card">
                                    <h1>{blogArticle.title}</h1>
                                    <h3 className="blog-article__author">{blogArticle.author}</h3>
                                    <h3 className="blog-article__date">{blogArticle.date}</h3>
                                    <p className="blog-article__text">{`${blogArticle.text.substring(0, 200)} ...`}</p>
                                    <p className="blog-article__read">
                                        <Link to={`${match.url}/${blogArticle.id}`}> 
                                            &gt; Read more
                                        </Link>
                                    </p>
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
        <div className="blog-list">
            Sorry, error occurred:

            <pre>
                {fetchError}
            </pre>
        </div>
    );
};

export default BlogList;