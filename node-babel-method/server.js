import * as Hapi from 'hapi';

// Server
var server = new Hapi.Server();
server.connection( {

    port: 3340,

} );

// Route
server.route( {

    path: '/{name}',
    method: 'GET',
    handler: ( request, reply ) => {

        reply( 'Hello ' + request.params.name );

    },

} );

// Start it!
server.start( ( err ) => {

    if( err ) {
        throw err;
    }

    console.log( 'Powering up to 1.21 Gigawatts at:', server.info.uri );

} );
