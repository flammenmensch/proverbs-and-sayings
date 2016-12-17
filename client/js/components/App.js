import React, { PropTypes as T } from 'react';
import Proverb from './Proverb';

export default function App({ proverb, onNext }) {
  return (
    <div className="app">
      <Proverb text={proverb} />
      <button className="next-btn" onClick={onNext}>Далее</button>
    </div>
  );
}

App.propTypes = {
  proverb: T.string.isRequired,
  onNext: T.func.isRequired
};
