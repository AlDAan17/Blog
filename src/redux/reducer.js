import { combineReducers } from 'redux';
import { ARTICLES_RECEIVED, ARTICLES_NOT_RECEIVED, BEGINNING, AUTH_COMPLETED, LOG_OUT, SERVER_VALIDATIONS_RECEIVED } from './action-types';

const successfullDownload = (state = false, action) =>{
  switch (action.type) {
    case ARTICLES_RECEIVED:
      return true;
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
    case BEGINNING:
      return '';
    case AUTH_COMPLETED:
      return '';
    default:
      return state;
  }
}

const reducer = combineReducers({
  data,
  successfullDownload,
  error,
  user,
  serverValidations,
});

export default reducer;