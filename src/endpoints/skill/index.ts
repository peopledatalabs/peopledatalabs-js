import axios from 'axios';

import { check, errorHandler } from '../../errors.js';
import { SkillParams, SkillResponse } from '../../types/skill-types.js';
import { parseRateLimitingResponse } from '../../utils/api-utils.js';

export default (
  basePath: string,
  apiKey: string,
  params: SkillParams,
) => new Promise<SkillResponse>((resolve, reject) => {
  check(params, basePath, apiKey, null, 'skill').then(() => {
    const {
      pretty, skill,
    } = params;

    const skillParams = {
      skill,
      pretty: pretty || false,
    };

    const headers = {
      'Accept-Encoding': 'gzip',
      'User-Agent': 'PDL-JS-SDK',
    };

    axios.get<SkillResponse>(`${basePath}/skill/enrich`, {
      params: {
        api_key: apiKey,
        ...skillParams,
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
