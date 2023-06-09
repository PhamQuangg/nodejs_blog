const Course = require('../models/Course');

class SiteController {
  //[GET] /
  index(req, res) {
    Course.find({})
      .then(courses => {
        res.json(courses);
      })
      .catch(error => {
        console.error(error);
        res.status(400).json({ error: 'ERROR!!' });
      });
  }

  //[GET]/search
  search(req, res) {
    res.render('searchs');
  }
}

module.exports = new SiteController();