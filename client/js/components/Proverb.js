import React, { PropTypes as T } from 'react';
import ReactAnimateOnChange from 'react-animate-on-change';

export default function Proverb({ text }) {
  return (
    <blockquote className="proverb">
      <ReactAnimateOnChange
        animate={true}
        baseClassName="animated"
        animationClassName="fadeInUp">
        {text}
      </ReactAnimateOnChange>
    </blockquote>
  );
}

Proverb.propTypes = {
  text: T.string
};

Proverb.defaultProps = {
  text: ''
};
