import Link from 'next/link';
import React from 'react';
import './Career.css';
import { Nunito } from 'next/font/google';

const nunito = Nunito({
  subsets: ['cyrillic', 'cyrillic-ext', 'latin', 'latin-ext'],
  weight: ['800', '400'],
});

export const Career = () => {
  return (
    <section className="career">
      <svg
        className="yellow-wave"
        viewBox="0 0 1444 512"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 512C0 512 89.715 408.561 260.5 391.441C392.92 378.166 718.642 379.514 721.481 379.526C721.569 379.527 721.429 379.527 721.516 379.527C724.359 379.527 1093.76 379.527 1225 379.527C1459.25 379.527 1443 208.5 1443 208.5V0.5C1443 0.5 1261.5 102.561 721.5 102.561C478.246 102.561 307.74 102.561 193.802 102.561C86.6592 102.561 0 189.417 0 296.561V348V512Z"
          fill="#FFDF18"
        />
      </svg>
      <div className="career-content">
        <h2 className="career-header">Вакансії</h2>
        <p className={`${nunito.className} career-text`}>
          Якщо ти закоханий у музику, маєш досвід та бажання навчати та творити
          і хочеш долучитись <br /> до нашої команди – заповни нашу анкету{' '}
        </p>
      </div>
      <Link
        href={
          'https://docs.google.com/forms/d/e/1FAIpQLSdo0W2k9JKpuigvQJ5X5jHBmr1QFqNo6OQtdhbfQnhgJzA8Qw/viewform'
        }
        target="_blank"
      >
        <button className="black enroll-btn fill-form-btn">
          Заповнити анкету
        </button>
      </Link>
    </section>
  );
};
