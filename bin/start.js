#!/usr/bin/env node

var express = require('express');
// create app
var app = express();
// initialize server
require('../app/server')(app, express);

