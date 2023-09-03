import React, { useState } from 'react';
// import _ from '../../node_modules/lodash';

type questionType = {
    question: string,
    value: number | undefined,
}

interface questionsDataType {
    [key: string]: questionType
    priority: questionType,
    price: questionType,
    quality: questionType,
    features: questionType,
}

type QuestionProps = {
    setFormData: React.Dispatch<React.SetStateAction<questionsDataType>>,
    formData: questionsDataType,
    category: string,
}

export default function Question({setFormData, formData, category} : QuestionProps) {
    const {question, value} = formData[category]!;

    const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(category, "slider Value", e.target.value);
        // setFormData((prevFormData) => {
        //     const prevFormDataClone = _.cloneDeep(prevFormData);
        // })
        // setAnswer(parseInt(e.target.value, 10));
      };

    return (
        <>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">{question}</label>
                <input
                type="range"
                min="-5"
                max="10"
                value={value}
                onChange={(e) => handleSliderChange(e)}
                className="w-full"
                />
            </div>
        </>
    )
}