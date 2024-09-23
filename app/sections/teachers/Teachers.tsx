import { Slider } from '@/app/elements/slider/Slider';
import React from 'react';
import { teachers } from './teachersMock';
import { TeacherCard } from '@/app/elements/teacher-card/TeacherCard';

// type Props = {};

export const Teachers = () => {
  return (
    <section id="teachers">
      <Slider header="Наші викладачі">
        {teachers.map(
          ({ area, aboutMusic, photo, name, teaching, experience }) => (
            <TeacherCard
              key={Date()}
              name={name}
              photo={photo}
              area={area}
              exp={experience}
              aboutMusic={aboutMusic}
              teaching={teaching}
            />
          )
        )}
      </Slider>
    </section>
  );
};
