import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const prevPerson = () => {    
    setIndex((index) => {
      let newIndex = index - 1
      return newIndex
    })
  }
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1
      return newIndex
    })
  }
  const randomPerson = () => {
    setIndex((index) => {
      let newIndex = Math.floor(Math.random() * 4) // 0,1,2,3
      return newIndex
    }) 
  }

  const [index, setIndex] = useState(0)
  const { id, name, job, image, text } = people[index]
  return <article className="review">
    <div className="img-container">
      <img src={image} alt={name} className="person-img" />
      <span className="quote-icon">
        <FaQuoteRight />
      </span>
    </div>
    <h4 className="author">{name}</h4>
    <p className="job">{job}</p>
    <p className="info">{text}</p>
    <div className="button-container">
      <button className="prev-btn" onClick={prevPerson}>
        <FaChevronLeft />
      </button>
      <button className="next-btn" onClick={nextPerson}>
        <FaChevronRight />
      </button>
    </div>
    <button className="random-btn" onClick={randomPerson} >
      Suprise Me
    </button>
  </article>
};

export default Review;
