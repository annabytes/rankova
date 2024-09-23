'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import OurStoryPic from '@/app/img/our-story.png';
import './OurStory.css';

export const OurStory = () => {
  const [contentOpen, setContentOpen] = useState(false);

  const handleClick = () => {
    setContentOpen(!contentOpen);
  };

  return (
    <section className="our-story" id="about-us">
      <div className="img-container">
        <span className="founder-name oleksiy">Олексій</span>
        <span className="founder-name maks">Макс</span>
        <span className="founder-name yana">Яна</span>
        <svg
          className="maks-bkgr"
          xmlns="http://www.w3.org/2000/svg"
          width="132"
          height="86"
          viewBox="0 0 132 86"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M127.756 74.2743C118.875 85.0963 91.8196 72.7186 73.4769 74.2484C55.9349 75.7114 43.5899 91.7045 26.0075 82.76C8.40496 73.8051 14.0512 56.3459 10.4657 42.1931C6.85852 27.9547 -7.68433 9.22547 5.6016 2.21372C18.827 -4.76607 40.8309 11.1146 59.8395 16.1358C77.4336 20.7833 96.8259 18.5331 109.967 29.7819C125.516 43.0925 137.082 62.9093 127.756 74.2743Z"
            fill="#FFDF18"
          />
        </svg>
        <svg
          className="yana-bkgr"
          xmlns="http://www.w3.org/2000/svg"
          width="111"
          height="68"
          viewBox="0 0 111 68"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.59884 21.5255C8.43302 11.5062 31.2185 18.1199 45.5699 14.4784C59.2948 10.996 67.2999 -3.70948 82.2069 1.32621C97.1309 6.36766 94.5906 21.4015 98.993 32.5251C103.422 43.7161 117.004 57.161 107.262 64.6334C97.5635 72.0719 78.3899 61.9315 62.7874 60.2947C48.346 58.7797 33.2434 63.1478 21.5979 55.6466C7.81798 46.7706 -3.52802 32.0475 2.59884 21.5255Z"
            fill="#FFDF18"
          />
        </svg>
        <Image src={OurStoryPic.src} alt="Founders" width={712} height={500} />
      </div>
      <div className="story-content">
        <h2 className="story-header">Наша історія</h2>
        <h3 className="story-caption">Яна Ворожко, засновниця:</h3>
        <p className="story-part1">
          Усе почалось з любові до музики та бажання навчати інших. Повернувшись
          з навчання в Польщі та роботи у Китаї, я хотіла ділитися досвідом,
          який  отримала там, та бути корисною у своєму рідному місті Рівному.
        </p>

        <p className={`story-part2 ${contentOpen ? 'open' : ''}`}>
          Спочатку це були уроки вокалу онлайн через пандемію, потім офлайн, а
          згодом додалось фортепіано та ще співпраця з викладачкою. Охочих було
          багато. Так і виникла ідея розширятися, щоб музикою міг займатись
          кожен, хто має це бажання. У мою мрію повірили Максим Ворожко та
          Олексій Карчевський і приєдналися до мене на цьому шляху.
          <br />
          <br />
          Ми будували студію рік. Вклали сюди дуже багато праці та зусиль, аби
          учням було комфортно займатись музикою. Ми хотіли, щоб вони відчували
          себе не гірше, ніж за кордоном і могли пишатись, що у Рівному теж може
          бути сучасно. І мова не лише про простір і  обладнання, а й про підхід
          до музичних занять. <br />
          <br />
          Згодом ми вирішили створити місце, яке буде ще дужче обʼєднувати
          талановитих і творчих людей. “Soul Place” — простір для виступів наших
          учнів, різних творчих івентів задля  розвитку музичної культури
          Рівного.
        </p>

        <button className="toggle-story-btn" onClick={handleClick}>
          {contentOpen ? 'Згорнути' : 'Читати більше'}
        </button>
      </div>
    </section>
  );
};
