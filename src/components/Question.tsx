import React, { useState } from 'react';

type QuestionProps = {
    question: string,
}

export default function Question({question} : QuestionProps) {
    const [answer, setAnswer] = useState<number>(0);

    const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAnswer(parseInt(e.target.value, 10));
      };

    return (
        <>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">{question}</label>
                <input
                type="range"
                min="-5"
                max="10"
                value={answer}
                onChange={(e) => handleSliderChange(e)}
                className="w-full"
                />
            </div>
        </>
    )
}