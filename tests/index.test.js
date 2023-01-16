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
  it(`Should Return Person Record for ${phone}`, (done) => {
    PDLJSClient.person.enrichment({ phone }).then((data) => {
      expect(data.status).to.equal(200);
      expect(data).to.be.a('object');
      done();
    }).catch((error) => {
      expect(error).to.be.a('object');
      done();
    });
  });

  it('Should Error for Person Enrichment', (done) => {
    PDLJSClient.person.enrichment().then((data) => {
      expect(data.status).to.equal(200);
      expect(data).to.be.a('object');
      done();
    }).catch((error) => {
      expect(error).to.be.a('object');
      done();
    });
  });
});

describe('Person Bulk Enrichment', () => {
  it(`Should Return Person Records for ${JSON.stringify(records)}`, (done) => {
    PDLJSClient.person.bulk.enrichment(records).then((data) => {
      expect(data.items.length).to.equal(2);
      expect(data.items).to.be.a('array');
      done();
    }).catch((error) => {
      expect(error).to.be.a('object');
      done();
    });
  });

  it('Should Error for Person Bulk Enrichment', (done) => {
    PDLJSClient.person.bulk.enrichment().then((data) => {
      expect(data.items.length).to.equal(2);
      expect(data.items).to.be.a('array');
      done();
    }).catch((error) => {
      expect(error).to.be.a('object');
      done();
    });
  });
});

describe('Person Identify', () => {
  it(`Should Return Person Record for ${phone}`, (done) => {
    PDLJSClient.person.identify({ phone: '4155688415' }).then((data) => {
      expect(data.status).to.equal(200);
      expect(data).to.be.a('object');
      done();
    }).catch((error) => {
      expect(error).to.be.a('object');
      done();
    });
  });

  it('Should Error for Person Identify', (done) => {
    PDLJSClient.person.identify().then((data) => {
      expect(data.status).to.equal(200);
      expect(data).to.be.a('object');
      done();
    }).catch((error) => {
      expect(error).to.be.a('object');
      done();
    });
  });
});

describe('Person Search', () => {
  it(`Should Return Person Records for ${personSQL}`, (done) => {
    PDLJSClient.person.search.sql({ searchQuery: personSQL, size: 10 }).then((data) => {
      expect(data.status).to.equal(200);
      expect(data).to.be.a('object');
      done();
    }).catch((error) => {
      expect(error).to.be.a('object');
      done();
    });
  });

  it('Should Error for Person Search (sql)', (done) => {
    PDLJSClient.person.search.sql().then((data) => {
      expect(data.status).to.equal(200);
      expect(data).to.be.a('object');
      done();
    }).catch((error) => {
      expect(error).to.be.a('object');
      done();
    });
  });

  it(`Should Return Person Records for ${JSON.stringify(personElastic)}`, (done) => {
    PDLJSClient.person.search.elastic({ searchQuery: personElastic, size: 10 }).then((data) => {
      expect(data.status).to.equal(200);
      expect(data).to.be.a('object');
      done();
    }).catch((error) => {
      expect(error).to.be.a('object');
      done();
    });
  });

  it('Should Error for Person Search (elastic)', (done) => {
    PDLJSClient.person.search.elastic().then((data) => {
      expect(data.status).to.equal(200);
      expect(data).to.be.a('object');
      done();
    }).catch((error) => {
      expect(error).to.be.a('object');
      done();
    });
  });
});

describe('Person Retrieve', () => {
  it(`Should Return Person Record for ${personID}`, (done) => {
    PDLJSClient.person.retrieve({ id: personID }).then((data) => {
      expect(data.status).to.equal(200);
      expect(data).to.be.a('object');
      done();
    }).catch((error) => {
      expect(error).to.be.a('object');
      done();
    });
  });

  it('Should Error for Person Retrieve', (done) => {
    PDLJSClient.person.retrieve().then((data) => {
      expect(data.status).to.equal(200);
      expect(data).to.be.a('object');
      done();
    }).catch((error) => {
      expect(error).to.be.a('object');
      done();
    });
  });
});

describe('Bulk Person Retrieve', () => {
  it(`Should Return Person Records for ${JSON.stringify(bulkRecords)}`, (done) => {
    PDLJSClient.person.bulk.retrieve(bulkRecords).then((data) => {
      expect(data.status).to.equal(200);
      expect(data).to.be.a('object');
      done();
    }).catch((error) => {
      expect(error).to.be.a('object');
      done();
    });
  });

  it('Should Error for Bulk Person Retrieve', (done) => {
    PDLJSClient.person.bulk.retrieve().then((data) => {
      expect(data.status).to.equal(200);
      expect(data).to.be.a('object');
      done();
    }).catch((error) => {
      expect(error).to.be.a('object');
      done();
    });
  });
});

