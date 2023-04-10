/*
const express = require('express')
*/

import express from 'express';
import mongoose from "mongoose";

import HelloController from "./Controllers/hello-controller.js"
import UserController from "./Controllers/Users/Users-controller.js";
import TuitController from "./Controllers/Tuits/Tuits-Controller.js";
import cors from 'cors'

/*
mongoose.connect('mongodb://127.0.0.1:27017/Tuiter');
*/

const CONNECTION_STRING = 'mongodb+srv://gunasekaranha:jsupDc655fLBAlXg@cluster1.wdqugtq.mongodb.net/?retryWrites=true&w=majority'
                         /* || 'mongodb://127.0.0.1:27017/tuiter'*/

mongoose.connect(CONNECTION_STRING);

console.log(mongoose.connection.readyState);

const app = express()
app.use(express.json());
app.use(cors());

HelloController(app);
UserController(app);

TuitController(app);



app.listen(4004)