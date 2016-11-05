var express = require('express');
var app = express();
app.set('port', (process.env.PORT || 5000));

// Init stuff
var mkdirp = require('mkdirp');

mkdirp('download_image', function (err) {
    if (err) console.error(err)
    else console.log('Could not make download_image dir')
});

mkdirp('output', function (err) {
    if (err) console.error(err)
    else console.log('Could not make output dir')
});


require('./routes')(app);
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
exports = module.exports = app;