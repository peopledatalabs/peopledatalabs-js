/* eslint no-console: "off" */

import dotenv from 'dotenv';
import PDLJS from 'peopledatalabs';

dotenv.config({ path: '../.env.local' });

const PDLJSClient = new PDLJS({ apiKey: process.env.PDL_API_KEY });

// Person APIs

PDLJSClient.person.enrichment({ phone: '4155688415' }).then((data) => {
  console.log(data);
}).catch((error) => {
  console.log(error);
});

PDLJSClient.person.enrichmentPreview({ phone: '4155688415' }).then((data) => {
  console.log(data);
}).catch((error) => {
  console.log(error);
});

PDLJSClient.person.identify({ phone: '4155688415' }).then((data) => {
  console.log(data);
}).catch((error) => {
  console.log(error);
});

const bulkEnrichmentRecords = {
  requests: [
    { params: { profile: ['linkedin.com/in/seanthorne'] } },
    { params: { profile: ['linkedin.com/in/randrewn'] } },
  ],
};

PDLJSClient.person.bulk.enrichment(bulkEnrichmentRecords).then((data) => {
  console.log(data.items);
}).catch((error) => {
  console.log(error);
});

PDLJSClient.person.search.sql({
  searchQuery: "SELECT * FROM person WHERE location_country='mexico' AND job_title_role='health'AND phone_numbers IS NOT NULL;",
  size: 10,
}).then((data) => {
  console.log(data);
}).catch((error) => {
  console.log(error);
});

PDLJSClient.person.search.elastic({
  searchQuery: {
    query: {
      bool: {
        must: [{ term: { job_company_website: 'peopledatalabs.com' } }],
      },
    },
  },
  size: 10,
}).then((data) => {
  console.log(data);
}).catch((error) => {
  console.log(error);
});

// Company APIs

PDLJSClient.company.enrichment({ website: 'peopledatalabs.com' }).then((data) => {
  console.log(data);
}).catch((error) => {
  console.log(error);
});

const bulkCompanyEnrichmentRecords = {
  requests: [
    { params: { profile: ['linkedin.com/company/peopledatalabs'] } },
    { params: { profile: ['linkedin.com/in/apple'] } },
  ],
};

PDLJSClient.company.bulk.enrichment(bulkCompanyEnrichmentRecords).then((data) => {
  console.log(data.items);
}).catch((error) => {
  console.log(error);
});

PDLJSClient.company.search.sql({
  searchQuery: "SELECT * FROM company WHERE website = 'peopledatalabs.com';",
  size: 10,
}).then((data) => {
  console.log(data);
}).catch((error) => {
  console.log(error);
});

PDLJSClient.company.search.elastic({
  searchQuery: {
    query: {
      bool: {
        must: [{ term: { website: 'peopledatalabs.com' } }],
      },
    },
  },
  size: 10,
}).then((data) => {
  console.log(data);
}).catch((error) => {
  console.log(error);
});

// IP APIs

PDLJSClient.ip({ ip: '72.212.42.169' }).then((data) => {
  console.log(data);
}).catch((error) => {
  console.log(error);
});

// Supporting APIs

PDLJSClient.autocomplete({
  field: 'skill',
  text: 'c++',
  size: 10,
}).then((data) => {
  console.log(data);
}).catch((error) => {
  console.log(error);
});

PDLJSClient.company.cleaner({ name: 'peopledatalabs' }).then((data) => {
  console.log(data);
}).catch((error) => {
  console.log(error);
});

PDLJSClient.location.cleaner({ location: '455 Market Street, San Francisco, California 94105, US' }).then((data) => {
  console.log(data);
}).catch((error) => {
  console.log(error);
});

PDLJSClient.school.cleaner({ name: 'university of oregon' }).then((data) => {
  console.log(data);
}).catch((error) => {
  console.log(error);
});

PDLJSClient.jobTitle({ jobTitle: 'software engineer' }).then((data) => {
  console.log(data);
}).catch((error) => {
  console.log(error);
});

PDLJSClient.skill({ skill: 'c++' }).then((data) => {
  console.log(data);
}).catch((error) => {
  console.log(error);
});

// Sandbox APIs

PDLJSClient.person.enrichment({ email: 'irussell@example.org', sandbox: true }).then((data) => {
  console.log(data);
}).catch((error) => {
  console.log(error);
});

PDLJSClient.person.search.sql({
  searchQuery: "SELECT * FROM person WHERE location_country='mexico';",
  size: 10,
  sandbox: true,
}).then((data) => {
  console.log(data);
}).catch((error) => {
  console.log(error);
});

PDLJSClient.person.identify({ company: 'walmart', sandbox: true }).then((data) => {
  console.log(data);
}).catch((error) => {
  console.log(error);
});
