import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.scss';
import Header from "../header";
// import HeaderContainer from '../../containers/header-container';
import ArticlesListContainer from '../../containers/articles-list-container';
import ArticlePageContainer from '../../containers/article-page-container';

const App = () => {
    return (
        <Router>
            <React.Fragment>
                <Header/>
                <Switch>
                    <Route path='/articles/:slug' component={ArticlePageContainer}/>
                    {/*<Route path='/articles' component={ArticlesListContainer}/>*/}
                    {/*<Route exact path='/' component={ArticlesListContainer}/>*/}
                    <Route exact path={['/', '/articles']} render={() => {

                        return <ArticlesListContainer />
                    }}/>
                    {/*<Route exact path={['/', '/articles', '/articles/:slug']} component={ArticlesList}/>*/}
                </Switch>
            </React.Fragment>
        </Router>
    );
}

export default App;
