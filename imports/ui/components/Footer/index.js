import React from 'react';

const style = {
  width: '100%',
  paddingBottom: 10,
  textAlign: 'center',
  fontWeight: 300,
  fontSize: '.75em',
};

const Footer = () => (
  <span style={style}>
    © { (new Date()).getFullYear() } Footer
  </span>
);

export default Footer;
