const Form = require("../models/FormSchema");
const createForm = async (req, res) => {
  try {
    const formData = req.body;
    const newForm = new Form(formData);

    const savedForm = await newForm.save();

    console.log("Form saved:", savedForm);
    res.status(200).json(savedForm); // Send the saved form back as a response
  } catch (error) {
    console.error("Error saving form:", error);
    res.status(500).send("Internal Server Error");
  }
};

const getForm = async (req, res) => {
  try {
    let form = await Form.find();
    res.status(200).json(form);
  } catch (error) {
    console.log(error);
  }
};
module.exports = { createForm, getForm };
