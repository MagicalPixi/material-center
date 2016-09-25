var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Article = mongoose.model('Article');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
  /*var article = new Article();
  article.title = 'abc';
  article.url = 'www.baidu.com';
  article.text = 'abcdefg';
  article.save(function (err, product, numAffected) {
    if (err) return next(err);
    console.log('product --> ' + product);
    console.log('numAffected --> ' + numAffected);
  });*/
  Article.find(function (err, articles) {
    if (err) return next(err);
    console.log(articles);
    res.render('index', {
      title: 'Generator-Express MVC',
      articles: articles
    });
  });
});

router.get('/articles', function (req, res, next) {
  Article.find(function (err, articles) {
    if (err) return next(err);
    console.log(articles);
    res.send({
      articles: articles
    });
  });
})
