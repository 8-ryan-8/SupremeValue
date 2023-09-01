import React, { useState } from 'react';
import QuestionForm from '../../components/QuestionForm';

const QUESTIONS = [
    "How important is this for me? How much do you need this?",
    "How is the price?",
    "How is the quality?",
    "What else can it do? How does it stand out?",
]

const TITLE = "Rank Your Product"

export default function AddProductPage() {
    return (
        <>
            <QuestionForm title={TITLE} questions={QUESTIONS}></QuestionForm>
        </>
    )
}