/*jslint nomen:true, node:true*/

var express = require('express'),
    libmojito = require('mojito'),
    app;

app = express();

// Set the port to listen on.
app.set('port', process.env.PORT || 8666);

// Create a new Mojito instance and attach it to `app`.
// Options can be passed to `extend`.
libmojito.extend(app, {
    context: {
        environment: "development"
    }
});

// Load the built-in middleware or any middleware
// configuration specified in application.json
app.use(libmojito.middleware());



// Load routes configuration from routes.json
app.mojito.attachRoutes();
app.get('/', libmojito.dispatch('getinfo.index'));
//app.get('/get', libmojito.dispatch('get.index'));

// Allow anonymyous mojit instances w/ actions to be dispatched
app.get('/:mojit/:action', libmojito.dispatch("{mojit}.{action}"));


app.listen(app.get('port'), function () {
    console.log('Server listening on port ' + app.get('port') + ' ' +
                   'in ' + app.get('env') + ' mode');
});
