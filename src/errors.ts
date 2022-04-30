import { AxiosError } from 'axios';
import { ErrorEndpoint } from './types/error-types';
import { BaseSearchParams } from './types/search-types';
import { AutoCompleteParams } from './types/autocomplete-types';

const check = (
  params: unknown,
  basePath: string,
  apiKey: string,
  type: string | null,
  endpoint: ErrorEndpoint,
) => new Promise<void>((resolve, reject) => {
  if (!params) reject(new Error(`Missing ${type || 'Params'}`));
  if (endpoint === 'search') {
    const { searchQuery } = params as BaseSearchParams;
    if (!searchQuery) {
      reject(new Error('Missing searchQuery'));
    }
  }
  if (endpoint === 'autocomplete') {
    const { field } = params as AutoCompleteParams;
    const validFields = ['company', 'country', 'industry', 'location', 'major', 'region', 'role', 'school', 'sub_role', 'skill', 'title'];
    if (!field) {
      reject(new Error('Missing field'));
    } else if (validFields.indexOf(field) === -1) {
      reject(new Error(`field should be one of: ${validFields}`));
    }
  }
  if (!basePath) reject(new Error('Invalid API Base Path'));
  if (!apiKey || apiKey.length !== 64) reject(new Error('Invalid API Key'));
  resolve();
});

const errorHandler = (error: AxiosError) => {
  if (error.response) {
    const { status } = error.response;

    const errorMessages = {
      400: 'Request contained either missing or invalid parameters',
      401: 'Request contained a missing or invalid key',
      402: 'Payment Required, You have hit your account maximum (all matches used)',
      404: 'No records were found matching your request',
      405: 'Request method is not allowed on the requested resource',
      429: 'An error occurred due to requests hitting the API too quick',
      500: 'The server encountered an unexpected condition which prevented it from fulfilling the request',
    };

    return ({
      status: status >= 500 && status < 600 ? 500 : status,
      // eslint-disable-next-line max-len
      message: errorMessages[status >= 500 && status < 600 ? 500 : status as keyof typeof errorMessages],
    });
  }

  return ({
    status: 500,
    message: error.message,
  });
};

export { check, errorHandler };
