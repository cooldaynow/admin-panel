import axios from 'axios';

class Axios {
  instance: any;
  methods: any;
  constructor(baseURL: string, timeout = 10000) {
    this.instance = axios.create({
      baseURL,
      timeout
    });

    this.methods = new Map([
      ['POST', this.instance.post],
      ['GET', this.instance.get],
      ['PUT', this.instance.put]
    ]);
  }
  public async send(methodName: string, ...args: any) {
    try {
      const method = this.methods.get(methodName);
      const { data } = await method(...args);
      return data;
    } catch ({ message, name }) {
      throw {
        name,
        message
      };
    }
  }
}
export default Axios;
