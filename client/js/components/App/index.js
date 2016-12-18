import React, { PropTypes as T } from 'react';
import Proverb from '../Proverb';
import Spinner from '../Spinner';
import NextButton from '../NextButton';

import './styles.scss';

export default function App({ loading, proverb, onNext }) {
  return (
    <div className="app">
      {
        loading ? (
          <div className="spinner-container">
            <Spinner />
          </div>
        ) : (null)
      }
      <div className="proverb-container">
        <Proverb text={proverb} />
      </div>
      <div className="button-container">
        <NextButton onClick={onNext} />
      </div>
    </div>
  );
}

App.propTypes = {
  loading: T.bool,
  proverb: T.string.isRequired,
  onNext: T.func.isRequired
};
