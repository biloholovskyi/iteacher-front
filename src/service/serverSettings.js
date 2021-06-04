class ServerSettings {
  constructor() {
    // this.api = 'http://dev4.albert9t.beget.tech/';
    this.api = 'http://127.0.0.1:8000/';
  }

  getApi = () => {
    return this.api;
  }
}

export default ServerSettings;