const axios = require("axios");

class PDLJS {
  constructor({ apiKey, basePath, version }) {
    this.apiKey = apiKey;
    this.basePath = basePath || `https://api.peopledatalabs.com/${version || "v5"}/`;
    this.person = {
      enrichment: (params) => {
        return new Promise((resolve, reject) => {
          axios.get(`${this.basePath}/person/enrich`, {
            params: {
              'api_key': this.apiKey,
              ...params
            }
          })
          .then((data) => {
            if (data.data.status === 200) {
              resolve(data.data);
            } else {
              reject(data.data);
            }
          })
          .catch((error) => {
            reject(error);
          })
        });
      },
      search: (params) => {
        console.log('coming soon');
      },
      bulk: (params) => {
        console.log('coming soon');
      },
      identify: (params) => {
        return new Promise((resolve, reject) => {
          axios.get(`${this.basePath}/person/identify`, {
            params: {
              'api_key': this.apiKey,
              ...params
            }
          })
          .then((data) => {
            if (data.data.status === 200) {
              resolve(data.data);
            } else {
              reject(data.data);
            }
          })
          .catch((error) => {
            reject(error);
          })
        });
      },
      retrieve: (id) => {
        return new Promise((resolve, reject) => {
          axios.get(`${this.basePath}/person/retrieve/${id}`, {
            params: {
              'api_key': this.apiKey
            }
          })
          .then((data) => {
            if (data.data.status === 200) {
              resolve(data.data);
            } else {
              reject(data.data);
            }
          })
          .catch((error) => {
            reject(error);
          })
        });
      }
    }

    this.company = {
      enrichment: (params) => {
        return new Promise((resolve, reject) => {
          axios.get(`${this.basePath}/company/enrich`, {
            params: {
              'api_key': this.apiKey,
              ...params
            }
          })
          .then((data) => {
            if (data.data.status === 200) {
              resolve(data.data);
            } else {
              reject(data.data);
            }
          })
          .catch((error) => {
            reject(error);
          })
        });
      },
      search: (params) => {
        console.log('coming soon');
      },
      cleaner: (params) => {
        return new Promise((resolve, reject) => {
          axios.get(`${this.basePath}/company/clean`, {
            params: {
              'api_key': this.apiKey,
              ...params
            }
          })
          .then((data) => {
            if (data.data.status === 200) {
              resolve(data.data);
            } else {
              reject(data.data);
            }
          })
          .catch((error) => {
            reject(error);
          })
        });
      }
    }

    this.school = {
      cleaner: (params) => {
        return new Promise((resolve, reject) => {
          axios.get(`${this.basePath}/school/clean`, {
            params: {
              'api_key': this.apiKey,
              ...params
            }
          })
          .then((data) => {
            if (data.data.status === 200) {
              resolve(data.data);
            } else {
              reject(data.data);
            }
          })
          .catch((error) => {
            reject(error);
          })
        });
      }
    }

    this.location = {
      cleaner: (params) => {
        return new Promise((resolve, reject) => {
          axios.get(`${this.basePath}/location/clean`, {
            params: {
              'api_key': this.apiKey,
              ...params
            }
          })
          .then((data) => {
            if (data.data.status === 200) {
              resolve(data.data);
            } else {
              reject(data.data);
            }
          })
          .catch((error) => {
            reject(error);
          })
        });
      }
    }
  }
}

module.exports = PDLJS;
