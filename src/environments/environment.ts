const localhost = 'http://localhost:8080/';
const github = 'https://api.github.com/';

export const environment = {
  production: false,

  //github

  listUser: `${github}search/users?q=YOUR_NAME`,
  listInfoUser: `${github}users/`,
  //localHost:back
  //localHost:back2asd
  login: `${localhost}managerTask/api/ts/login`,
  personRegister: `${localhost}managerProducts/api/person/createPerson`,
  userRegister: `${localhost}managerTask/api/ts/createUser`,
};


