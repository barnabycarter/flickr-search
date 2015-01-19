
/*
 * GET search page.
 */

exports.form = function(req, res){
  			res.render('search', { title: 'Flickr Search' })
};