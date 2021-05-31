const QuestionsAnswersTest = () => {
    return (
    <div className = "mainText" style = {{marginLeft: '17%'}}>
        <h1 style = {{borderBottom: '2px solid #D4AF37', width: '75%'}}>
            Ask A Question
        </h1>
        <form id = "add-questions" >
            <input type="text" id = "questionBox" style = {{float: 'center', fontSize: '17px'}} ></input>{/*placeholder = {{'Specific questions about classes, combinations of classes, teachers, etc... '*/}
            <input type= "submit" id = "subButton"class = "submit" value = "Submit"></input>
        </form>  

    </div>   
    );
}
 
export default QuestionsAnswersTest;