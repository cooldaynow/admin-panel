const baseUrl = 'http://localhost:3000';
class Network {
  public async getTest() {
    const data = await fetch(baseUrl + '/posts');
    return await data.json();
  }
}
const newtwork = new Network();
export default newtwork;
