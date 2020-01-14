import Axios from './Instance';

class Network extends Axios {
  constructor(baseURL: string, timeout = 10000) {
    super(baseURL, timeout);
  }
  /* USERS */
  async getUsers() {
    return this.send('GET', '/users');
  }

  /* LOGIN */
  async getLogin() {
    return this.send('GET', '/login');
  }
}

const baseUrl = 'http://localhost:3000';
const newtwork = new Network(baseUrl);
export default newtwork;
