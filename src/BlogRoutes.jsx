import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import Blog from './pages/Blog';
import SingleBlogArticleContainer from './components/SingleBlogArticleContainer';

const BlogRoutes = () => {
    const match = useRouteMatch();

    return (
        <Switch>
            <Route path={`${match.path}/:id`}>
                <SingleBlogArticleContainer />
            </Route>
            <Route path={match.path}>
                <Blog />
            </Route>
        </Switch>
    );
};

export default BlogRoutes;