export const getUser = (state) => {
  return state.user;
};

export const getDeletingArticle = (state) => {
  return state.deletingArticle;
};

export const getArticles = (state) => {
  return state.data.articles;
};

export const getPage = (state) => {
  return state.data.page;
};

export const getLastOpenedArticle = (state) => {
  return state.lastOpenedArticle;
};

export const getSuccessGettingArticle = (state) => {
  return state.successGettingArticle;
};

export const getSuccessfullDownload = (state) => {
  return state.successfullDownload;
};

export const getSuccessEditingProfile = (state) => {
  return state.successEditingProfile;
};

export const getSuccessEditingArticle = (state) => {
  return state.successEditingArticle;
};

export const getSuccessCreatingArticle = (state) => {
  return state.successCreatingArticle;
};

export const getServerValidations = (state) => {
  return state.serverValidations;
};

export const getError = (state) => {
  return state.error;
};

export const getErrorFavoritingArticle = (state) => {
  return state.errorFavoritingArticle;
};





