import axios from 'axios';

import packageJSON from '../../../package.json';
import { check, errorHandler } from '../../errors.js';
import { JobTitleParams, JobTitleResponse } from '../../types/jobTitle-types.js';
import { parseRateLimitingResponse } from '../../utils/api-utils.js';

export default (
  basePath: string,
  apiKey: string,
  params: JobTitleParams,
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
      'SDK-Version': packageJSON.version,
    };

    axios.get<JobTitleResponse>(`${basePath}/job_title/enrich`, {
      params: {
        api_key: apiKey,
        ...jobTitleParams,
      },
      headers,
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
