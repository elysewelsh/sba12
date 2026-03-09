import express from 'express'
import userController from '../controllers/userController.js';

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userContoller'); //import controller

router.get('/api//user/test', userController.getAllUsers);
router.post('/',userController.createUser);

module.export = router