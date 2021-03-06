// Update with your config settings.

require('dotenv').config()

// where is DATABASE_URL coming from?
const dbConnection = process.env.DATABASE_URL || localPgConnection

module.exports = {
	development : {
		client           : 'sqlite3',
		connection       : {
			filename : './data/database.sqlite3',
		},
		useNullAsDefault : true,
		migrations       : {
			directory : './data/migrations/',
		},
		seeds            : {
			directory : './data/seeds',
		},
		production       : {
			client     : 'pg',
			connection : dbConnection, // can be and object or a string
			pool       : {
				min : 2,
				max : 10,
			},
			migrations : {
				tableName : 'knex_migrations',
				directory : './db/migrations',
			},
			seeds      : {
				directory : './db/seeds',
			},
		},
	},
}