describe('Company Enrichment', () => {
  it(`Should Return Company Record for ${website}`, (done) => {
    PDLJSClient.company.enrichment({ website }).then((data) => {
      expect(data.status).to.equal(200);
      expect(data).to.be.a('object');
      done();
    }).catch((error) => {
      expect(error).to.be.a('object');
      done();
    });
  });

  it('Should Error for Company Enrichment', (done) => {
    PDLJSClient.company.enrichment().then((data) => {
      expect(data.status).to.equal(200);
      expect(data).to.be.a('object');
      done();
    }).catch((error) => {
      expect(error).to.be.a('object');
      done();
    });
  });
});

describe('Company Search', () => {
  it(`Should Return Company Records for ${companySQL}`, (done) => {
    PDLJSClient.company.search.sql({ searchQuery: companySQL, size: 10 }).then((data) => {
      expect(data.status).to.equal(200);
      expect(data).to.be.a('object');
      done();
    }).catch((error) => {
      expect(error).to.be.a('object');
      done();
    });
  });

  it('Should Error for Company Search (sql)', (done) => {
    PDLJSClient.company.search.sql().then((data) => {
      expect(data.status).to.equal(200);
      expect(data).to.be.a('object');
      done();
    }).catch((error) => {
      expect(error).to.be.a('object');
      done();
    });
  });

  it(`Should Return Company Records for ${JSON.stringify(companyElastic)}`, (done) => {
    PDLJSClient.company.search.elastic({ searchQuery: companyElastic, size: 10 }).then((data) => {
      expect(data.status).to.equal(200);
      expect(data).to.be.a('object');
      done();
    }).catch((error) => {
      expect(error).to.be.a('object');
      done();
    });
  });

  it('Should Error for Company Search (elastic)', (done) => {
    PDLJSClient.company.search.elastic().then((data) => {
      expect(data.status).to.equal(200);
      expect(data).to.be.a('object');
      done();
    }).catch((error) => {
      expect(error).to.be.a('object');
      done();
    });
  });
});

describe('Autocomplete', () => {
  it(`Should Return Autocomplete Records for ${JSON.stringify(autocomplete)}`, (done) => {
    PDLJSClient.autocomplete(autocomplete).then((data) => {
      expect(data.status).to.equal(200);
      expect(data).to.be.a('object');
      done();
    }).catch((error) => {
      expect(error).to.be.a('object');
      done();
    });
  });

  it('Should Error for Autocomplete', (done) => {
    PDLJSClient.autocomplete().then((data) => {
      expect(data.status).to.equal(200);
      expect(data).to.be.a('object');
      done();
    }).catch((error) => {
      expect(error).to.be.a('object');
      done();
    });
  });
});

describe('Cleaner APIs', () => {
  it(`Should Return Company Cleaner Records for ${JSON.stringify(company)}`, (done) => {
    PDLJSClient.company.cleaner(company).then((data) => {
      expect(data.status).to.equal(200);
      expect(data).to.be.a('object');
      done();
    }).catch((error) => {
      expect(error).to.be.a('object');
      done();
    });
  });

  it('Should Error for Company Cleaner', (done) => {
    PDLJSClient.company.cleaner().then((data) => {
      expect(data.status).to.equal(200);
      expect(data).to.be.a('object');
      done();
    }).catch((error) => {
      expect(error).to.be.a('object');
      done();
    });
  });

  it(`Should Return Location Cleaner Records for ${JSON.stringify(location)}`, (done) => {
    PDLJSClient.location.cleaner(location).then((data) => {
      expect(data.status).to.equal(200);
      expect(data).to.be.a('object');
      done();
    }).catch((error) => {
      expect(error).to.be.a('object');
      done();
    });
  });

  it('Should Error for Location Cleaner', (done) => {
    PDLJSClient.location.cleaner().then((data) => {
      expect(data.status).to.equal(200);
      expect(data).to.be.a('object');
      done();
    }).catch((error) => {
      expect(error).to.be.a('object');
      done();
    });
  });

  it(`Should Return School Cleaner Records for ${JSON.stringify(school)}`, (done) => {
    PDLJSClient.school.cleaner(school).then((data) => {
      expect(data.status).to.equal(200);
      expect(data).to.be.a('object');
      done();
    }).catch((error) => {
      expect(error).to.be.a('object');
      done();
    });
  });

  it('Should Error for School Cleaner', (done) => {
    PDLJSClient.school.cleaner().then((data) => {
      expect(data.status).to.equal(200);
      expect(data).to.be.a('object');
      done();
    }).catch((error) => {
      expect(error).to.be.a('object');
      done();
    });
  });
});

