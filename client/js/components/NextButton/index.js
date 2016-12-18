import React from 'react';

import './styles.scss';

export default function({ onClick }) {
  return (
    <button type="button" className="next-btn" onClick={onClick}>Далее</button>
  );
}
