import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

import "./style.css";

const items = [
  {
    src: "../../../Images/mylibrary.png",
    altText: 'Slide 1',
    caption: 'My Virtual Library',
    description: "A web application that uses MySQL relational databases to maintain a collection of books for a user.",
    link: "https://github.com/sircrouchalot/Virtual-Library"
},
  {
    src: "../../../Images/ToCookorNot.png",
    altText: 'Slide 2',
    caption: 'To Cook or Not To Cook',
    description: "An app that returns the top 5 restaurants in your area, as well as the top 5 recipes containing what you search for.",
    link: "https://github.com/sircrouchalot/To-Cook-Or-Not-To-Cook"
  },
  {
    src: "../../../Images/Employee_Tracker.PNG",
    altText: 'Slide 3',
    caption: 'Employee Tracker',
    description: "A CLI application that takes user input to build a database of employees.",
    link: "https://github.com/sircrouchalot/Employee-Tracker"
  },
  {
    src: "../../../Images/scheduler.png",
    altText: 'Slide 4',
    caption: 'Work Day Scheduler',
    description: "A work-day scheduler that stores your tasks for the day and To Do items.",
    link: "https://github.com/sircrouchalot/UT-HW5-Day-Scheduler"
  },
  {
    src: "../../../Images/note-taker.PNG",
    altText: 'Slide 5',
    caption: 'Note Taking Application',
    description: "A simple note app, that uses MySQL databases to persistently store the user's notes.",
    link: "https://github.com/sircrouchalot/Note-Taking-App"
  },
  {
    src: "../../../Images/quiz.PNG",
    altText: 'Slide 6',
    caption: 'Code Quiz',
    description: "A short coding quiz that records high scores using MySQL and Sequelize",
    link: "https://github.com/sircrouchalot/UT-HW4-Code-Quiz"
  }
];

const PortfolioCarousel = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <a href={item.link} target='_blank' rel="noopener noreferrer"><img src={item.src} href={item.link} alt={item.altText} /></a>
        <CarouselCaption captionText={item.description} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default PortfolioCarousel;