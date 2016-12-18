import React, { PureComponent, PropTypes as T } from 'react';
import ReactAnimateOnChange from 'react-animate-on-change';

import './styles.scss';

export default class Proverb extends PureComponent {
  render() {
    const { text } = this.props;
    const length = text.length;

    let modifier;

    if (length > 75) {
      modifier = 'proverb__long';
    } else if (length > 45) {
      modifier = 'proverb__medium';
    } else {
      modifier = '';
    }

    return (
      <blockquote className={`proverb ${modifier}`}>
        <ReactAnimateOnChange
          animate={true}
          baseClassName="animated"
          animationClassName="fadeInUp">
          {text}
        </ReactAnimateOnChange>
      </blockquote>
    );
  }
}

Proverb.propTypes = {
  text: T.string
};

Proverb.defaultProps = {
  text: ''
};
