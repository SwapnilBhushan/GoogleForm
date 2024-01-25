export const initialState = {
  questions: [
    {
      questionText: "Question",
      questionType: "radio",
      options: [{ optionText: "Option 1" }],
      open: true,
      required: false,
    },
  ],
  questionType: "radio",
  doc_name: "Untitled Form",
  doc_description: "add the description",
};

export const actionType = {
  SET_QUESTION: "SET_QUESTION",
  CHANGE_TYPE: "CHANGE_TYPE",
  SET_DOC_NAME: "SET_DOC_NAME",
  SET_DOC_DESC: "SET_DOC_DESC",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SET_QUESTION:
      return {
        ...state,
        question: action.question,
      };

    case actionType.CHANGE_TYPE:
      return {
        ...state,
        questionType: action.questionType,
      };

    case actionType.SET_DOC_NAME:
      return {
        ...state,
        doc_name: action.doc_name,
      };

    case actionType.SET_DOC_DESC:
      return {
        ...state,
        doc_desc: action.doc_desc,
      };
    default:
      return state;
  }
};
