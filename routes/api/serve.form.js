const express = require('express');
const router = express.Router();

const formController = require('../../controller/api/formController')


// @request     ::::    GET /sentimental  
// @desc        ::::   serving form in which user can submit words   
// @case        ::::   PUBLIC
router.get('/sentimental', formController.handleSubmit)


// @request     ::::    POST /sentimental
// @desc        ::::   storing submitted words in database after analyising them   
// @case        ::::   PUBLIC
router.post('/sentimental', formController.AfterSubmit)


module.exports = router;