import React from 'react';
import Image from 'next/image';
import GiftCard from '@/app/img/gift.png';
import './Gift.css';
import Link from 'next/link';

export const Gift = () => {
  return (
    <section id='gift-card' className="gift">
      <div className="gift-card-container">
        <Image
          className="gift-card"
          src={GiftCard.src}
          width={406}
          height={300}
          alt="gift card"
        />
        <Image
          className="gift-card-blurred"
          src={GiftCard.src}
          width={406}
          height={300}
          alt="gift card"
        />
      </div>
      <div className="gift-card-content">
        <h2 className="gift-card-title">Подарункові сертифікати</h2>
        <p className="gift-card-desc">
          У нас ти можеш придбати сертифікати та подарувати музичні враження
          своїм рідним та друзям.
        </p>
        <Link target='_blank' href="https://o2102.alteg.io/loyalty">
          <button className='enroll-btn buy-btn'>Придбати</button>
        </Link>
      </div>
    </section>
  );
};
