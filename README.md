<p align="center">
<img src="https://i.imgur.com/S7DkZtr.png" width="250" alt="People Data Labs Logo">
</p>
<h1 align="center">People Data Labs JS Library</h1>
<p align="center">
A tiny, universal JS client for the People Data Labs API.
</p>

<div>
<a href="https://www.npmjs.com/package/peopledatalabs"><img src="https://img.shields.io/npm/v/peopledatalabs" alt="peopledatalabs"></a>
<a href="https://unpkg.com/peopledatalabs"><img src="https://img.badgesize.io/https://unpkg.com/peopledatalabs/dist/index.cjs?compression=gzip" alt="gzip size"></a>
<a href="https://unpkg.com/peopledatalabs"><img src="https://img.badgesize.io/https://unpkg.com/peopledatalabs/dist/index.cjs?compression=brotli" alt="brotli size"></a>
</div>


## ✨ Features:
- Tiny <2KB size gzip
- Works in Node.js and in Browser
- Supports all People Data Labs API endpoints

## Table of Contents
- [✨ Features:](#-features)
- [Table of Contents](#table-of-contents)
- [🔧 Installation <a name="installation"></a>](#-installation-)
- [🌐 Usage <a name="usage"></a>](#-usage-)
- [🌐 Endpoints <a name="endpoints"></a>](#-endpoints-)
- [📘 Documentation <a name="installation"></a>](#-documentation-)
    - [**Special Note about Search API Support** <a name="special-note"></a>](#special-note-about-search-api-support-)


## 🔧 Installation <a name="installation"></a>

```bash
npm i peopledatalabs
```

## 🌐 Usage <a name="usage"></a>

First, create the PDLJS client:
```js
import PDLJS from 'peopledatalabs';

PDLJSClient = PDLJS({“apiKey”: “YOUR API KEY”})
```

Then, send requests to any PDL API Endpoint:

**Getting Person Data**
```js
// By Enrichment
PDLJSClient.person.enrichment({ phone: '4155688415' }).then((data) => {
  console.log(data);
}).catch((error) => {
  console.log(error);
});

// By Search (SQL)
const sqlQuery = "SELECT * FROM person WHERE location_country='mexico' AND job_title_role='health'AND phone_numbers IS NOT NULL;"

PDLJSClient.person.search.sql({ searchQuery: sqlQuery, size: 10 }).then((data) => {
  console.log(data['total']);
}).catch((error) => {
  console.log(error);
});

// By Search (Elasticsearch)
const esQuery = {
  query: {
    bool: {
      must:[
        {term: {location_country: "mexico"}}, 
        {term: {job_title_role: "health"}}, 
        {exists: {field: "phone_numbers"}}
      ]
    }
  }
}

PDLJSClient.person.search.elastic({ searchQuery: esQuery, size: 10 }).then((data) => {
  console.log(data['total']);
}).catch((error) => {
  console.log(error);
});

// By PDL_ID
PDLJSClient.person.retrieve('qEnOZ5Oh0poWnQ1luFBfVw_0000').then((data) => {
  console.log(data);
}).catch((error) => {
  console.log(error);
});

// By Fuzzy Enrichment
PDLJSClient.person.identify({ name: 'sean thorne' }).then((data) => {
  console.log(data);
}).catch((error) => {
  console.log(error);
});
```

**Getting Company Data**
```js
// By Enrichment
PDLJSClient.company.enrichment({ website: 'peopledatalabs.com' }).then((data) => {
  console.log(data);
}).catch((error) => {
  console.log(error);
});

// By Search (SQL)
const sqlQuery = "SELECT * FROM company WHERE tags='big data' AND industry='financial services' AND location.country='united states';"

PDLJSClient.company.search.sql({ searchQuery: sqlQuery, size: 10 }).then((data) => {
  console.log(data['total']);
}).catch((error) => {
  console.log(error);
});

// By Search (Elasticsearch)
const esQuery = {
  query: {
    bool: {
      must:[
        {term: {tags: "big data"}}, 
        {term: {industry: "financial services"}}, 
        {term: {location_country: "united states"}}
      ]
    }
  }
}

PDLJSClient.company.search.elastic({ searchQuery: esQuery, size: 10 }).then((data) => {
  console.log(data['total']);
}).catch((error) => {
  console.log(error);
});

```

**Using Supporting APIs**
```js
// Get Autocomplete Suggestions
PDLJSClient.autocomplete({ field: 'title', text: 'full', size: 10 }).then((data) => {
  console.log(data);
}).catch((error) => {
  console.log(error);
});


// Clean Raw Company Strings
PDLJSClient.company.cleaner({ name: 'peOple DaTa LabS' }).then((data) => {
  console.log(data);
}).catch((error) => {
  console.log(error);
});

// Clean Raw Location Strings
PDLJSClient.location.cleaner({ location: '455 Market Street, San Francisco, California 94105, US' }).then((data) => {
  console.log(data);
}).catch((error) => {
  console.log(error);
});

// Clean Raw School Strings
PDLJSClient.school.cleaner({ name: 'university of oregon' }).then((data) => {
  console.log(data);
}).catch((error) => {
  console.log(error);
});

```

## 🌐 Endpoints <a name="endpoints"></a>

**Person Endpoints**
| API Endpoint | PDLJS Function |
|-|-|
| [Person Enrichment API](https://docs.peopledatalabs.com/docs/enrichment-api) | `PDLJS.person.enrichment(...params)` |
| [Person Search API](https://docs.peopledatalabs.com/docs/search-api) | SQL: `PDLJS.person.search.sql(...params)` <br/> Elasticsearch: `PDLJS.person.search.elastic(...params)`|
| [Person Retrieve API](https://docs.peopledatalabs.com/docs/person-retrieve-api) | SQL: `PDLJS.person.retrieve(...params)` |
| [Person Identify API](https://docs.peopledatalabs.com/docs/identify-api) | SQL: `PDLJS.person.identify(...params)` |

**Company Endpoints**
| API Endpoint | PDLJS Function |
|-|-|
| [Company Enrichment API](https://docs.peopledatalabs.com/docs/company-enrichment-api) | `PDLJS.company.enrichment(...params)` |
| [Company Search API](https://docs.peopledatalabs.com/docs/company-search-api) | SQL: `PDLJS.company.search.sql(...params)` <br/> Elasticsearch: `PDLJS.company.search.elastic(...params)`|

**Supporting Endpoints**
| API Endpoint | PDLJS Function |
|-|-|
| [Autocomplete API](https://docs.peopledatalabs.com/docs/autocomplete-api) | `PDLJS.person.enrichment(...params)` |
| [Company Cleaner API](https://docs.peopledatalabs.com/docs/cleaner-apis#companyclean) | SQL: `PDLJS.person.search.sql(...params)` <br/> Elasticsearch: `PDLJS.person.search.elastic(...params)`|
| [Location Cleaner API](https://docs.peopledatalabs.com/docs/cleaner-apis#locationclean) | SQL: `PDLJS.person.retrieve(...params)` |
| [School Cleaner API](https://docs.peopledatalabs.com/docs/cleaner-apis#schoolclean) | SQL: `PDLJS.person.identify(...params)` |


## 📘 Documentation <a name="installation"></a>

All of our API endpoints are documented at: https://docs.peopledatalabs.com/

These docs describe the supported input parameters, output responses and also provide additional technical context. 

As illustrated in the [Endpoints]() section above, each of our API endpoints is mapped to a specific method in the PDLJS class.  For each of these class methods, **all function inputs are mapped as input parameters to the respective API endpoint**, meaning that you can use the API documentation linked above to determine the input parameters for each endpoint. 

As an example:

`PDLJS.person.identify(name=”sean thorne”)` is **valid** because `name` is a [supported input parameter to the Person Identify API]().

Conversely, `PDLJS.person.identify(fake_parameter=”anything”)` is **invalid** because `fake_parameter` is not an input parameter to the Person Identify API. 


#### **Special Note about Search API Support** <a name="special-note"></a>

Our Person Search API and Company Search API endpoints both support two types of query syntax: you can construct search queries using either `SQL` or `Elasticsearch` syntax. 

In the PDLJS class, the person and company search functions are broken out into two syntax-specific methods as follows:
| Data Type | Search Query Syntax | Function |
| -- | -- | -- |
| Person | SQL | `PDLJS.person.search.sql(...params)` |
| Person | Elasticsearch | `PDLJS.person.search.elastic(...params)` | 
| Company | SQL | `PDLJS.company.search.sql(...params)` |
| Company | Elasticsearch | `PDLJS.company.search.elastic(...params)` | 

You can pass your query to these methods using the special `searchQuery` function argument, as shown in the following example:

```js
const sqlQuery = "SELECT * FROM company WHERE tags='big data' AND industry='financial services' AND location.country='united states';"
 
PDLJSClient.company.search.sql({ searchQuery: sqlQuery, size: 10 }).then((data) => {
 console.log(data['total']);
}).catch((error) => {
 console.log(error);
});
```
