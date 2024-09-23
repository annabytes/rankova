import React from 'react';
import background from '@/app/img/header-img.png';
import './Header.css';
import { EnrollBtn } from '@/app/elements/enroll-btn/EnrollBtn';

export const Header = () => {
  return (
    <header
      style={{
        backgroundImage: `url(${background.src})`,
      }}
    >
      <div className="header-content">
        <svg
          className="header-svg"
          xmlns="http://www.w3.org/2000/svg"
          width="380"
          height="82"
          viewBox="0 0 380 82"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M378 37.31C367.935 18.9648 290.933 17.8046 248.866 5.04395C208.636 -7.15962 187.461 15.7716 136.5 16.1047C85.4806 16.4382 46.99 -9.90332 24 5.04395C0.870916 20.0817 -10.6247 35.2262 13.8124 51.5941C38.1382 67.8873 106.704 61.814 157.048 67.0646C203.646 71.9245 247.473 86.1792 290.224 80.4221C340.81 73.6099 388.57 56.5755 378 37.31Z"
            fill="#FFDF18"
          />
        </svg>
        <h1>Музика для всіх, а не тільки для обраних</h1>
        <ul>
          <li>творчі івенти</li>
          <li>заняття з вокалу</li>
          <li>заняття з гри на музичних інструментах</li>
        </ul>
        <EnrollBtn black />
      </div>
      <div className="running-line">
        <span className="running-line-text">
          енергонезалежні, працюємо попри відключення
        </span>
        <span className="running-line-text">
          енергонезалежні, працюємо попри відключення
        </span>
        <span className="running-line-text">
          енергонезалежні, працюємо попри відключення
        </span>
        <span className="running-line-text">
          енергонезалежні, працюємо попри відключення
        </span>
        <span className="running-line-text">
          енергонезалежні, працюємо попри відключення
        </span>
        <span className="running-line-text">
          енергонезалежні, працюємо попри відключення
        </span>
      </div>
    </header>
  );
};
