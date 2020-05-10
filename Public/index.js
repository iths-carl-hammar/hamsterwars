const express = require('express');

const { auth } = require('../firebase');

const app = express();

// alla post.body = json
app.use(express.json());

