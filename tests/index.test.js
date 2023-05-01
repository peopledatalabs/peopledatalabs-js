/* eslint-env mocha */

import { expect } from 'chai';
import dotenv from 'dotenv';

// eslint-disable-next-line import/extensions
import PDLJS from '../dist/index.m.js';

dotenv.config({ path: './.env.local' });

const PDLJSClient = new PDLJS({ apiKey: process.env.PDL_API_KEY });

const phone = '4155688415';

const records = {
  requests: [
    {
      params: {
        profile: ['linkedin.com/in/seanthorne'],
      },
    },
    {
      params: {
        profile: ['linkedin.com/in/randrewn'],
      },
    },
  ],
};

const personSQL = "SELECT * FROM person WHERE location_country='mexico' AND job_title_role='health'AND phone_numbers IS NOT NULL;";

const personElastic = {
  query: {
    bool: {
      must: [
        { term: { location_country: 'mexico' } },
        { term: { job_title_role: 'health' } },
        { exists: { field: 'phone_numbers' } },
      ],
    },
  },
};

const personID = 'qEnOZ5Oh0poWnQ1luFBfVw_0000';

const bulkRecords = {
  requests: [
    { id: 'qEnOZ5Oh0poWnQ1luFBfVw_0000' },
    { id: 'PzFD15NINdBWNULBBkwlig_0000' },
  ],
};

const website = 'peopledatalabs.com';

const companySQL = "SELECT * FROM company WHERE tags='big data' AND industry='financial services' AND location.country='united states';";

const companyElastic = {
  query: {
    bool: {
      must: [
        { term: { website: 'peopledatalabs.com' } },
      ],
    },
  },
};

const autocomplete = {
  field: 'skill',
  text: 'c++',
  size: 10,
};

const company = { name: 'peopledatalabs' };

const location = { location: '455 Market Street, San Francisco, California 94105, US' };

const school = { name: 'university of oregon' };

const skill = { skill: 'c++' };

const jobTitle = { jobTitle: 'software engineer' };

describe('Person Enrichment', () => {
  it(`Should Return Person Record for ${phone}`, async () => {
    try {
      const response = await PDLJSClient.person.enrichment({ phone });

      expect(response.status).to.equal(200);
      expect(response).to.be.a('object');
    } catch (error) {
      expect(error).to.be.a('object');
    }
  });

  it('Should Error for Person Enrichment', async () => {
    try {
      const response = await PDLJSClient.person.enrichment();

      expect(response.status).to.equal(200);
      expect(response).to.be.a('object');
    } catch (error) {
      expect(error).to.be.a('object');
    }
  });
});

describe('Person Bulk Enrichment', () => {
  it(`Should Return Person Records for ${JSON.stringify(records)}`, async () => {
    try {
      const response = await PDLJSClient.person.bulk.enrichment(records);

      expect(response.items.length).to.equal(2);
      expect(response.items).to.be.a('array');
    } catch (error) {
      expect(error).to.be.a('object');
    }
  });

  it('Should Error for Person Bulk Enrichment', async () => {
    try {
      const response = await PDLJSClient.person.bulk.enrichment();

      expect(response.items.length).to.equal(2);
      expect(response.items).to.be.a('array');
    } catch (error) {
      expect(error).to.be.a('object');
    }
  });
});

describe('Person Identify', () => {
  it(`Should Return Person Record for ${phone}`, async () => {
    try {
      const response = await PDLJSClient.person.identify({ phone });

      expect(response.status).to.equal(200);
      expect(response).to.be.a('object');
    } catch (error) {
      expect(error).to.be.a('object');
    }
  });

  it('Should Error for Person Identify', async () => {
    try {
      const response = await PDLJSClient.person.identify();

      expect(response.status).to.equal(200);
      expect(response).to.be.a('object');
    } catch (error) {
      expect(error).to.be.a('object');
    }
  });
});

describe('Person Search', () => {
  it(`Should Return Person Records for ${personSQL}`, async () => {
    try {
      const response = PDLJSClient.person.search.sql({ searchQuery: personSQL, size: 10 });

      expect(response.status).to.equal(200);
      expect(response).to.be.a('object');
    } catch (error) {
      expect(error).to.be.a('object');
    }
  });

  it('Should Error for Person Search (sql)', async () => {
    try {
      const response = PDLJSClient.person.search.sql();

      expect(response.status).to.equal(200);
      expect(response).to.be.a('object');
    } catch (error) {
      expect(error).to.be.a('object');
    }
  });

  it(`Should Return Person Records for ${JSON.stringify(personElastic)}`, async () => {
    try {
      const response = PDLJSClient.person.search.elastic({ searchQuery: personElastic, size: 10 });

      expect(response.status).to.equal(200);
      expect(response).to.be.a('object');
    } catch (error) {
      expect(error).to.be.a('object');
    }
  });

  it('Should Error for Person Search (elastic)', async () => {
    try {
      const response = PDLJSClient.person.search.elastic();

      expect(response.status).to.equal(200);
      expect(response).to.be.a('object');
    } catch (error) {
      expect(error).to.be.a('object');
    }
  });
});

