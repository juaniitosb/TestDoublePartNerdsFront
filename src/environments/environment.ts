
const host = 'http://localhost:4200/';
const github = 'https://api.github.com/';

export const environment = {
  production: false,

  //github

  listUser: `${github}search/users?q=YOUR_NAME`,
  listInfoUser: `${github}users/`,
  //localHost:back
  login: `${github}users/`,
};


