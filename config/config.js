var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'material-center'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/material-center-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'material-center'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/material-center-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'material-center'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/material-center-production'
  }
};

module.exports = config[env];
