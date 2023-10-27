export const API_URL = `${import.meta.env.VITE_API_BASE_URL}`;
export const GITHUB_REDIRECT_URL = `${import.meta.env.VITE_GITHUB_REDIRECT_URL}`;
export const ANILIST_REDIRECT_URL = `${import.meta.env.VITE_ANILIST_REDIRECT_URL}`;
export const REST_API_URL = `${import.meta.env.VITE_REST_API_URL}`;
export const GITHUB_LOGIN_URL = `https://github.com/login/oauth/authorize?client_id=${
  import.meta.env.VITE_GITHUB_CLIENT_ID
}&redirect_uri=${import.meta.env.VITE_GITHUB_REDIRECT_URL}`;
