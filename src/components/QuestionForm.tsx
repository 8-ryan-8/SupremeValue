import Question from "./Question"

type QuestionFormProps = {
    title: string,
    questions: string[]
}

export default function QuestionForm({title, questions} : QuestionFormProps) {
    return (
        <>
          <h1 className="text-2xl font-semibold mb-4 mt-10 text-center">{title}</h1>
          <form className="max-w-[600px] mx-auto p-4 shadow-md border rounded-lg">
            {questions.map((question, idx) => (
              <Question key={idx} question={question} />
            ))}
            <div className="text-center mt-4">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Submit
              </button>
            </div>
          </form>
        </>
      );
}