describe('Skill API', () => {
  it(`Should Return Skill Records for ${JSON.stringify(skill)}`, (done) => {
    PDLJSClient.skill(skill).then((data) => {
      expect(data.status).to.equal(200);
      expect(data).to.be.a('object');
      done();
    }).catch((error) => {
      expect(error).to.be.a('object');
      done();
    });
  });

  it('Should Error for Skill', (done) => {
    PDLJSClient.skill().then((data) => {
      expect(data.status).to.equal(200);
      expect(data).to.be.a('object');
      done();
    }).catch((error) => {
      expect(error).to.be.a('object');
      done();
    });
  });
});

describe('Job Title API', () => {
  it(`Should Return Job Title Records for ${JSON.stringify(jobTitle)}`, (done) => {
    PDLJSClient.jobTitle(jobTitle).then((data) => {
      expect(data.status).to.equal(200);
      expect(data).to.be.a('object');
      done();
    }).catch((error) => {
      expect(error).to.be.a('object');
      done();
    });
  });

  it('Should Error for Job Title', (done) => {
    PDLJSClient.jobTitle().then((data) => {
      expect(data.status).to.equal(200);
      expect(data).to.be.a('object');
      done();
    }).catch((error) => {
      expect(error).to.be.a('object');
      done();
    });
  });
});

describe('Sandbox APIs', () => {
  it('Should Return Sandbox Person Record for { email: \'irussell@example.org\' }', (done) => {
    PDLJSClient.person.enrichment({ email: 'irussell@example.org', sandbox: true }).then((data) => {
      expect(data.status).to.equal(200);
      expect(data).to.be.a('object');
      done();
    }).catch((error) => {
      expect(error).to.be.a('object');
      done();
    });
  });

  it('Should Error for Sandbox Person Enrichment', (done) => {
    PDLJSClient.person.enrichment({ sandbox: true }).then((data) => {
      expect(data.status).to.equal(200);
      expect(data).to.be.a('object');
      done();
    }).catch((error) => {
      expect(error).to.be.a('object');
      done();
    });
  });

  it('Should Return Sandbox Person Records for "SELECT * FROM person WHERE location_country=\'mexico\';"', (done) => {
    PDLJSClient.person.search.sql({ searchQuery: "SELECT * FROM person WHERE location_country='mexico';", size: 10, sandbox: true }).then((data) => {
      expect(data.status).to.equal(200);
      expect(data).to.be.a('object');
      done();
    }).catch((error) => {
      expect(error).to.be.a('object');
      done();
    });
  });

  it('Should Error for Sandbox Person Search (sql)', (done) => {
    PDLJSClient.person.search.sql({ sandbox: true }).then((data) => {
      expect(data.status).to.equal(200);
      expect(data).to.be.a('object');
      done();
    }).catch((error) => {
      expect(error).to.be.a('object');
      done();
    });
  });

  it('Should Return Sandbox Person Records for { query: { bool: { must: [{term: {location_country: "mexico"}}] } } }', (done) => {
    PDLJSClient.person.search.elastic({ searchQuery: { query: { bool: { must: [{ term: { location_country: 'mexico' } }] } } }, size: 10, sandbox: true }).then((data) => {
      expect(data.status).to.equal(200);
      expect(data).to.be.a('object');
      done();
    }).catch((error) => {
      expect(error).to.be.a('object');
      done();
    });
  });

  it('Should Error for Sandbox Person Search (elastic)', (done) => {
    PDLJSClient.person.search.elastic({ sandbox: true }).then((data) => {
      expect(data.status).to.equal(200);
      expect(data).to.be.a('object');
      done();
    }).catch((error) => {
      expect(error).to.be.a('object');
      done();
    });
  });

  it('Should Return Sandbox Identify Person Records for { company: \'walmart\' }', (done) => {
    PDLJSClient.person.identify({ company: 'walmart', sandbox: true }).then((data) => {
      expect(data.status).to.equal(200);
      expect(data).to.be.a('object');
      done();
    }).catch((error) => {
      expect(error).to.be.a('object');
      done();
    });
  });

  it('Should Error for Sandbox Person Identify', (done) => {
    PDLJSClient.person.identify({ sandbox: true }).then((data) => {
      expect(data.status).to.equal(200);
      expect(data).to.be.a('object');
      done();
    }).catch((error) => {
      expect(error).to.be.a('object');
      done();
    });
  });
});
