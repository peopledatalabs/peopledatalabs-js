const check = (data, basePath, apiKey, type, search) => new Promise((resolve, reject) => {
  if (!data) reject(new Error(`Missing ${type || 'Params'}`));
  if (search) {
    const { searchType, searchQuery, size } = data;
    const tempST = searchType.toLowerCase();
    if (!data.searchType) {
      reject(new Error('Missing searchType'));
    } else if (!data.searchQuery) {
      reject(new Error('Missing searchQuery'));
    } else if (!data.size) {
      reject(new Error('Missing size'));
    } else if (data.searchType !== 'es' || data.searchType !== 'sql') {
      reject(new Error('Invalid searchType, must be SQL or ES'));
    }
  }
  if (!basePath || !basePath.includes('https://api.peopledatalabs.com')) reject(new Error('Invalid API Base Path'));
  if (!apiKey || apiKey.length !== 64) reject(new Error('Invalid API Key'));
  resolve();
});

const errorHandler = (code) => {
  const errorMessages = {
    400: 'Request contained either missing or invalid parameters',
    401: 'Request contained a missing or invalid key',
    402: 'Payment Required, You have hit your account maximum (all matches used)',
    404: 'No records were found matching your request',
    405: 'Request method is not allowed on the requested resource',
    429: 'An error occurred due to requests hitting the API too quick',
    500: 'The server encountered an unexpected condition which prevented it from fulfilling the request',
  };

  return (`${code} Error: ${errorMessages[code >= 500 && code < 600 ? 500 : code]}`);
};

export { check, errorHandler };
