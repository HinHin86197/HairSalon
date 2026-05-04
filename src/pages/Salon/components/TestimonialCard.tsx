import React from 'react';
import './TestimonialCard.less';

interface TestimonialCardProps {
  quote: string;
  author: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author }) => {
  return (
    <div className="testimonial-card">
      <p className="quote">"{quote}"</p>
      <p className="author">- {author}</p>
    </div>
  );
};

export default TestimonialCard;
