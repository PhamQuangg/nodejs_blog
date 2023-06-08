class SiteController{
    //[GET] /
    index(req,res){
        res.render('home');
    }

    //[GET]/search
    search(req, res){
        res.render('searchs');
    }
}

module.exports = new SiteController;

