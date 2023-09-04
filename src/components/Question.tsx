import React, { useState } from 'react';
import cloneDeep from 'lodash/cloneDeep';

type questionType = {
    question: string,
    value: number,
}

type questionsDataType = Map<string, questionType>;

type QuestionProps = {
    setFormData: React.Dispatch<React.SetStateAction<questionsDataType>>,
    formData: questionsDataType,
    category: string,
}

export default function Question({setFormData, formData, category} : QuestionProps) {
    const formDataEntry = formData.get(category);
        
    const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prevFormData: questionsDataType) => {
            const prevFormDataClone: questionsDataType = cloneDeep(prevFormData);
            const prevFormDataCloneEntry = prevFormDataClone.get(category);
            if (prevFormDataCloneEntry) {
                prevFormDataCloneEntry.value = parseInt(e.target.value);
            }
            return prevFormDataClone;
        })
      };

    return (
        <>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">{formDataEntry?.question}</label>
                <input
                type="range"
                min="-5"
                max="10"
                value={formDataEntry?.value}
                onChange={(e) => handleSliderChange(e)}
                className="w-full"
                />
                <h4>{formDataEntry?.value}</h4>
            </div>
        </>
    )
}