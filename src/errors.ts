import { AxiosError } from 'axios';
import { ErrorEndpoint } from './types/error-types';
import { BaseSearchParams } from './types/search-types';
import { AutoCompleteParams } from './types/autocomplete-types';
import { RetrieveParams } from './types/retrieve-types';
import { JobTitleParams } from './types/jobTitle-types';
import { SkillParams } from './types/skill-types';

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
    const validFields = ['company', 'country', 'industry', 'location', 'major', 'region', 'role', 'school', 'sub_role', 'skill', 'title'];
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

  if (endpoint === 'skill') {
    const { skill } = params as SkillParams;
    if (!skill) {
      error.message = 'Missing skill';
      error.status = 400;
      reject(error);
    }
  }

  if (!basePath) {
    error.message = 'Missing API Base Path';
    error.status = 400;
    reject(error);
  }

  if (!apiKey || apiKey.length < 36) {
    error.message = 'Invalid API Key';
    error.status = 401;
    reject(error);
  }

  resolve();
});

const errorHandler = (error: AxiosError) => {
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

    return ({
      status: statusCode,
      message: errorMessages[statusCode as keyof typeof errorMessages],
    });
  }

  return ({
    status: 500,
    message: errorMessages[500],
  });
};

export { check, errorHandler };
