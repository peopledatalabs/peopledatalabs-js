import axios from 'axios';

import { check, errorHandler } from '../../errors.js';
import { RequestOptions } from '../../types/api-types.js';
import { JobTitleParams, JobTitleResponse } from '../../types/jobTitle-types.js';
import { parseRateLimitingResponse } from '../../utils/api-utils.js';
import SDK_VERSION from '../../utils/sdk-version.js';

export default (
  basePath: string,
  apiKey: string,
  params: JobTitleParams,
  options: RequestOptions = {},
) => new Promise<JobTitleResponse>((resolve, reject) => {
  check(params, basePath, apiKey, null, 'jobTitle').then(() => {
    const {
      jobTitle, pretty,
    } = params;

    const jobTitleParams = {
      job_title: jobTitle,
      pretty: pretty || false,
    };

    const headers = {
      'Accept-Encoding': 'gzip',
      'User-Agent': 'PDL-JS-SDK',
      'SDK-Version': SDK_VERSION,
    };

    axios.get<JobTitleResponse>(`${basePath}/job_title/enrich`, {
      params: {
        api_key: apiKey,
        ...jobTitleParams,
      },
      headers,
      ...options,
    }).then((response) => {
      if (response?.data?.status === 200) {
        resolve(parseRateLimitingResponse(response));
      }
    }).catch((error) => {
      reject(errorHandler(error));
    });
  }).catch((error) => {
    reject(error);
  });
});
