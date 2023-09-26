import { Capsule, Company } from './types';

export interface Ceo_Query {
  company: Company;
}

export interface Capsules_Query {
  capsules: Capsule[];
}

export interface Capsule_Query {
  capsule: Capsule;
}
