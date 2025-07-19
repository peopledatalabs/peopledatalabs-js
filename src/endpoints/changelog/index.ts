import axios from 'axios';

import { check, errorHandler } from '../../errors.js';
import type { ChangelogParams, ChangelogResponse } from '../../types/changelog-types.js';
import { parseRateLimitingResponse } from '../../utils/api-utils.js';

export default (
  basePath: string,
  apiKey: string,
  params: ChangelogParams,
) => new Promise<ChangelogResponse>((resolve, reject) => {
  check(params, basePath, apiKey, null, 'changelog').then(() => {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const { currentVersion, fieldsUpdated, ids, originVersion, scroll_token, type } = params;

    const changelogParams = {
      originVersion,
      currentVersion,
      type: type || '',
      ids: ids || [],
      fields_updated: fieldsUpdated || [],
      scroll_token: scroll_token || null,
    };

    const headers = {
      'Accept-Encoding': 'gzip',
      'User-Agent': 'PDL-JS-SDK',
    };

    axios.get<ChangelogResponse>(`${basePath}/person/changelog`, {
      params: {
        api_key: apiKey,
        ...changelogParams,
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
