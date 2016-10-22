var BaseController = function () {

};

BaseController.adminInit = function (req, res, next) {
    var result = {};
    if(req.isAuthenticated())
    {
        if(req.user.isAdmin === 1)
        {
            result.status = 'ok';
            result.access = 'allow';
            res.json(result)
        }
        else
        {
            result.status = 'error';
            result.access = 'deny';
            res.status(403).json(result);
        }
    }
    else
    {
        result.status = 'error';
        result.access = 'deny';
        res.status(403).json(result);
    }
};


module.exports = BaseController;