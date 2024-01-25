const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
  // id: {
  //   type: String,
  //   required: true,
  // },
  document_name: {
    type: String,
    required: true,
  },
  doc_desc: {
    type: String,
    required: true,
  },
  questions: [
    {
      questionText: {
        type: String,
        required: true,
      },
      questionType: {
        type: String,
        required: true,
      },
      options: [
        {
          optionText: {
            type: String,
            required: true,
          },
        },
      ],
      open: {
        type: Boolean,
        default: true,
      },
      required: {
        type: Boolean,
        default: false,
      },
    },
  ],
});

const Form = mongoose.model("Form", formSchema);

module.exports = Form;
