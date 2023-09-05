import React, { ChangeEvent, useState } from 'react';
import Question from "./Question"

type questionType = {
    question: string,
    value: number,
}

type questionsDataType = Map<string, questionType>;

const INITIAL_DATA: Array<[string, questionType]> = [
  ["priority", {
    question: "How important is this for me? How much do you need this?",
    value: 0,
}],
["price", {
  question: "How is the price?",
  value: 0,
}],
["quality", {
  question: "How is the quality??",
  value: 0,
}],
["features", {
  question: "What else can it do? How does it stand out?",
  value: 0,
}],

]

const DEFAULT_QUESTIONS_DATA: questionsDataType = new Map(INITIAL_DATA);

const TITLE = "Rank Your Product"

export default function QuestionForm() {
    const [searchProductName, setSearchProductName] = useState<string>("");
    const [createProductName, setCreateProductName] = useState<string>("");
    const [formData, setFormData] = useState<questionsDataType>(DEFAULT_QUESTIONS_DATA);
    const formDataKeys = Array.from(formData.keys());
    
    function handleSubmitProductRatings(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault();
      console.log("searchProductName", searchProductName);
      console.log("rankings", formData);
      setFormData(DEFAULT_QUESTIONS_DATA);
    }

    function handleSearchProductNameChange(e:ChangeEvent<HTMLInputElement>) {
        const value: string = e.target.value;
        setSearchProductName(value);
    }
    
    function handleCreateProductNameChange(e:ChangeEvent<HTMLInputElement>) {
        const value: string = e.target.value;
        setCreateProductName(value);
    }

    return (
        <>
          <h1 className="text-2xl font-semibold mb-4 mt-10 text-center">{TITLE}</h1>
          <form className="max-w-[800px] mx-auto p-4 mb-10 shadow-md border rounded-lg">
            <label className="block text-gray-700 text-sm font-bold mb-2">Search For Product:</label>
            <input
                type="text"
                value={searchProductName}
                onChange={(e) => handleSearchProductNameChange(e)}
                placeholder="Insert product name ..."
                className="mb-5 border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
            />
            <label className="block text-gray-700 text-sm font-bold mb-2">Create New Product:</label>
            <input
                type="text"
                value={createProductName}
                onChange={(e) => handleCreateProductNameChange(e)}
                placeholder="Insert new product ..."
                className="border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
            />
          </form>
          <form className="max-w-[600px] mx-auto p-4 shadow-md border rounded-lg" onSubmit={handleSubmitProductRatings}>
            {formDataKeys.map((category, idx) => {
            return (
              <Question key={idx} setFormData={setFormData} formData={formData} category={category}/>
            )})}
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