import React from 'react';
import { photos } from './PhotosCollection';
import { Slider } from '@/app/elements/slider/Slider';
import Image from 'next/image';
import './Photos.css'

export const Photots = () => {
  return (
    <section className='photos'>
      <Slider header="">
        {photos.map((photo, i) => (
          <div key={i} className="photo-container">
            <Image
              key={i}
              src={photo.src}
              alt="Ranok Studio"
              width={764}
              height={482}
            />
          </div>
        ))}
      </Slider>
    </section>
  );
};
