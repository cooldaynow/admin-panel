import Axios from './Instance';

class Network extends Axios {
  constructor(baseURL: string, timeout = 10000) {
    super(baseURL, timeout);
  }
  async getTest() {
    return this.send('GET', '/posts');
  }
}

const baseUrl = 'http://localhost:3000';
const newtwork = new Network(baseUrl);
export default newtwork;
