const Form = require("../models/FormSchema");
const createForm = async (req, res) => {
  try {
    const formData = req.body;
    const newForm = new Form(formData);

    const savedForm = await newForm.save();

    //console.log("Form saved:", savedForm);
    res.status(200).json(savedForm); // Send the saved form back as a response
  } catch (error) {
    console.error("Error saving form:", error);
    res.status(500).send("Internal Server Error");
  }
};

const getForm = async (req, res) => {
  const { _id } = req.params; // Access _id correctly
  console.log(_id);
  try {
    let form = await Form.findById(req.params.id);
    if (!form) {
      return res.status(404).json({ message: "Form not found" });
    }
    res.status(200).json(form);
    console.log(form);
  } catch (error) {
    console.error("Error retrieving form:", error);
    res.status(500).json({ message: "Server error" });
  }
};

const getAnswer = async (req, res) => {
  const answer = req.body;
  console.log("answers: ", answer);
};
module.exports = { createForm, getForm, getAnswer };
