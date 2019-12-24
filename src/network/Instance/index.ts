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
    } catch (error) {
      const errorStatusCode =
        error.statusCode || error.code || error.response.data.statusCode || 403;
      const errorInfo =
        error.response && error.response.data && error.response.data.message
          ? `${error.response.data.error} ${error.response.data.message}`
          : error.message || 'неизвестная ошибка';
      const errorMessage =
        error.response && error.response.data && error.response.data.message
          ? `${error.response.data.message}`
          : error.message || 'неизвестная ошибка';

      throw {
        statusCode: errorStatusCode,
        message: `${errorMessage}`,
        info: `API: ${errorInfo}`
      };
    }
  }
}
export default Axios;
