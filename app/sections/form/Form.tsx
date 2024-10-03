'use client';
import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import './Form.css';

export const Form = () => {
  const [messageSent, setMessageSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
  });

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    try {
      await fetch(
        'https://script.google.com/macros/s/AKfycbygGtfx8EEODRuDPrtJ6ZYhpdQXpxuThLf9I3kGiFpwzW_toMalt-KVQuz82EsVr4D2/exec',
        {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            phoneNumber: formData.phoneNumber.replace('+38', ''),
          }),
        }
      )
        .then(() => {
          setMessageSent(true);
        })
        .then(() =>
          setFormData({
            name: '',
            phoneNumber: '',
          })
        );
    } catch (error) {
      console.error('Сталася помилка:', error);
    }
  };
  return (
    <section className="contact-form">
      <h2>Залиш свої контакти і ми з тобою зв’яжемось</h2>
      <svg
        className="form-background"
        viewBox="0 0 1437 749"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1437 749C1437 749 1347.66 604.185 1177.58 580.217C1045.95 561.666 722.515 563.513 718.537 563.537C718.413 563.538 718.571 563.537 718.447 563.537C714.492 563.537 489.297 563.537 359.25 563.537C125.974 563.537 0 469.416 0 469.416V0C0 0 180.745 175.785 718.5 175.785C960.254 175.785 1129.85 175.785 1243.32 175.785C1350.39 175.785 1437 262.586 1437 369.661V749Z"
          fill="#FFDF18"
        />
      </svg>
      <form onSubmit={handleSubmit}>
        <div className="form-container">
          <input
            className="input-name"
            type="text"
            name="name"
            placeholder="Ім'я та прізвище"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <InputMask
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
            className="input-number"
            alwaysShowMask
            mask="+38 \(099) 99 99 999"
          ></InputMask>
          <button
            className={`enroll-btn black submit-btn ${
              messageSent ? 'success' : ''
            }`}
            type="submit"
          >
            {messageSent ?'Успіх!':'Відправити'}
          </button>
        </div>
      </form>
    </section>
  );
};
