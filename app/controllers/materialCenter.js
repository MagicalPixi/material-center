/**
 * Created by zhouchunjie on 16/9/24.
 */

var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  config = require('../../config/config'),
  qiniu = require('qiniu'),
  Material = mongoose.model('Material')

  ;
module.exports = function (app) {
  app.use('/material', router);
};

//查找某个素材
router.get('/', function (req, res, next) {
  var id = req.param('id');

  Material.findOne({_id: id}, function (err, doc) {
    if (err) return next(err);
    res.json({
      data: doc
    })
  })
});

//保存素材信息
router.post('/', function (req, res, next) {
  var size = req.body.size,
    name = req.body.name,
    mimeType = req.body.mimeType,
    url = req.body.url;

  var material = new Material();
  material.name = name;
  material.mimeType = mimeType;
  material.size = size;
  material.url = url;

  material.save(function (err, product) {
    if (err) return next(err);
    res.json({
      data: product
    });
  });
});

//删除某个素材
router.delete('/:id', function (req, res, next) {
  var id = req.param('id');
  Material.remove({_id: id}, function (err) {
    if (err) {
      console.log(err);
      next(err);
    } else {
      res.json({
        code: 200,
        message: "SUCCESS"
      });
    }
  });
});

//查找所有素材
router.get('/list', function (req, res, next) {
  Material.find({}, function (err, docs) {
    if (err) return next(err);
    res.json({
      data: docs
    });
  })
});

//获取七牛uptoken
router.post('/uptoken/qiniu', function (req, res, next) {
  var key = req.body.key;
  //init qiniu config
  qiniu.conf.ACCESS_KEY = config.cloud.qiniu.AccessKey;
  qiniu.conf.SECRET_KEY = config.cloud.qiniu.SecretKey;
  var putPolicy = new qiniu.rs.PutPolicy(config.cloud.qiniu.bucket + ":" + key);
  var token = putPolicy.token();
  if (token) {
    res.json({
      key: key,
      uptoken: token
    });
  }
});




