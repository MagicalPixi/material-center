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
    db: 'mongodb://localhost/material-center-development',
    cloud: {
      qiniu:{
        AccessKey: 'eS2ZB5WI4RajUrScznPhswSCAnsSj2tVKj67rPYO',
        SecretKey: 'bmTQKTlwf_685UAJ7SRzNkl0mc4UywOWwle4U7tu',
        bucket:'material-center-dev'
      },
      upCloud:{

      }
    }
  },

  test: {
    root: rootPath,
    app: {
      name: 'material-center'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/material-center-test',
    cloud: {
      qiniu:{
        AccessKey: 'eS2ZB5WI4RajUrScznPhswSCAnsSj2tVKj67rPYO',
        SecretKey: 'bmTQKTlwf_685UAJ7SRzNkl0mc4UywOWwle4U7tu',
        bucket:'material-center-dev'
      },
      upCloud:{

      }
    }
  },

  production: {
    root: rootPath,
    app: {
      name: 'material-center'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/material-center-production',
    cloud: {
      qiniu:{
        AccessKey: 'eS2ZB5WI4RajUrScznPhswSCAnsSj2tVKj67rPYO',
        SecretKey: 'bmTQKTlwf_685UAJ7SRzNkl0mc4UywOWwle4U7tu',
        bucket:'material-center-dev'
      },
      upCloud:{

      }
    }
  }
};

module.exports = config[env];
