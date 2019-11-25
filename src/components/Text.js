import React from 'react';

//functional component
export default function Text(props) {
  const { isHeader, text } = props;

  //replacing all instances of h4 & p tags with next text component
  return isHeader ? <h4>{text}</h4> : <p>{text}</p>;
}

//
Text.propTypes = {
  text: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
  isHeader: PropTypes.bool.isRequired,
};
