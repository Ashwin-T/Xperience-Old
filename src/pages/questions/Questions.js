import PostQuestions from "./postQuestions";
import AddQuestions from "./addQuestions";

const Questions = (params) => {
  return (
    <div>
      <div className="mainText" style={{ marginLeft: "7%" }}>
        <h1 style={{ borderBottom: "2px solid #D4AF37" }}>Ask A Question</h1>
      </div>

      <AddQuestions user={params.user} />

      <PostQuestions />
    </div>
  );
};

export default Questions;
