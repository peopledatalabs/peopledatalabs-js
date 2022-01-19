import { check, errorHandler } from './errors';

const axios = require('axios');

class PDLJS {
  constructor({ apiKey, basePath, version }) {
    this.apiKey = apiKey;
    this.basePath = basePath || `https://api.peopledatalabs.com/${version || 'v5'}/`;
    this.person = {
      enrichment: (params) => new Promise((resolve, reject) => {
        check(params, this.basePath, this.apiKey).then(() => {
          axios.get(`${this.basePath}/person/enrich`, {
            params: {
              api_key: this.apiKey,
              ...params,
            },
          })
            .then((data) => {
              if (data?.data?.status === 200) {
                resolve(data.data);
              }
            })
            .catch((error) => {
              reject(errorHandler(error.response.status));
            });
        }).catch((error) => {
          reject(error);
        });
      }),
      search: (params) => {
        console.log('coming soon');
      },
      bulk: (records) => {
        const headers = {
          'Content-Type': 'application/json',
          'X-Api-Key': this.apiKey,
        };

        return new Promise((resolve, reject) => {
          check(records, this.basePath, this.apiKey, 'Records').then(() => {
            axios.post(`${this.basePath}/person/bulk`, records, { headers })
              .then((data) => {
                if (data?.data?.status === 200) {
                  resolve(data.data);
                }
              })
              .catch((error) => {
                reject(errorHandler(error.response.status));
              });
          }).catch((error) => {
            reject(error);
          });
        });
      },
      identify: (params) => new Promise((resolve, reject) => {
        check(params, this.basePath, this.apiKey).then(() => {
          axios.get(`${this.basePath}/person/identify`, {
            params: {
              api_key: this.apiKey,
              ...params,
            },
          })
            .then((data) => {
              if (data?.data?.status === 200) {
                resolve(data.data);
              }
            })
            .catch((error) => {
              reject(errorHandler(error.response.status));
            });
        }).catch((error) => {
          reject(error);
        });
      }),
      retrieve: (id) => new Promise((resolve, reject) => {
        check(id, this.basePath, this.apiKey, 'ID').then(() => {
          axios.get(`${this.basePath}/person/retrieve/${id}`, {
            params: {
              api_key: this.apiKey,
            },
          })
            .then((data) => {
              if (data?.data?.status === 200) {
                resolve(data.data);
              }
            })
            .catch((error) => {
              reject(errorHandler(error.response.status));
            });
        }).catch((error) => {
          reject(error);
        });
      }),
    };

    this.company = {
      enrichment: (params) => new Promise((resolve, reject) => {
        check(params, this.basePath, this.apiKey).then(() => {
          axios.get(`${this.basePath}/company/enrich`, {
            params: {
              api_key: this.apiKey,
              ...params,
            },
          })
            .then((data) => {
              if (data?.data?.status === 200) {
                resolve(data.data);
              }
            })
            .catch((error) => {
              reject(errorHandler(error.response.status));
            });
        }).catch((error) => {
          reject(error);
        });
      }),
      search: (params) => {
        console.log('coming soon');
      },
      cleaner: (params) => new Promise((resolve, reject) => {
        check(params, this.basePath, this.apiKey).then(() => {
          axios.get(`${this.basePath}/company/clean`, {
            params: {
              api_key: this.apiKey,
              ...params,
            },
          })
            .then((data) => {
              if (data?.data?.status === 200) {
                resolve(data.data);
              }
            })
            .catch((error) => {
              reject(errorHandler(error.response.status));
            });
        }).catch((error) => {
          reject(error);
        });
      }),
    };

    this.school = {
      cleaner: (params) => new Promise((resolve, reject) => {
        check(params, this.basePath, this.apiKey).then(() => {
          axios.get(`${this.basePath}/school/clean`, {
            params: {
              api_key: this.apiKey,
              ...params,
            },
          })
            .then((data) => {
              if (data?.data?.status === 200) {
                resolve(data.data);
              }
            })
            .catch((error) => {
              reject(errorHandler(error.response.status));
            });
        }).catch((error) => {
          reject(error);
        });
      }),
    };

    this.location = {
      cleaner: (params) => new Promise((resolve, reject) => {
        check(params, this.basePath, this.apiKey).then(() => {
          axios.get(`${this.basePath}/location/clean`, {
            params: {
              api_key: this.apiKey,
              ...params,
            },
          })
            .then((data) => {
              if (data?.data?.status === 200) {
                resolve(data.data);
              }
            })
            .catch((error) => {
              reject(errorHandler(error.response.status));
            });
        }).catch((error) => {
          reject(error);
        });
      }),
    };
  }
}

export default PDLJS;
