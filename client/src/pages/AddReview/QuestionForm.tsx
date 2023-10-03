import React, { ChangeEvent, useState } from 'react';
import Question from './Question';
import './QuestionForm.css';

type questionType = {
  question: string;
  value: number;
};

type questionsDataType = Map<string, questionType>;

const INITIAL_DATA: Array<[string, questionType]> = [
  [
    "priority",
    {
      question: "How important is this for me? How much do you need this?",
      value: 0,
    },
  ],
  [
    "price",
    {
      question: "How is the price?",
      value: 0,
    },
  ],
  [
    "quality",
    {
      question: "How is the quality??",
      value: 0,
    },
  ],
  [
    "features",
    {
      question: "What else can it do? How does it stand out?",
      value: 0,
    },
  ],
];

const DEFAULT_QUESTIONS_DATA: questionsDataType = new Map(INITIAL_DATA);

export default function QuestionForm() {
  const [createProductName, setCreateProductName] = useState<string>("");
  const [myProductName, setMyProductName] = useState<string>("");
  const [formData, setFormData] = useState<questionsDataType>(
    DEFAULT_QUESTIONS_DATA
  );
  const formDataKeys = Array.from(formData.keys());

  function handleSubmitProductRatings(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();
    setFormData(DEFAULT_QUESTIONS_DATA);
    setMyProductName("");
  }

  function handleCreateProduct(e: React.FormEvent<HTMLFormElement>) {
    setMyProductName(createProductName);
    setCreateProductName("");
    e.preventDefault();
  }

  function handleCreateProductNameChange(e: ChangeEvent<HTMLInputElement>) {
    const value: string = e.target.value;
    setCreateProductName(value);
  }

  return (
    <>
      <form className="form-wrapper" onSubmit={handleCreateProduct}>
        <label className="input-label">
          Create New Product:
        </label>
        <input
          type="text"
          value={createProductName}
          onChange={(e) => handleCreateProductNameChange(e)}
          placeholder="Insert new product ..."
          className="input-text"
        />
        <h1 className="my-product-title">
          My Product: {`${myProductName}`}
        </h1>
      </form>
      <form className="question-form" onSubmit={handleSubmitProductRatings}>
        {formDataKeys.map((category, idx) => {
          return (
            <Question
              key={idx}
              setFormData={setFormData}
              formData={formData}
              category={category}
            />
          );
        })}
        <div className="submit-button">
          <button
            type="submit"
            className="submit-button-bg"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
