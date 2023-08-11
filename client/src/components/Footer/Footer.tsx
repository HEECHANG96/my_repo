import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <SContainer>
      <p>
        &copy; 2023{' '}
        <Github
          href="https://github.com/HEECHANG96"
          target="_blank"
          rel="noopener noreferrer"
        >
          HEECHANG
        </Github>
        . All rights reserved.
      </p>
    </SContainer>
  );
};

export default Footer;

const SContainer = styled.footer`
  background-color: #333;
  color: white;
  padding: 20px;
  text-align: center;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const Github = styled.a`
  text-decoration: none;
  color: white;

  &:hover {
    color: blue;
  }
`;
