var Redtube = require('../dist/app');

var r = new Redtube({output: 'json'});

//Search method
r.search({search: 'Milf'}, function(err, response){
  if(!err)
    console.log(response);
});

//Get video by ID method
r.getVideoById({video_id: 1147059, thumbsize: 'all'}, function(err, response){
  if(!err)
    console.log(response);
});

//Get embed code
r.getVideoEmbedCode(1147059, function(err, response){
  if(!err)
    console.log(response);
});