import React from 'react';
import propTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <div>
      <h2>{title}</h2>
      {children}
    </div>
  );
};

Section.propTypes = {
  title: propTypes.string,
};

export default Section;
