import { Slider } from '@/app/elements/slider/Slider';
import {prices} from './PricesMock'
import React from 'react';
import { PriceCard } from '@/app/elements/price-card/PriceCard';


export const Prices = () => {
  return (
    <section id="prices">
      <Slider header="Вартість">
        {prices.map(
          (priceCard) => (
            <PriceCard key={priceCard.title} card={priceCard} />
          )
        )}
      </Slider>
    </section>
  );
};
