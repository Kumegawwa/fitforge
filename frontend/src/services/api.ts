import axios from 'axios';

const api = axios.create({
  // Se estiver usando o emulador Android, use 10.0.2.2. 
  // Se for iPhone ou celular físico, use o seu endereço IP (ex: 192.168.x.x)
  baseURL: 'http://10.0.2.2:3000/api', 
});

export default api;