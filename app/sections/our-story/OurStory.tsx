"use client";

import Image from "next/image";
import { useState } from "react";
import "./OurStory.css";

import story from "@/app/img/story.png";

export const OurStory = () => {
    const [contentOpen, setContentOpen] = useState(false);

    const handleClick = () => {
        setContentOpen(!contentOpen);
    };

    return (
        <section className="our-story" id="about-us">
            <Image className="story-img" src={story} alt="Founders" />
            <div className="story-content">
                <h2 className="story-header">Наша історія</h2>
                <h3 className="story-caption">Яна Ворожко, засновниця:</h3>
                <p className="story-part1">
                    Усе почалось з любові до музики та бажання навчати інших.
                    Повернувшись з навчання в Польщі та роботи у Китаї, я хотіла
                    ділитися досвідом, який  отримала там, та бути корисною у
                    своєму рідному місті Рівному.
                </p>

                <p className={`story-part2 ${contentOpen ? "open" : ""}`}>
                    Спочатку це були уроки вокалу онлайн через пандемію, потім
                    офлайн, а згодом додалось фортепіано та ще співпраця з
                    викладачкою. Охочих було багато. Так і виникла ідея
                    розширятися, щоб музикою міг займатись кожен, хто має це
                    бажання. У мою мрію повірили Максим Ворожко та Олексій
                    Карчевський і приєдналися до мене на цьому шляху.
                    <br />
                    <br />
                    Ми будували студію рік. Вклали сюди дуже багато праці та
                    зусиль, аби учням було комфортно займатись музикою. Ми
                    хотіли, щоб вони відчували себе не гірше, ніж за кордоном і
                    могли пишатись, що у Рівному теж може бути сучасно. І мова
                    не лише про простір і  обладнання, а й про підхід до
                    музичних занять. <br />
                    <br />
                    Згодом ми вирішили створити місце, яке буде ще дужче
                    обʼєднувати талановитих і творчих людей. “Soul Place” —
                    простір для виступів наших учнів, різних творчих івентів
                    задля  розвитку музичної культури Рівного.
                </p>

                <button className="toggle-story-btn" onClick={handleClick}>
                    {contentOpen ? "Згорнути" : "Читати більше"}
                </button>
            </div>
        </section>
    );
};
