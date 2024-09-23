import { reviews } from './ReviewsData';
import React from 'react';
import Image from 'next/image';
import { Slider } from '../../elements/slider/Slider';
import './Reviews.css';


export const Reviews = () => {
  return (
    <section className="reviews">
      <Slider header='Відгуки'>
        {reviews.map((photo, i) => (
          <div key={i} className="review-photo-container">
            <Image
              src={photo.src}
              width={454}
              height={100}
              alt="review"
            />
          </div>
        ))}
      </Slider>
    </section>
  );
};
