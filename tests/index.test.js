import { expect } from 'chai';
import dotenv from 'dotenv';
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

describe('Person Enrichment', () => {
  it(`Should Return Person Record for ${phone}`, (done) => {
    PDLJSClient.person.enrichment({ phone }).then((data) => {
      expect(data.status).to.equal(200);
      expect(data).to.be.a('object');
      done();
    }).catch((error) => {
      expect(error).to.be.a('string');
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
      expect(error).to.be.a('string');
    });
  });
});

describe('Person Bulk', () => {
  it(`Should Return Person Records for ${JSON.stringify(records)}`, (done) => {
    PDLJSClient.person.bulk(records).then((data) => {
      expect(data.items.length).to.equal(2);
      expect(data).to.be.a('array');
      done();
    }).catch((error) => {
      expect(error).to.be.a('string');
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
      expect(error).to.be.a('string');
      done();
    });
  });

  it(`Should Return Person Records for ${JSON.stringify(personElastic)}`, (done) => {
    PDLJSClient.person.search.elastic({ searchQuery: personElastic, size: 10 }).then((data) => {
      expect(data.status).to.equal(200);
      expect(data).to.be.a('object');
      done();
    }).catch((error) => {
      expect(error).to.be.a('string');
      done();
    });
  });
});

describe('Person Retrieve', () => {
  it(`Should Return Person Record for ${personID}`, (done) => {
    PDLJSClient.person.retrieve(personID).then((data) => {
      expect(data.status).to.equal(200);
      expect(data).to.be.a('object');
      done();
    }).catch((error) => {
      expect(error).to.be.a('string');
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
      expect(error).to.be.a('string');
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
      expect(error).to.be.a('string');
      done();
    });
  });

  it(`Should Return Company Records for ${JSON.stringify(companyElastic)}`, (done) => {
    PDLJSClient.company.search.elastic({ searchQuery: companyElastic, size: 10 }).then((data) => {
      expect(data.status).to.equal(200);
      expect(data).to.be.a('object');
      done();
    }).catch((error) => {
      expect(error).to.be.a('string');
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
      expect(error).to.be.a('string');
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
      expect(error).to.be.a('string');
      done();
    });
  });

  it(`Should Return Location Cleaner Records for ${JSON.stringify(location)}`, (done) => {
    PDLJSClient.location.cleaner(location).then((data) => {
      expect(data.status).to.equal(200);
      expect(data).to.be.a('object');
      done();
    }).catch((error) => {
      expect(error).to.be.a('string');
      done();
    });
  });

  it(`Should Return School Cleaner Records for ${JSON.stringify(school)}`, (done) => {
    PDLJSClient.school.cleaner(school).then((data) => {
      expect(data.status).to.equal(200);
      expect(data).to.be.a('object');
      done();
    }).catch((error) => {
      expect(error).to.be.a('string');
      done();
    });
  });
});
