<p align="center">
<img src="https://i.imgur.com/S7DkZtr.png" width="250" alt="People Data Labs Logo">
</p>
<h1 align="center">People Data Labs JS Library</h1>
<p align="center">
A tiny, universal client for the People Data Labs API.
</p>

<div>
<a href="https://www.npmjs.com/package/peopledatalabs"><img src="https://img.shields.io/npm/v/peopledatalabs" alt="peopledatalabs"></a>
<a href="https://unpkg.com/peopledatalabs-js"><img src="https://img.badgesize.io/https://unpkg.com/peopledatalabs@1.0.0/dist/index.js?compression=gzip" alt="gzip size"></a>
<a href="https://unpkg.com/peopledatalabs"><img src="https://img.badgesize.io/https://unpkg.com/peopledatalabs@1.0.0/dist/index.js?compression=brotli" alt="brotli size"></a>
</div>

## ✨ Features:
- Tiny <1KB size gzip
- Works in Node.js and in Browser

## 🔧 Installation

```bash
npm i peopledatalabs
```

## 🌐 Usage

Import `peopledatalabs` module in your project and initialize it with your [apiKey](https://www.peopledatalabs.com).

```js
import PDLJS from 'peopledatalabs'

const PDLJSClient = new PDLJS({ apiKey: '%apiKey%' })

// Major APIs

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

const records = {
  requests: [
    {
      params: {
        profile: ['linkedin.com/in/seanthorne']
      }
    },
    {
      params: {
        profile: ['linkedin.com/in/randrewn']
      }
    }
  ]
};

PDLJSClient.person.bulk(records).then((data) => {
  console.log(data);
}).catch((error) => {
  console.log(error);
});

// Supporting APIs

PDLJSClient.person.retrieve('qEnOZ5Oh0poWnQ1luFBfVw_0000').then((data) => {
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

// Coming Soon

PDLJSClient.person.search({ searchParams }).then((data) => {
  console.log(data);
}).catch((error) => {
  console.log(error);
});

PDLJSClient.company.search({ searchParams }).then((data) => {
  console.log(data);
}).catch((error) => {
  console.log(error);
});
```
