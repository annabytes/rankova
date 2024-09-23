import React from 'react';
import './EnrollBtn.css';
import Link from 'next/link';

type Props = { black?: boolean; onCard?: boolean };

export const EnrollBtn = ({ black, onCard }: Props) => {
  return (
    <Link
      href={'https://n814279.alteg.io/company/764262/record-type?o='}
      target="_blank"
    >
      <button
        className={`enroll-btn ${black ? 'black' : ''} ${
          onCard ? 'on-card' : ''
        }`}
      >
        Записатись
      </button>
    </Link>
  );
};
