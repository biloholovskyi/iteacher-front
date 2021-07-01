class ServerSettings {
  constructor() {
    this.api = 'https://dev4.i-teacher.online/';
    // this.api = 'http://127.0.0.1:8000/';
  }

  getApi = () => {
    return this.api;
  }
}

export default ServerSettings;