describe('Person Retrieve', () => {
  it(`Should Return Person Record for ${personID}`, async () => {
    try {
      const response = await PDLJSClient.person.retrieve({ id: personID });

      expect(response.status).to.equal(200);
      expect(response).to.be.a('object');
    } catch (error) {
      expect(error).to.be.a('object');
    }
  });

  it('Should Error for Person Retrieve', async () => {
    try {
      const response = await PDLJSClient.person.retrieve();

      expect(response.status).to.equal(200);
      expect(response).to.be.a('object');
    } catch (error) {
      expect(error).to.be.a('object');
    }
  });
});

describe('Bulk Person Retrieve', () => {
  it(`Should Return Person Records for ${JSON.stringify(bulkRecords)}`, async () => {
    try {
      const response = await PDLJSClient.person.bulk.retrieve(bulkRecords);

      expect(response.status).to.equal(200);
      expect(response).to.be.a('object');
    } catch (error) {
      expect(error).to.be.a('object');
    }
  });

  it('Should Error for Bulk Person Retrieve', async () => {
    try {
      const response = await PDLJSClient.person.bulk.retrieve();

      expect(response.status).to.equal(200);
      expect(response).to.be.a('object');
    } catch (error) {
      expect(error).to.be.a('object');
    }
  });
});

describe('Company Enrichment', () => {
  it(`Should Return Company Record for ${website}`, async () => {
    try {
      const response = await PDLJSClient.company.enrichment({ website });

      expect(response.status).to.equal(200);
      expect(response).to.be.a('object');
    } catch (error) {
      expect(error).to.be.a('object');
    }
  });

  it('Should Error for Company Enrichment', async () => {
    try {
      const response = await PDLJSClient.company.enrichment();

      expect(response.status).to.equal(200);
      expect(response).to.be.a('object');
    } catch (error) {
      expect(error).to.be.a('object');
    }
  });
});

describe('Company Search', () => {
  it(`Should Return Company Records for ${companySQL}`, async () => {
    try {
      const response = await PDLJSClient.company.search.sql({ searchQuery: companySQL, size: 10 });

      expect(response.status).to.equal(200);
      expect(response).to.be.a('object');
    } catch (error) {
      expect(error).to.be.a('object');
    }
  });

  it('Should Error for Company Search (sql)', async () => {
    try {
      const response = await PDLJSClient.company.search.sql();

      expect(response.status).to.equal(200);
      expect(response).to.be.a('object');
    } catch (error) {
      expect(error).to.be.a('object');
    }
  });

  it(`Should Return Company Records for ${JSON.stringify(companyElastic)}`, async () => {
    try {
      const response = await PDLJSClient.company.search.elastic({ searchQuery: companyElastic, size: 10 });

      expect(response.status).to.equal(200);
      expect(response).to.be.a('object');
    } catch (error) {
      expect(error).to.be.a('object');
    }
  });

  it('Should Error for Company Search (elastic)', async () => {
    try {
      const response = await PDLJSClient.company.search.elastic();

      expect(response.status).to.equal(200);
      expect(response).to.be.a('object');
    } catch (error) {
      expect(error).to.be.a('object');
    }
  });
});

describe('Autocomplete', () => {
  it(`Should Return Autocomplete Records for ${JSON.stringify(autocomplete)}`, async () => {
    try {
      const response = await PDLJSClient.autocomplete(autocomplete);

      expect(response.status).to.equal(200);
      expect(response).to.be.a('object');
    } catch (error) {
      expect(error).to.be.a('object');
    }
  });

  it('Should Error for Autocomplete', async () => {
    try {
      const response = await PDLJSClient.autocomplete();

      expect(response.status).to.equal(200);
      expect(response).to.be.a('object');
    } catch (error) {
      expect(error).to.be.a('object');
    }
  });
});

describe('Cleaner APIs', () => {
  it(`Should Return Company Cleaner Records for ${JSON.stringify(company)}`, async () => {
    try {
      const response = await PDLJSClient.company.cleaner(company);

      expect(response.status).to.equal(200);
      expect(response).to.be.a('object');
    } catch (error) {
      expect(error).to.be.a('object');
    }
  });

  it('Should Error for Company Cleaner', async () => {
    try {
      const response = await PDLJSClient.company.cleaner();

      expect(response.status).to.equal(200);
      expect(response).to.be.a('object');
    } catch (error) {
      expect(error).to.be.a('object');
    }
  });

  it(`Should Return Location Cleaner Records for ${JSON.stringify(location)}`, async () => {
    try {
      const response = await PDLJSClient.location.cleaner(location);

      expect(response.status).to.equal(200);
      expect(response).to.be.a('object');
    } catch (error) {
      expect(error).to.be.a('object');
    }
  });

  it('Should Error for Location Cleaner', async () => {
    try {
      const response = await PDLJSClient.location.cleaner();

      expect(response.status).to.equal(200);
      expect(response).to.be.a('object');
    } catch (error) {
      expect(error).to.be.a('object');
    }
  });

  it(`Should Return School Cleaner Records for ${JSON.stringify(school)}`, async () => {
    try {
      const response = await PDLJSClient.school.cleaner(school);

      expect(response.status).to.equal(200);
      expect(response).to.be.a('object');
    } catch (error) {
      expect(error).to.be.a('object');
    }
  });

  it('Should Error for School Cleaner', async () => {
    try {
      const response = await PDLJSClient.school.cleaner();

      expect(response.status).to.equal(200);
      expect(response).to.be.a('object');
    } catch (error) {
      expect(error).to.be.a('object');
    }
  });
});

