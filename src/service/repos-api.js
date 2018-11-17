import { http } from './http';

// Importando o arquivo { http }, declaramos uma const que recebe a função
// fetchRepos, que com paramentro um 'user', retornando atraves do método get
// os repositorios do usuario recebido;
export const fetchRepos = user => http.get(`users/${user}/repos`);
