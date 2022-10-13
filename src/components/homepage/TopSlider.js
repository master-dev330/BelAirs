import React, { useState } from 'react';
import './topSlider.css';
import slide1 from '../../assets/img/slide1.jpg';

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from 'reactstrap';

const items = [
  {
    src: slide1,
    altText: 'Slide 1',
    caption: 'MY LOCKER',
    subtile: 'L\'expérience locker pour vos évènements',
    slot: 'LA CONSIGNE DU CLICK & COLLECT MUTUALISÉ',
    key: 1,
  },
  {
    src: slide1,
    altText: 'Slide 2',
    caption: 'MY LOCKER',
    subtile: 'L\'expérience locker pour vos évènements',
    slot: 'LA CONSIGNE DU CLICK & COLLECT MUTUALISÉ',
    key: 2,
  },
  {
    src: slide1,
    altText: 'Slide 3',
    caption: 'MY LOCKER',
    subtile: 'L\'expérience locker pour vos évènements',
    slot: 'LA CONSIGNE DU CLICK & COLLECT MUTUALISÉ',
    key: 3,
  },
];

const  TopSlider = (args) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.key}
      >
        <img src={item.src} alt={item.altText} />
        <div className="carousel-caption d-none d-md-block">
          <h3>{item.caption}</h3>
          <p>{item.subtile}</p>
          <small>{item.slot}</small>
        </div>
      </CarouselItem>
    );
  });

  return (
    <>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        {...args}
      >
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
    </>
  );
}

export default TopSlider;