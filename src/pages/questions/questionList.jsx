import React from "react";

import Questions from "./Questions.js";

const QuestionList = (params) => {
  return (
    <div>
      <Questions user={params.user} />
    </div>
  );
};
export default QuestionList;
