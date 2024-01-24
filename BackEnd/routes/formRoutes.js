// routes/routes.js
const express = require("express");
const { createForm, getForm } = require("../Controller/Controller");
const router = express.Router();

router.post("/add_question", createForm);

router.get("/getForm", getForm);

module.exports = router;
