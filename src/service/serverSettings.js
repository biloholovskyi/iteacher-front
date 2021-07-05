
const api_url = process.env.REACT_APP_API_URL;
class ServerSettings {
  constructor() {
    // this.api = 'https://dev4.i-teacher.online/';
    this.api = api_url;
  }

  getApi = () => {
    return this.api;
  }
}

export default ServerSettings;