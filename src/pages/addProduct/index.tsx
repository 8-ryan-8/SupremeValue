import React, { useState } from 'react';
import QuestionForm from '../../components/QuestionForm';

export default function AddProductPage() {
    const [questions, setQuestions] = useState([
        "How important is this for me? How much do you need this?",
        "How is the price?",
        "How is the quality?",
        "What else can it do? How does it stand out?",
    ]);
    const [title, setTitle] = useState("Rank Your Product");

    return (
        <>
            <QuestionForm title={title} questions={questions}></QuestionForm>
        </>
    )
}