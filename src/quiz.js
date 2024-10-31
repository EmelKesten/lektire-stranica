import React, { useState } from 'react';

const Quiz = () => {
    const [questionIndex, setQuestionIndex] = useState(0);
    const [correctAnswers, setCorrectAnswers] = useState(0)
    const pitanja = [
        {
            pitanje: "Koliko je 2+2",
            correctAnswer: "4",
            answers: ["Najduza rijeka na svijetu", "2", "3", "4"]
        },
        {
            pitanje: "Koliko je 3+2",
            correctAnswer: "24",
            answers: ["1", "2", "3", "24"]
        },
        {
            pitanje: "Koliko je 2+4",
            correctAnswer: "14",
            answers: ["1", "2", "3", "14"]
        },
        {
            pitanje: "Koliko je 25+2",
            correctAnswer: "23",
            answers: ["1", "2", "23", "4"]
        },
        {
            pitanje: "Koliko je 2+26",
            correctAnswer: "12",
            answers: ["12", "2", "33", "4"]
        },
    ];

    const questionHandler = (odgovor) => {
        if (odgovor === pitanja[questionIndex].correctAnswer) {
            setCorrectAnswers(correctAnswers + 1)
        }
        if (questionIndex + 1 < pitanja.length) {
            setQuestionIndex(questionIndex + 1);
        } else {
            setQuestionIndex(null); // Postavite index na null kada dođete do kraja niza
        }
    };

    return (
        <div>
            {questionIndex !== null ? ( // Prikaži pitanje samo ako index nije null
                <div className='quiz-questions'>
                    <h1>{pitanja[questionIndex].pitanje}</h1>
                    <div className='answers-container'>
                        {pitanja[questionIndex].answers.map((odgovor, index) => {
                            return (
                                <>
                                <p>{index}</p>
                                    <button className='answer-button' key={odgovor} onClick={() => questionHandler(odgovor)}>
                                        {odgovor}
                                    </button>
                                </>
                            );
                        })}
                    </div>
                </div>
            ) : (
                <h1>Nema više pitanja, i uspjesno ste odgovorili na: {correctAnswers} pitanja</h1>
            )}
        </div>
    );
};

export default Quiz;
