// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
export const development = {
  client: 'sqlite3',
  connection: {
    filename: './db.sqlite',
  },
  migrations: {
    directory: 'migrations',
    tableName: 'knex_migrations',
    stub: 'model.js',
  },
  useNullAsDefault: true,
};
