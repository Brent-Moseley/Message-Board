/**
 * Global adapter config
 * 
 * The `adapters` configuration object lets you create different global "saved settings"
 * that you can mix and match in your models.  The `default` option indicates which 
 * "saved setting" should be used if a model doesn't have an adapter specified.
 *
 * Keep in mind that options you define directly in your model definitions
 * will override these settings.
 *
 * For more information on adapter configuration, check out:
 * http://sailsjs.org/#documentation
 */

module.exports.adapters = {

  'default': 'mongo',

  // sails v.0.9.0
  // https://github.com/balderdashy/sails-mongo
  // http://sailsjs.org/#!documentation/Database-Support
  // http://sailsjs.org/#!documentation/models
  mongo: {
    // module   : 'sails-mongo',
    // host     : 'mongodb://<default>:<default>@mongo.onmodulus.net:27017/owuxi7rA',
    // port     : 27017,
    // user     : 'default',
    // password : 'default',
    // database : 'message_board'
    module   : 'sails-mongo',
    url      : 'mongodb://default:default@mongo.onmodulus.net:27017/owuxi7rA',

  },

  // Local:
  // mongo: {
  //   module   : 'sails-mongo',
  //   host     : 'localhost',
  //   port     : 27017,
  //   //user     : 'username',
  //   //password : 'password',
  //   database : 'message_board'
  // },

  // Modulus environment variables:  https://modulus.io/project/10516/admin
  // Persistent adapter for DEVELOPMENT ONLY
  // (data is preserved when the server shuts down)
  disk: {
    module: 'sails-disk'
  },

  // MySQL is the world's most popular relational database.
  // Learn more: http://en.wikipedia.org/wiki/MySQL
  myLocalMySQLDatabase: {

    module: 'sails-mysql',
    host: 'YOUR_MYSQL_SERVER_HOSTNAME_OR_IP_ADDRESS',
    user: 'YOUR_MYSQL_USER',
    // Psst.. You can put your password in config/local.js instead
    // so you don't inadvertently push it up if you're using version control
    password: 'YOUR_MYSQL_PASSWORD', 
    database: 'YOUR_MYSQL_DB'
  }
};

// Instead of worrying about friends, who is a friend, etc. simply focus on what creates friendship and nurtures friendship.
