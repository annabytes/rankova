'use client';
import React, { useState } from 'react';
import './QA.css';
import { qaCollection } from './QAData';
import { Nunito } from 'next/font/google';

const nunito = Nunito({
  subsets: ['cyrillic', 'cyrillic-ext', 'latin', 'latin-ext'],
  weight: ['800', '400'],
});

export const QA = () => {
  const [openQuestion, setOpenQuestion] = useState<undefined | number>(
    undefined
  );

  const handleQuestionClick = (id: number) => {
    if (id === openQuestion) {
      setOpenQuestion(undefined);
    } else {
      setOpenQuestion(id);
    }
  };

  return (
    <section className="qa">
        <h2>Часті питання</h2>
      {qaCollection.map((record, i) => (
        <div key={i} className="qa-block">
          <div
            className="question-container"
            onClick={() => handleQuestionClick(record.id)}
          >
            {record.question}
            <svg
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 16.5L22 27.5L33 16.5"
                stroke="#838181"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div
            className={`${nunito.className} answer ${
              openQuestion === record.id ? 'open-answer' : ''
            }`}
          >
            {record.answer}
          </div>
        </div>
      ))}
    </section>
  );
};
