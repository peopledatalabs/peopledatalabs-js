import PDLJS from '../dist/index.cjs';

const PDLJSClient = new PDLJS({ apiKey: '%apiKey%' });

PDLJSClient.person.enrichment({ phone: '4155688415' }).then((data) => {
  console.log(data);
}).catch((error) => {
  console.log(error);
});

PDLJSClient.company.enrichment({ website: 'peopledatalabs.com' }).then((data) => {
  console.log(data);
}).catch((error) => {
  console.log(error);
});

PDLJSClient.person.identify({ phone: '4155688415' }).then((data) => {
  console.log(data);
}).catch((error) => {
  console.log(error);
});

PDLJSClient.person.retrieve('qEnOZ5Oh0poWnQ1luFBfVw_0000').then((data) => {
  console.log(data);
}).catch((error) => {
  console.log(error);
});

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

PDLJSClient.person.bulk(records).then((data) => {
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
