// @ts-check
const Bundler = require('parcel-bundler');
const app = require('express')();
const jsonServer = require('json-server');
const server = jsonServer.create();
const { setupAPI } = require('./api-server');
const { join } = require('path');

setupAPI(server);

const file = join(__dirname, '..', 'index.html'); // Pass an absolute path to the entrypoint here
const options = {}; // See options section of api docs, for the possibilities

// Initialize a new bundler using a file and options
const bundler = new Bundler(file, options);

// Let express use the bundler middleware, this will let Parcel handle every request over your express server
app.use(server);
app.use(bundler.middleware());

// Listen on port 1234
app.listen(1234);
