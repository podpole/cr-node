var category = require('./../../models/category');
var CategoryController = function () {

};

CategoryController.getList = function (req, res, next) {
    var result = {};
    if(req.isAuthenticated())
    {
        result.status = 'ok';
        result.access = 'allow';
        category.findAll().then(function (data) {
            result.data = data;
            res.json(result);
        });
    }
    else
    {
        result.status = 'error';
        result.access = 'deny';
        res.status(403).json(result);
    }
};

CategoryController.saveCategory = function (req, res, next) {
    console.log(req.body);
    console.log(req.body.title);
    res.status(200);
};


module.exports = CategoryController;