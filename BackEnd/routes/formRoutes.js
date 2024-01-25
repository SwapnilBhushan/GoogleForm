// routes/routes.js
const express = require("express");
const { createForm, getForm, getAnswer } = require("../Controller/Controller");
const router = express.Router();

router.post("/add_question", createForm);

router.get("/getForm/:id", getForm);

router.post("/answers", getAnswer);

module.exports = router;
