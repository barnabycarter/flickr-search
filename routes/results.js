
/*
 * GET search page.
 */

exports.panda = function(req, res){
	
	
	var Flickr = require("flickrapi"),
    flickrOptions = {
      api_key: "be4706622f68427e61aa064a3df2dc6b",
      secret: "b0254a0fdf134688"
    };

	Flickr.tokenOnly(flickrOptions, function(error, flickr) {
  	// we can now use "flickr" as our API object,
  	// but we can only call public methods and access public data
				flickr.photos.search({
					user_id: "128998733@N04",
					page: 1,
					per_page: 10,
					text: req.body.query
					}, function(err, result) {
						//console.log(result.photos.photo[0].title);
						console.log(req.body.query);
						console.log(result.photos.photo);
						imageResults = result.photos.photo;
						res.render('results', { images: imageResults });  // render content
					});


	}); // Flickr.tonkenonly



};  // Closing Brace