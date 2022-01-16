<p align="center">
<img src="https://i.imgur.com/S7DkZtr.png" width="250" alt="People Data Labs Logo">
</p>
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

PDLJSClient.personEnrich({ enrichmentParams }).then((data) => {
  console.log(data);
}).catch((error) => {
  console.log(error);
});

PDLJSClient.companyEnrich({ enrichmentParams }).then((data) => {
  console.log(data);
}).catch((error) => {
  console.log(error);
});

PDLJSClient.identify({ identifyParams }).then((data) => {
  console.log(data);
}).catch((error) => {
  console.log(error);
});

// Supporting APIs

PDLJSClient.personRetrieve(personID).then((data) => {
  console.log(data);
}).catch((error) => {
  console.log(error);
});

PDLJSClient.companyCleaner({ cleanerParams }).then((data) => {
  console.log(data);
}).catch((error) => {
  console.log(error);
});

PDLJSClient.locationCleaner({ cleanerParams }).then((data) => {
  console.log(data);
}).catch((error) => {
  console.log(error);
});

PDLJSClient.schoolCleaner({ cleanerParams }).then((data) => {
  console.log(data);
}).catch((error) => {
  console.log(error);
});

// Coming Soon

PDLJSClient.bulkPersonEnrich([{ enrichmentParams1 }, { enrichmentParams2 }]).then((data) => {
  console.log(data);
}).catch((error) => {
  console.log(error);
});

PDLJSClient.personSearch({ searchParams }).then((data) => {
  console.log(data);
}).catch((error) => {
  console.log(error);
});

PDLJSClient.companySearch({ searchParams }).then((data) => {
  console.log(data);
}).catch((error) => {
  console.log(error);
});
```
