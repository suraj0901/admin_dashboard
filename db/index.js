import { default as knex } from 'knex';
import knexfile from './knexfile.js';

export const knex = knex(knexfile[process.env.NODE_ENV]);
