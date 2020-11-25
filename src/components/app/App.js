import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.scss';
import Header from "../header";
// import HeaderContainer from '../../containers/header-container';
import ArticlesListContainer from '../../containers/articles-list-container';
import ArticlePageContainer from '../../containers/article-page-container';
import SignUpContainer from '../../containers/sign-up-container';
import SignInContainer from '../../containers/sign-in-container';
import HeaderContainer from '../../containers/header-container';
import SignUp from "../sign-up";
import SignIn from "../sign-in";

const App = () => {
    return (
        <Router>
            <HeaderContainer/>
            <Switch>
                <Route path='/articles/:slug' component={ArticlePageContainer}/>
                <Route path='/sign-up' component={SignUpContainer}/>
                <Route path='/sign-in' component={SignInContainer}/>
                <Route exact path={['/', '/articles']} component={ArticlesListContainer}/>
            </Switch>
        </Router>
    );
}

export default App;
