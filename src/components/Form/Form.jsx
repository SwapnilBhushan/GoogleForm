import React, { useState, useEffect } from "react";
import CropOriginalOutlinedIcon from "@mui/icons-material/CropOriginalOutlined";
import RadioButtonCheckedOutlinedIcon from "@mui/icons-material/RadioButtonCheckedOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import FilterNoneOutlinedIcon from "@mui/icons-material/FilterNoneOutlined";
import SmartDisplayOutlinedIcon from "@mui/icons-material/SmartDisplayOutlined";
import UploadFileOutlinedIcon from "@mui/icons-material/UploadFileOutlined";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import SubjectIcon from "@mui/icons-material/Subject";
import ShortTextIcon from "@mui/icons-material/ShortText";
import CropOriginalIcon from "@mui/icons-material/CropOriginal";
import CloseIcon from "@mui/icons-material/Close";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { FcRightUp } from "react-icons/fc";
import FilterNoneIcon from "@mui/icons-material/FilterNone";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";

import "./Form.css";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  FormControlLabel,
  IconButton,
  MenuItem,
  Radio,
  Select,
  Switch,
  Typography,
} from "@mui/material";
import { AddCardOutlined } from "@mui/icons-material";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

import { useNavigate } from "react-router-dom";

import axios from "axios";

