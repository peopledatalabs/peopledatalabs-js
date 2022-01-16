const axios = require("axios");

class PDLJS {
  constructor({ apiKey, basePath, version }) {
    this.apiKey = apiKey;
    this.basePath = basePath || `https://api.peopledatalabs.com/${version || "v5"}/`
  }

  personEnrichment(params) {
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
  }

  identify(params) {
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
  }

  companyEnrichment(params) {
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
  }

  personRetrieve(id) {
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

  companyCleaner(params) {
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

  schoolCleaner(params) {
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

  locationCleaner(params) {
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

module.exports = PDLJS;
