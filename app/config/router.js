var express = require('express');
var router = express.Router();

var AuthController = require('./../controllers/AuthController');
var AdminCategoryController = require('./../controllers/admin/CategoryController');
var AdminBaseController = require('./../controllers/admin/BaseController');

router.get('/login', function(req, res, next) {
    AuthController.loginForm(req, res, next);
});
router.post('/login', function (req, res, next) {
    AuthController.login(req, res, next);
});

router.get('/admin*', function(req, res, next) {
    res.render('admin', { data: 'test' });
});

router.get('/api/category/list', function(req, res, next) {
    AdminCategoryController.getList(req, res, next);
});
router.post('/api/category/save', function(req, res, next) {
    AdminCategoryController.saveCategory(req, res, next);
});

router.get('/api/admin/init', function(req, res, next) {
    AdminBaseController.adminInit(req, res, next);
});

router.get('/', function(req, res, next) {
    console.log(req);
    res.render('index', { title: 'Express' });
});

module.exports = router;

