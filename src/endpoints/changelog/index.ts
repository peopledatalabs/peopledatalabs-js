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

    const changelogParams: any = {
      origin_version: originVersion || null,
      current_version: currentVersion || null,
    };

    if (type) changelogParams.type = type;
    if (ids) changelogParams.ids = ids;
    if (fieldsUpdated) changelogParams.fields_updated = fieldsUpdated;
    if (scroll_token) changelogParams.scroll_token = scroll_token;

    const headers = {
      'Accept-Encoding': 'gzip',
      'User-Agent': 'PDL-JS-SDK',
      'X-Api-Key': apiKey,
    };

    axios.post<ChangelogResponse>(`${basePath}/person/changelog`, changelogParams, {
      headers,
    }).then((response) => {
      if (response?.status === 200) {
        resolve(parseRateLimitingResponse(response));
      }
    }).catch((error) => {
      reject(errorHandler(error));
    });
  }).catch((error) => {
    reject(error);
  });
});
