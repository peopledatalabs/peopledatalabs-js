import { AxiosError } from 'axios';

import { AutoCompleteParams } from './types/autocomplete-types.js';
import { ChangelogParams } from './types/changelog-types.js';
import { ErrorEndpoint, PdlError } from './types/error-types.js';
import { IPParams } from './types/ip-types.js';
import { JobTitleParams } from './types/jobTitle-types.js';
import { RetrieveParams } from './types/retrieve-types.js';
import { BaseSearchParams } from './types/search-types.js';
import { parseRateLimitingResponse } from './utils/api-utils.js';

const check = (
  params: unknown,
  basePath: string,
  apiKey: string,
  type: string | null,
  endpoint: ErrorEndpoint,
) => new Promise<void>((resolve, reject) => {
  const error: { message?: string, status?: number } = { };

  if (!params) {
    error.message = `Missing ${type || 'Params'}`;
    error.status = 400;
    reject(error);
  }

  if (endpoint === 'search') {
    const { searchQuery } = params as BaseSearchParams;
    if (!searchQuery) {
      error.message = 'Missing searchQuery';
      error.status = 400;
      reject(error);
    }
  }

  if (endpoint === 'changelog') {
    const { currentVersion, originVersion } = params as ChangelogParams;
    if (!originVersion || !currentVersion) {
      error.message = 'Missing originVersion or currentVersion';
      error.status = 400;
      reject(error);
    }
  }

  if (endpoint === 'retrieve') {
    const { id } = params as RetrieveParams;
    if (!id) {
      error.message = 'Missing id';
      error.status = 400;
      reject(error);
    }
  }

  if (endpoint === 'autocomplete') {
    const { field } = params as AutoCompleteParams;
    const validFields = ['all_location', 'class', 'company', 'country', 'industry', 'location', 'location_name', 'major', 'region', 'role', 'school', 'sub_role', 'skill', 'title'];
    if (!field) {
      error.message = 'Missing field';
      error.status = 400;
      reject(error);
    } else if (validFields.indexOf(field) === -1) {
      error.message = `field should be one of: ${validFields}`;
      error.status = 400;
      reject(error);
    }
  }

  if (endpoint === 'jobTitle') {
    const { jobTitle } = params as JobTitleParams;
    if (!jobTitle) {
      error.message = 'Missing jobTitle';
      error.status = 400;
      reject(error);
    }
  }

  if (endpoint === 'ip') {
    const { ip } = params as IPParams;
    if (!ip) {
      error.message = 'Missing ip';
      error.status = 400;
      reject(error);
    }
  }

  if (!basePath) {
    error.message = 'Missing API Base Path';
    error.status = 400;
    reject(error);
  }

  if (!apiKey || apiKey.length !== 64) {
    error.message = 'Invalid API Key';
    error.status = 401;
    reject(error);
  }

  resolve();
});

const errorHandler = (error: AxiosError): PdlError => {
  const errorMessages = {
    400: 'Request contained either missing or invalid parameters',
    401: 'Request contained a missing or invalid key',
    402: 'Payment Required, You have hit your account maximum (all matches used)',
    404: 'No records were found matching your request',
    405: 'Request method is not allowed on the requested resource',
    429: 'An error occurred due to requests hitting the API too quick',
    500: 'The server encountered an unexpected condition which prevented it from fulfilling the request',
  };

  if (error.response) {
    const { status } = error.response;
    const statusCode = status >= 500 && status < 600 ? 500 : status;
    const { rateLimit } = parseRateLimitingResponse(error.response);

    return ({
      status: statusCode,
      message: errorMessages[statusCode as keyof typeof errorMessages],
      rateLimit,
    });
  }

  return ({
    status: 500,
    message: errorMessages[500],
  });
};

export { check, errorHandler };
