import React from 'react';
import './FaqItem.css';

export const FaqItem = ({ item }) => (
  <div className="FaqItem">
    <div className="FaqItem__Content">
      <h3 className="FaqItem__Question">
        K: {item.question}
      </h3>
      <div className="FaqItem__Answer">
        V: {item.answer}
      </div>
    </div>
  </div>
);