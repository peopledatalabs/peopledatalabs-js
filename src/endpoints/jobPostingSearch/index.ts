import axios from 'axios';

import { check, errorHandler } from '../../errors.js';
import { RequestOptions } from '../../types/api-types.js';
import { JobPostingSearchParams, JobPostingSearchResponse } from '../../types/jobPosting-types.js';
import { parseRateLimitingResponse } from '../../utils/api-utils.js';
import SDK_VERSION from '../../utils/sdk-version.js';

export default (
  basePath: string,
  apiKey: string,
  params: JobPostingSearchParams,
  options: RequestOptions = {},
) => new Promise<JobPostingSearchResponse>((resolve, reject) => {
  check(params, basePath, apiKey, null, 'jobPostingSearch').then(() => {
    const body = {
      size: 10,
      pretty: false,
      ...params,
    };

    const headers = {
      'Content-Type': 'application/json',
      'Accept-Encoding': 'gzip',
      'User-Agent': 'PDL-JS-SDK',
      'SDK-Version': SDK_VERSION,
      'X-Api-Key': apiKey,
    };

    axios.post<JobPostingSearchResponse>(`${basePath}/job_posting/search`, body, {
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
