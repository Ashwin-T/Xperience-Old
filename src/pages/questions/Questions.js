import PostQuestions from "./postQuestions"
import AddQuestions from './addQuestions'

const Questions = () => {
  
  return (
    <div>
      <div className="mainText" style={{ marginLeft: "7%" }}>
        <h1 style={{ borderBottom: "2px solid #D4AF37"}}>Ask A Question</h1>
      </div>

      <AddQuestions/>

      <PostQuestions/>
     
    </div>
  );
};

export default Questions;
