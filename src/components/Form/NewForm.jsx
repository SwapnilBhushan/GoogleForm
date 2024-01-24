import { Typography } from "@mui/material";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, useRoutes } from "react-router-dom";

const NewForm = () => {
  // const quest = [];
  // const post_answer = [];
  // const [answer, setAnswer] = useState([]);
  const data = useParams();
  // const form = routes.data;
  //const [data, setData] = useState({});
  // const [{ questions, doc_name, doc_desc }, dispatch] = useStateValue();
  // const routes = useParams();
  // const data = routs.data;
  const getData = () => {
    try {
      const response = axios.get(`http://localhost:2020/getForm/`);
    } catch (error) {}
  };

  console.log("from another component", data);
  return (
    <div className="submit">
      <div className="user_form">
        {/* <div className="user_form_section">
          <div className="user_title_section">
            <Typography style={{ fontSize: "26px" }}>
              {data.doc_name}
            </Typography>
            <Typography style={{ fontSize: "15px" }}>
              {data.doc_desc}
            </Typography>
          </div>

          {data.questions.map((question, qindex) => (
            <div className="user_form_questions">
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
              {data.question.options.map((ques, index) => (
                <div key={index} style={{ marginBottom: "5px" }}>
                  <div style={{ display: "flex" }}>
                    <div className="form-check">
                      {data.question.questionType != "radio" ? (
                        data.question.questionType != "text" ? (
                          <label>
                            <input
                              type={data.question.questionType}
                              name={qindex}
                              value={ques.optionText}
                              className="form-check-input"
                              required={question.required}
                              style={{ margnLeft: "5px", marginRight: "5px" }}
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
                              style={{ margnLeft: "5px", marginRight: "5px" }}
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
                            style={{ margnLeft: "5px", marginRight: "5px" }}
                            onChange={() => {
                              select(question.questionText, ques.optionText);
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

          <div className="user_form_submit">
            <Button
              variant="contained"
              color="primary"
              onClick={submit}
              style={{ fontSize: "14px" }}
            >
              Submit
            </Button>
          </div>

          <div className="user_footer">Google Forms</div>
        </div> */}
      </div>
    </div>
  );
};

export default NewForm;