describe('Skill API', () => {
  it(`Should Return Skill Records for ${JSON.stringify(skill)}`, async () => {
    try {
      const response = await PDLJSClient.skill(skill);

      expect(response.status).to.equal(200);
      expect(response).to.be.a('object');
    } catch (error) {
      expect(error).to.be.a('object');
    }
  });

  it('Should Error for Skill', async () => {
    try {
      const response = await PDLJSClient.skill();

      expect(response.status).to.equal(200);
      expect(response).to.be.a('object');
    } catch (error) {
      expect(error).to.be.a('object');
    }
  });
});

describe('Job Title API', () => {
  it(`Should Return Job Title Records for ${JSON.stringify(jobTitle)}`, async () => {
    try {
      const response = await PDLJSClient.jobTitle(jobTitle);

      expect(response.status).to.equal(200);
      expect(response).to.be.a('object');
    } catch (error) {
      expect(error).to.be.a('object');
    }
  });

  it('Should Error for Job Title', async () => {
    try {
      const response = await PDLJSClient.jobTitle();

      expect(response.status).to.equal(200);
      expect(response).to.be.a('object');
    } catch (error) {
      expect(error).to.be.a('object');
    }
  });
});

describe('Sandbox APIs', () => {
  it('Should Return Sandbox Person Record for { email: \'irussell@example.org\' }', async () => {
    try {
      const response = await PDLJSClient.person.enrichment({ email: 'irussell@example.org', sandbox: true });

      expect(response.status).to.equal(200);
      expect(response).to.be.a('object');
    } catch (error) {
      expect(error).to.be.a('object');
    }
  });

  it('Should Error for Sandbox Person Enrichment', async () => {
    try {
      const response = await PDLJSClient.person.enrichment();

      expect(response.status).to.equal(200);
      expect(response).to.be.a('object');
    } catch (error) {
      expect(error).to.be.a('object');
    }
  });

  it('Should Return Sandbox Person Records for "SELECT * FROM person WHERE location_country=\'mexico\';"', async () => {
    try {
      const response = await PDLJSClient.person.search.sql({ searchQuery: 'SELECT * FROM person WHERE location_country=\'mexico\';', size: 10, sandbox: true });

      expect(response.status).to.equal(200);
      expect(response).to.be.a('object');
    } catch (error) {
      expect(error).to.be.a('object');
    }
  });

  it('Should Error for Sandbox Person Search (sql)', async () => {
    try {
      const response = await PDLJSClient.person.search.sql({ sandbox: true });

      expect(response.status).to.equal(200);
      expect(response).to.be.a('object');
    } catch (error) {
      expect(error).to.be.a('object');
    }
  });

  it('Should Return Sandbox Person Records for { query: { bool: { must: [{term: {location_country: "mexico"}}] } } }', async () => {
    try {
      const response = await PDLJSClient.person.search.elastic({ searchQuery: { query: { bool: { must: [{ term: { location_country: 'mexico' } }] } } }, size: 10, sandbox: true });

      expect(response.status).to.equal(200);
      expect(response).to.be.a('object');
    } catch (error) {
      expect(error).to.be.a('object');
    }
  });

  it('Should Error for Sandbox Person Search (elastic)', async () => {
    try {
      const response = await PDLJSClient.person.search.elastic({ sandbox: true });

      expect(response.status).to.equal(200);
      expect(response).to.be.a('object');
    } catch (error) {
      expect(error).to.be.a('object');
    }
  });

  it('Should Return Sandbox Identify Person Records for { email: \'irussell@example.org\' }', async () => {
    try {
      const response = await PDLJSClient.person.identify({ email: 'irussell@example.org', sandbox: true });

      expect(response.status).to.equal(200);
      expect(response).to.be.a('object');
    } catch (error) {
      expect(error).to.be.a('object');
    }
  });

  it('Should Error for Sandbox Person Identify', async () => {
    try {
      const response = await PDLJSClient.person.identify({ sandbox: true });

      expect(response.status).to.equal(200);
      expect(response).to.be.a('object');
    } catch (error) {
      expect(error).to.be.a('object');
    }
  });
});
