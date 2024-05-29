import SingleQuestion from './SingleQuestion'
const Questions = ({questions,activeId,toggle}) => {
  return (
    <section className='container'>
      <h1>Questions</h1>
      {questions.map((question)=>{
        return <SingleQuestion key={question.id} {...question} activeId={activeId} toggle={toggle}/>
      })}
    </section>
  )
}
export default Questions