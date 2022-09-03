import { default as knex } from 'knex';
import * as config from './config.js';

export default {
  init() {
    return knex(config[process.env.NODE_ENV]);
  },
};
