import { AutoCompleteParams, AutoCompleteResponse, SearchParams } from './endpoints';

interface APISettings {
  apiKey: string;
  basePath?: string;
  version?: string;
}

interface Search {
  elastic: Function;
  sql: Function;
}

interface Person {
  enrichment: Function;
  search: Search;
  bulk: Function;
  identify: Function;
  retrieve: Function;
}

interface Company {
  enrichment: Function;
  search: Search;
  cleaner: Function;
}

interface School {
  cleaner: Function;
}

interface Location {
  cleaner: Function;
}

export type {
  APISettings, Person, Company, School, Location, SearchParams, AutoCompleteParams, AutoCompleteResponse,
};
