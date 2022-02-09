import React, { useState } from 'react';
import {
  StyledImage,
  StyledLogin,
  StyledMainDiv,
  StyledSubTitle,
  StyledTitle,
} from './StyledHeader';

function Header({ setIsLoginMenuOpen }: any) {
  function HandleLogin() {
    setIsLoginMenuOpen(true);
  }

  return (
    <StyledMainDiv>
      <StyledImage src="https://wallpaperaccess.com/full/1261218.jpg" alt="" />
      <StyledTitle>Custom Clothes</StyledTitle>
      <StyledSubTitle>We Create. You Choose.</StyledSubTitle>
      <StyledLogin onClick={HandleLogin} id="login-button">
        Log in
      </StyledLogin>
    </StyledMainDiv>
  );
}

export default Header;
