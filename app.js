/*
const express = require('express')
*/

import express from 'express';
import HelloController from "./Controllers/hello-controller.js"
import UserController from "./Controllers/Users/Users-controller.js";
import TuitController from "./Controllers/Tuits/Tuits-Controller.js";
import cors from 'cors'

const app = express()
app.use(express.json());
app.use(cors());

HelloController(app);
UserController(app);

TuitController(app);



app.listen(4003)