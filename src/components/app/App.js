import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.scss';
import Header from "../header";
import ArticlesList from "../articles-list";
import ArticlePage from "../article-page";

function App() {
    return (
        <Router>
            <React.Fragment>
                <Header/>
                <Switch>
                    <Route path='/articles/:slug' component={ArticlePage}/>
                    <Route path='/articles' component={ArticlesList}/>
                    <Route exact path='/' component={ArticlesList}/>
                    {/*<Route exact path={['/', '/articles', '/articles/:slug']} component={ArticlesList}/>*/}
                </Switch>
            </React.Fragment>
        </Router>
    );
}

export default App;
