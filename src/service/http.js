// Importando biblioteca 'axios' para pode fazer consulta em uma API externa;
import axios from  'axios';

// Nesse texto de código http é uma const que recebe o metodo axios.create(),
// que recebe como parametro a baserURL da API que será consultada...
export const http = axios.create({
  baseURL:'https://api.github.com/'
})
