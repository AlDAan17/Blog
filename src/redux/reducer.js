import { combineReducers } from 'redux';
import {
  ARTICLES_RECEIVED,
  ARTICLES_NOT_RECEIVED,
  AUTH_COMPLETED,
  LOG_OUT,
  SERVER_VALIDATIONS_RECEIVED,
  PROFILE_EDITED,
  RESET,
  ARTICLE_CREATED,
  ARTICLE_EDITED,
  ARTICLE_RECEIVED,
  ARTICLE_NOT_RECEIVED,
} from './action-types';

const successfullDownload = (state = false, action) =>{
  switch (action.type) {
    case ARTICLES_RECEIVED:
      return true;
    case RESET:
      return false;
    default:
      return state;
  }
}

const data = (state = { articles: [], page: 1}, action) =>{
  switch (action.type) {
    case ARTICLES_RECEIVED:
      return {articles: [...action.articles], page: action.page};
    default:
      return state;
  }
}

const error = (state = false, action) =>{
  switch (action.type) {
    case ARTICLES_NOT_RECEIVED:
      return true;
    case RESET:
      return false;
    default:
      return state;
  }
}

const userInitial = sessionStorage.getItem("user") ? JSON.parse(sessionStorage.getItem("user")) : {};

const user = (state = userInitial, action) =>{
  switch (action.type) {
    case AUTH_COMPLETED:
      return {...action.user};
    case LOG_OUT:
      return {};
    default:
      return state;
  }
}

const serverValidations = (state = '', action) =>{
  switch (action.type) {
    case SERVER_VALIDATIONS_RECEIVED:
      return action.text;
    case RESET:
      return '';
    default:
      return state;
  }
}

const successEditingProfile = (state = false, action) =>{
  switch (action.type) {
    case PROFILE_EDITED:
      return true;
    case RESET:
      return false;
    default:
      return state;
  }
}

const successCreatingArticle = (state = false, action) => {
  switch (action.type) {
    case ARTICLE_CREATED:
      return true;
    case RESET:
      return false;
    default:
      return state;
  }
}

const successEditingArticle = (state = false, action) =>{
  switch(action.type) {
    case ARTICLE_EDITED:
      return true;
    case RESET:
      return false;
    default:
      return state;
  }
}

function successGettingArticle(state = false, action) {
  switch (action.type) {
    case ARTICLE_RECEIVED:
      return true;
    case RESET:
      return false;
    default:
      return state;
  }
}

const lastOpenedArticle = (state = {}, action) => {
  switch (action.type) {
    case ARTICLE_RECEIVED:
      return { ...action.article };
    default:
      return state;
  }
}

const reducer = combineReducers({
  data,
  successfullDownload,
  error,
  user,
  lastOpenedArticle,
  serverValidations,
  successEditingProfile,
  successCreatingArticle,
  successEditingArticle,
  successGettingArticle,
});

export default reducer;