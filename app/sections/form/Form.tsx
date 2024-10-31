"use client";
import React, { useState } from "react";
import InputMask from "react-input-mask";
import "./Form.css";

import ContactBg from "@/app/img/contact-bg.png";

export const Form = () => {
    const [messageSent, setMessageSent] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        phoneNumber: "",
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
                "https://script.google.com/macros/s/AKfycbygGtfx8EEODRuDPrtJ6ZYhpdQXpxuThLf9I3kGiFpwzW_toMalt-KVQuz82EsVr4D2/exec",
                {
                    method: "POST",
                    mode: "no-cors",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name: formData.name,
                        phoneNumber: formData.phoneNumber.replace("+38", ""),
                    }),
                }
            )
                .then(() => {
                    setMessageSent(true);
                })
                .then(() =>
                    setFormData({
                        name: "",
                        phoneNumber: "",
                    })
                );
        } catch (error) {
            console.error("Сталася помилка:", error);
        }
    };
    return (
        <section
            style={{ backgroundImage: `url(${ContactBg.src})` }}
            className="contact-form">
            <h2>Залиш свої контакти і ми з тобою зв’яжемось</h2>

            <form className="form-container" onSubmit={handleSubmit}>
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
                    mask="+38 \(099) 99 99 999"></InputMask>
                <button
                    className={`enroll-btn black submit-btn ${
                        messageSent ? "success" : ""
                    }`}
                    type="submit">
                    {messageSent ? "Успіх!" : "Відправити"}
                </button>
            </form>
        </section>
    );
};