const Form = () => {
  const navigate = useNavigate();
  const [formData, setFormdata] = useState({});
  const [question, setQuestion] = useState([
    {
      questionText: "What is JavaScript?",
      questionType: "radio",
      options: [
        { optionText: "Option 1" },
        { optionText: "Option 2" },
        { optionText: "Option 3" },
        { optionText: "Option 4" },
      ],
      open: true,
      required: false,
    },
  ]);
  const [documentName, setDocumentName] = useState("Untitled Document");
  const [docDesc, setDocDesc] = useState("Add Description");

  const handleQuestionTextChange = (index, text) => {
    var newQuestions = [...question];
    newQuestions[index].questionText = text;
    setQuestion(newQuestions); // Corrected variable name
    console.log(newQuestions);
  };

  const handleQuestionTypeChange = (index, newType) => {
    const updatedQuestions = [...question];
    updatedQuestions[index].questionType = newType;
    setQuestion(updatedQuestions);
  };
  const addQuestionType = (index, type) => {
    let updatedQuestions = [...question];
    console.log(type);
    updatedQuestions[index].questionType = type;
    setQuestion(updatedQuestions);
  };

  const changeOptionValue = (text, index, j) => {
    let optionQuestion = [...question];
    optionQuestion[index].options[j].optionText = text;
    setQuestion(optionQuestion);
    console.log(optionQuestion);
  };

  const removeOption = (index, j) => {
    let removequestionOption = [...question];
    if (removequestionOption[index].options.length > 1) {
      removequestionOption[index].options.splice(j, 1);
      setQuestion(removequestionOption);
      console.log(index + "__" + j);
    }
  };

  const addOption = (i) => {
    let addQuestionOption = [...question];
    if (addQuestionOption[i].options.length < 5) {
      addQuestionOption[i].options.push({
        optionText: "Option " + (addQuestionOption[i].options.length + 1),
      });
    } else {
      console.log("Max 5 Options");
    }
    setQuestion(addQuestionOption);
  };

  const copyQuestion = (i) => {
    expandCloseAll();
    let ques = [...question];
    let newQuestion = { ...ques[i] };
    setQuestion([...question, newQuestion]);
  };

  const deleteQuestion = (i) => {
    let ques = [...question];
    if (question.length > 1) {
      ques.splice(i, 1);
    }
    setQuestion(ques);
  };

  const requiredQuestion = (i) => {
    let reqQuestion = [...question];
    reqQuestion[i].required = !reqQuestion[i].required;
    console.log(reqQuestion[i].required + " " + i);
    setQuestion(reqQuestion);
  };

  const addNewField = () => {
    expandCloseAll();
    setQuestion([
      ...question,
      {
        questionText: "Question",
        questionType: "radio",
        options: [{ optionText: "Option 1" }],
        open: true,
        required: false,
      },
    ]);
  };

  const expandCloseAll = () => {
    let ques = [...question];
    for (let i = 0; i < ques.length; i++) {
      ques[i].open = false;
    }
    setQuestion(ques);
  };

  const handleExpand = (i) => {
    let ques = [...question];

    for (let j = 0; j < ques.length; j++) {
      if (i === j) {
        ques[i].open = true;
      } else {
        ques[j].open = false;
      }
    }
    setQuestion(ques);
  };

  const saveFormData = async () => {
    // console.log({
    //   document_name: documentName,
    //   doc_desc: docDesc,
    //   questions: question,
    // });
    try {
      const response = await axios.post(
        `http://localhost:2020/api/add_question/`,
        {
          document_name: documentName,
          doc_desc: docDesc,
          questions: question,
        }
      );
      if (response.status === 200) {
        // dispatch({
        //   type: "SET_QUESTION", // Replace with the appropriate action type
        //   question: response.data, // Update with the data you want to store
        // });
        setFormdata(response.data);
        console.log(response.data);
        const id = response.data._id;

        //navigate("newForm", { data: formData });
      }
    } catch (error) {}
  };
  const QuestionUI = () => {
    return question.map((ques, index) => (
      <Accordion
        expanded={ques.open}
        className={ques.open ? "add border" : ""}
        onChange={() => handleExpand(index)}
      >
        <AccordionSummary
          aria-controls="panella-content"
          id="panella-header"
          elevation={1}
          style={{ width: "100%" }}
        >
          {!question[index].open ? (
            <div className="saved_questions">
              <Typography
                style={{
                  fontSize: "15px",
                  fontWeight: "400",
                  letterSpacing: "0.1px",
                  lineHeight: "24px",
                  paddingBottom: "8px",
                }}
              >
                {index + 1}. {question[index].questionText}
              </Typography>

              {ques.options.map((op, j) => (
                <div key={j}>
                  <div style={{ display: "flex" }}>
                    <FormControlLabel
                      style={{ marginLeft: "5px", marginBottom: "5px" }}
                      disabled
                      control={
                        <input
                          type={ques.questionType}
                          color="primay"
                          style={{ marginRight: "3px" }}
                          required={ques.type}
                        />
                      }
                      label={
                        <Typography
                          style={{
                            fontFamily: "Roboto, Arial, sans-serif",
                            fontWeight: 400,
                            fontSize: "13px",
                            letterSpacing: "0.2px",
                            lineHeight: "20px",
                            color: "#202124",
                          }}
                        >
                          {ques.options[j].optionText}
                        </Typography>
                      }
                    />
                  </div>
                </div>
              ))}
            </div>
          ) : null}
        </AccordionSummary>

        {question[index].open ? (
          <div className="question_boxes">
            <AccordionDetails className="add_question">
              <div className="add_question_top">
                <input
                  type="text"
                  className="question"
                  placeholder="Question"
                  value={ques.questionText}
                  onChange={(e) =>
                    handleQuestionTextChange(index, e.target.value)
                  }
                />
                <CropOriginalOutlinedIcon style={{ color: "#5f6368" }} />
                <Select
                  className="select"
                  style={{ color: "#5f6368", fontSize: "13px" }}
                  //value={ques.questionType}
                  onChange={(e) =>
                    handleQuestionTypeChange(index, e.target.value)
                  }
                >
                  <MenuItem
                    id="text"
                    value="Text"
                    className="menuitem"
                    onClick={() => addQuestionType(index, "text")}
                  >
                    <SubjectIcon style={{ marginRight: "10px" }} />
                    Paragraph
                  </MenuItem>
                  <MenuItem
                    id="checkbox"
                    value="Checkbox"
                    className="menuitem"
                    onClick={() => addQuestionType(index, "checkbox")}
                  >
                    <CheckBoxIcon
                      style={{ marginRight: "10px", color: "#70757a" }}
                      checked
                    />
                    Checkboxes
                  </MenuItem>
                  <MenuItem
                    id="radio"
                    value="Radio"
                    className="menuitem"
                    onClick={() => addQuestionType(index, "radio")}
                  >
                    <Radio
                      style={{ marginRight: "10px", color: "#70757a" }}
                      checked
                    />
                    Multiple Choice
                  </MenuItem>
                </Select>
              </div>
              {ques.options.map((op, j) => (
                <div className="add_question_body" key={j}>
                  {ques.questionType != "text" ? (
                    <input
                      type={ques.questionType}
                      style={{ marginRight: "10px" }}
                    />
                  ) : (
                    <ShortTextIcon style={{ marginRight: "10px" }} />
                  )}
                  <div>
                    <input
                      type="text"
                      className="text_input"
                      placeholder="option"
                      value={ques.options[j].optionText}
                      onChange={(e) =>
                        changeOptionValue(e.target.value, index, j)
                      }
                    />
                  </div>
                  <CropOriginalIcon style={{ color: "#5f6368" }} />
                  <IconButton aria-label="delete">
                    <CloseIcon onClick={() => removeOption(index, j)} />
                  </IconButton>
                </div>
              ))}

              {ques.options.length < 5 ? (
                <div className="add_question_body">
                  <FormControlLabel
                    disabled
                    control={
                      ques.questionType !== "text" ? (
                        <input
                          type={ques.questionType}
                          color="primary"
                          inputProps={{
                            "aria-label": "secondary checkbox",
                          }}
                          style={{
                            marginLeft: "10px",
                            marginRight: "10px",
                          }}
                          disabled
                        />
                      ) : (
                        <ShortTextIcon style={{ marginRight: "10px" }} />
                      )
                    }
                    label={
                      <div>
                        <input
                          type="text"
                          className="text_input"
                          placeholder="Add Other"
                          style={{ fontSize: "13px", width: "60px" }}
                        />
                        <Button
                          size="small"
                          style={{
                            textTransform: "none",
                            color: "#4285f4",
                            fontSize: "13px",
                            fontWeight: "600",
                          }}
                          onClick={() => addOption(index)}
                        >
                          Add Option
                        </Button>
                      </div>
                    }
                  />
                </div>
              ) : (
                ""
              )}

              <div className="add_footer">
                <div className="add_question_bottom_left">
                  <Button
                    size="small"
                    style={{
                      textTransform: "none",
                      color: "#4285fa",
                      fontSize: "13px",
                      fontWeight: "600",
                    }}
                  >
                    <FcRightUp
                      style={{
                        border: "2px solid #4285f4",
                        padding: "2px",
                        marginRight: "8px",
                      }}
                    />
                    Answer Key
                  </Button>
                </div>
                <div className="add_question_bottom">
                  <IconButton
                    aria-label="copy"
                    onClick={() => copyQuestion(index)}
                  >
                    <FilterNoneIcon />
                  </IconButton>
                  <IconButton
                    aria-label="delete"
                    onClick={() => deleteQuestion(index)}
                  >
                    <DeleteForeverIcon />
                  </IconButton>
                  <span style={{ color: "#5f6368", fontSize: "14px" }}>
                    Required
                  </span>
                  <Switch
                    name="checkedA"
                    color="primary"
                    onClick={() => requiredQuestion(index)}
                  ></Switch>
                  <IconButton aria-label="copy">
                    <MoreVertIcon />
                  </IconButton>
                </div>
              </div>
            </AccordionDetails>
            <div className="question_edit">
              <AddCardOutlined className="edit" onClick={addNewField} />
              <OndemandVideoIcon className="edit" />
              <CropOriginalIcon className="edit" />
              <TextFieldsIcon className="edit" />
            </div>
          </div>
        ) : (
          ""
        )}
      </Accordion>
    ));
  };

  return (
    <div>
      <div className="question_form">
        <br></br>
        <div className="section">
          <div className="question_title_section">
            <div className="question_form_top">
              <input
                type="text"
                className="question_form_top_name"
                style={{ color: "#000" }}
                placeholder="Untitled document"
                onChange={(e) => setDocumentName(e.target.value)}
              />

              <input
                type="text"
                className="question_form_top_desc"
                style={{ color: "#000" }}
                placeholder="Form Description"
                onChange={(e) => setDocDesc(e.target.value)}
              />
            </div>
          </div>

          {QuestionUI()}
          <div className="save_form">
            <Button
              variant="contained"
              color="primary"
              onClick={saveFormData}
              style={{ fontSize: "14px" }}
            >
              Save
            </Button>
          </div>
        </div>
      </div>

      <div>
        {formData && (
          <div className="submit">
            <h3 style={{ textAlign: "center" }}>Your Form </h3>
            <div className="user_form">
              <div className="user_form_section">
                <div className="user_title_section">
                  <Typography style={{ fontSize: "26px" }}>
                    {formData.document_name}
                  </Typography>
                  <Typography style={{ fontSize: "15px" }}>
                    {formData.doc_desc}
                  </Typography>
                </div>

                {Array.isArray(formData.questions) &&
                  formData.questions.map((question, qindex) => (
                    <div className="user_form_questions" key={qindex}>
                      <Typography
                        style={{
                          fontSize: "15px",
                          fontWeight: "400",
                          letterSpacing: ".1px",
                          lineHeight: "24px",
                          paddingBottom: "8px",
                          fontSize: "14px",
                        }}
                      >
                        {qindex + 1}. {question.questionText}
                      </Typography>
                      {Array.isArray(question.options) &&
                        question.options.map((ques, index) => (
                          <div key={index} style={{ marginBottom: "5px" }}>
                            <div style={{ display: "flex" }}>
                              <div className="form-check">
                                {question.questionType !== "radio" ? (
                                  question.questionType !== "text" ? (
                                    <label>
                                      <input
                                        type={question.questionType}
                                        name={qindex}
                                        value={ques.optionText}
                                        className="form-check-input"
                                        required={question.required}
                                        style={{
                                          marginLeft: "5px",
                                          marginRight: "5px",
                                        }}
                                        onChange={(e) => {
                                          selectcheck(
                                            e.target.checked,
                                            question.questionText,
                                            ques.optionText
                                          );
                                        }}
                                      />{" "}
                                      {ques.optionText}
                                    </label>
                                  ) : (
                                    <label>
                                      <input
                                        type={question.questionType}
                                        name={qindex}
                                        value={ques.optionText}
                                        className="form-check-input"
                                        required={question.required}
                                        style={{
                                          marginLeft: "5px",
                                          marginRight: "5px",
                                        }}
                                        onChange={(e) => {
                                          selectinput(
                                            question.questionText,
                                            e.target.value
                                          );
                                        }}
                                      />{" "}
                                      {ques.optionText}
                                    </label>
                                  )
                                ) : (
                                  <label>
                                    <input
                                      type={question.questionType}
                                      name={qindex}
                                      value={ques.optionText}
                                      className="form-check-input"
                                      required={question.required}
                                      style={{
                                        marginLeft: "5px",
                                        marginRight: "5px",
                                      }}
                                      onChange={() => {
                                        select(
                                          question.questionText,
                                          ques.optionText
                                        );
                                      }}
                                    />
                                    {ques.optionText}
                                  </label>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                  ))}

                {/* <div className="user_form_submit">
                  <Button
                    variant="contained"
                    color="primary"
                    //onClick={submit}
                    style={{ fontSize: "14px" }}
                  >
                    Submit
                  </Button>
                </div> */}
              </div>
              <div className="user_footer">Google Forms</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Form;
