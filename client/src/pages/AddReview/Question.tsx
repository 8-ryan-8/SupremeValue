import React, { useState } from 'react';
import cloneDeep from 'lodash/cloneDeep';
import './Question.css';

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
    let tier;
    if (formDataEntry) {
        tier = getTier(formDataEntry?.value);
    }
        
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
            <div className="question">
                <label className="question-label">{formDataEntry?.question}</label>
                <input
                type="range"
                min="-5"
                max="10"
                value={formDataEntry?.value}
                onChange={(e) => handleSliderChange(e)}
                className={`question-slider`}
                />
                <h4 className={`tier tier-${tier}`}>{tier}</h4>
            </div>
        </>
    )
}

function getTier(value: number) {
    if (value >= 6 && value <= 10) return 'STier';
    if (value >= 5 && value < 6) return 'ATier';
    if (value >= 4 && value < 5) return 'BTier';
    if (value >= 3 && value < 4) return 'CTier';
    if (value >= 0 && value < 3) return 'DTier';
    if (value < 0) return 'FTier';
}
