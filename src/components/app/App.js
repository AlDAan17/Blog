import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.scss';
import Header from "../header";
// import HeaderContainer from '../../containers/header-container';
import ArticlesListContainer from '../../containers/articles-list-container';
import ArticlePageContainer from '../../containers/article-page-container';
import SignUp from "../sign-up";

const App = () => {
    return (
        <Router>
            <Header/>
            <Switch>
                <Route path='/articles/:slug' component={ArticlePageContainer}/>
                <Route path='/sign-up' component={SignUp}/>
                <Route exact path={['/', '/articles']} component={ArticlesListContainer}/>
            </Switch>
        </Router>
    );
}

export default App;
